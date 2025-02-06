import csv
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

# --- Setup Selenium WebDriver ---
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run headless (without opening the browser window)
chrome_options.add_argument("--disable-gpu")  # Disable GPU hardware acceleration (for headless mode)
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=chrome_options)

# --- Navigate to the target URL ---
url = "https://www.empireonline.com/movies/features/best-movies-2/"
print("Navigating to", url)
driver.get(url)  # Opens the URL in the browser
time.sleep(5)  # Wait for 5 seconds to allow dynamic content to load

# --- Extract elements using selectors that match the HTML snippet ---
# Find the movie titles using CSS selectors
title_elements = driver.find_elements(By.CSS_SELECTOR, "span.content_content__i0P3p[data-test='content'] h2 strong")
# Find the image URLs for each movie
image_elements = driver.find_elements(By.CSS_SELECTOR, "div.inlineImage_image-container__aklxu[data-test='inline-image-container'] img")
# Find the director names using XPath
director_elements = driver.find_elements(By.XPATH, "//span[@class='content_content__i0P3p' and @data-test='content']/p[strong[contains(text(),'Director:') or contains(text(),'Directors:')]]")
# Find the cast names using XPath
cast_elements = driver.find_elements(By.XPATH, "//span[@class='content_content__i0P3p' and @data-test='content']/p[strong and strong[contains(text(),'Starring:')]]")
# Find the descriptions of the movies using XPath
description_elements = driver.find_elements(By.XPATH, "//span[@data-test='content']/p[not(contains(.,'Director:')) and not(contains(.,'Starring:'))]")

# Get the number of movies to iterate over
num_movies = len(title_elements)
# List to hold all the extracted movie data
movies_data = []

# --- Loop through each movie and extract its details ---
for idx in range(num_movies):
    try:
        # Extract the title and release date from the strong text
        strong_text = title_elements[idx].text.strip()
        i_first_close = strong_text.find(")")  # Find the first closing parenthesis
        i_last_open = strong_text.rfind("(")  # Find the last opening parenthesis
        i_last_close = strong_text.rfind(")")  # Find the last closing parenthesis
        
        if i_last_open == -1 or i_last_close == -1 or i_last_open <= i_first_close:
            title = strong_text[i_first_close+1:].strip()  # Extract title if no release date
            release_date = ""  # No release date found
        else:
            title = strong_text[i_first_close+1:i_last_open].strip()  # Extract title before release date
            release_date = strong_text[i_last_open+1:i_last_close].strip()  # Extract release date
        
        # Extract the image URL if available
        image = image_elements[idx].get_attribute("src") if idx < len(image_elements) else ""
        # Extract director(s) name
        director = director_elements[idx].text.replace("Director:", "").replace("Directors:", "").strip() if idx < len(director_elements) else ""
        # Extract cast names
        cast = cast_elements[idx].text.replace("Starring:", "").strip() if idx < len(cast_elements) else ""
        # Extract movie description
        description = description_elements[idx].text.strip() if idx < len(description_elements) else ""
        
        # --- Handle last director fallback more robustly ---
        if idx == num_movies - 1 and not director:  # If it's the last movie and no director found
            try:
                # Search for director information outside the loop
                director_element = driver.find_element(By.XPATH, f"//span[@class='content_content__i0P3p' and @data-test='content']//p[strong[contains(text(),'Director:') or contains(text(),'Directors:')]]")
                director = director_element.text.replace("Director:", "").replace("Directors:", "").strip()  # Extract director name
            except Exception as e:
                print(f"Error finding director for {title}: {e}")
                director = "Unknown"  # If error, set to 'Unknown'

        # --- Handle last cast fallback ---
        if idx == num_movies - 1 and not cast:  # If it's the last movie and no cast found
            try:
                # Search for cast information outside the loop
                cast_element = driver.find_element(By.XPATH, f"//span[@class='content_content__i0P3p' and @data-test='content']//p[strong[contains(text(),'Starring:')]]")
                cast = cast_element.text.replace("Starring:", "").strip()  # Extract cast names
            except Exception as e:
                print(f"Error finding cast for {title}: {e}")
                cast = "Unknown"  # If error, set to 'Unknown'

        # Append the extracted movie data into the list
        movies_data.append({
            "Top 100": idx + 1,  # Movie position in the list
            "Title": title,  # Movie title
            "Release date": release_date,  # Movie release date
            "Image": image,  # Image URL
            "Director": director,  # Director(s) name
            "Cast": cast,  # Cast names
            "Why should we watch this gem": description  # Movie description
        })
    except Exception as e:
        print("Error processing movie at index", idx, ":", e)

# --- Write the extracted movie data to a CSV file ---
csv_file = "best_movies.csv"
fieldnames = ["Top 100", "Title", "Release date", "Image", "Director", "Cast", "Why should we watch this gem"]

try:
    # Open the CSV file for writing
    with open(csv_file, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()  # Write the header row
        for movie in movies_data:
            writer.writerow(movie)  # Write each movie's data as a row
    print("\nData for", len(movies_data), "movies has been written to", csv_file)
except Exception as e:
    print("Failed to write CSV file:", e)

# Close the WebDriver session
driver.quit()
print("WebDriver session ended.")
