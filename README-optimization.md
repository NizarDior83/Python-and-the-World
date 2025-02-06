# Web Scraping Script: Best Movies from Empire Online

This project is a web scraping script that extracts a list of the top 100 best movies ranked by Empire Magazine from the following URL:

[Empire Online Best Movies](https://www.empireonline.com/movies/features/best-movies-2/)

The script fetches structured data about the movies, including their rank, title, release date, director, cast, and a brief description.

---

## Table of Contents

1. [Input](#input)
2. [Output](#output)
3. [Libraries Used](#libraries-used)
4. [Columns in the Output CSV](#columns-in-the-output-csv)
5. [How the Script Works](#how-the-script-works)
6. [Code Comparisons](#code-comparisons)

---

## Input

- **Website URL**: [https://www.empireonline.com/movies/features/best-movies-2/](https://www.empireonline.com/movies/features/best-movies-2/)
- The script scrapes data from this webpage containing the list of the top 100 best movies as ranked by Empire Magazine.

---

## Output

- **CSV File**: `best_movies.csv`
  - This file contains structured data extracted from the webpage, including detailed movie information.

---

## Libraries Used

| Library                          | Purpose                                                                 |
| --------------------------------- | ----------------------------------------------------------------------- |
| `asyncio`                         | Handles asynchronous execution to improve efficiency in fetching web data. |
| `aiohttp`                         | Performs asynchronous HTTP requests to fetch the HTML content.          |
| `BeautifulSoup (from bs4)`        | Parses and extracts relevant elements from the HTML content.            |
| `csv`                             | Writes extracted movie data into a structured CSV file.                 |

---

## Columns in the Output CSV

| Column Name                      | Description                                                               |
| --------------------------------- | ------------------------------------------------------------------------- |
| **Top 100**                       | The movie’s rank in the top 100 list.                                     |
| **Title**                         | The title of the movie.                                                  |
| **Release Date**                  | The movie’s release year (if available).                                  |
| **Image**                          | The URL of the movie’s main image/poster.                                 |
| **Director**                      | The name(s) of the movie's director(s).                                   |
| **Cast**                          | The list of main actors featured in the movie.                            |
| **Why Should We Watch This Gem**   | A brief description or review of the movie, explaining why it is worth watching. |

---

## How the Script Works

1. **Fetching HTML Content**:  
   The script initiates an asynchronous HTTP request to retrieve the webpage's HTML.

2. **Parsing the HTML**:  
   The script processes the HTML using BeautifulSoup to locate specific movie-related information, such as titles, images, directors, cast, and descriptions.

3. **Extracting and Cleaning Data**:  
   The script loops through the extracted elements, formats the data, and checks for missing information like director or cast. Fallback mechanisms are used to extract these details.

4. **Saving Data to CSV**:  
   Once the data is extracted, it is written into a CSV file (`best_movies.csv`) for structured storage and easy access.

---

## Code Comparisons

### **First Code: Scraping.ipynb**

- **Libraries Used**:
  - `asyncio`, `aiohttp`, `BeautifulSoup`, `csv`
- **Approach**:
  - Asynchronous requests are used to fetch the HTML content.
  - Data is extracted using BeautifulSoup and saved into a CSV file.

---

### **Second Code: Scraping-opt.ipynb**

- **Libraries Used**:
  - `csv`, `time`, `selenium`
- **Approach**:
  - Selenium is used to interact with the webpage dynamically, allowing better handling of dynamic content.
  - WebDriver waits for specific elements to load before extracting data.
  - The script then extracts the movie data and saves it into a CSV file.

---

## Summary of the Changes Made

| Aspect                    | First Code (Original)                                   | Optimized Code (Second)                                  | Impact on Time Efficiency                                      |
| ------------------------- | ------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ |
| **Wait Mechanism**         | Uses `time.sleep()` to wait before extraction.          | Uses `WebDriverWait` for dynamic waits.                   | More efficient: Avoids unnecessary delays and speeds up execution. |
| **Error Handling**         | Basic error handling for missing data.                  | Enhanced error handling for missing data.                 | More reliable: Handles missing elements with fallback logic.     |
| **Data Extraction**        | Sequential extraction of data.                          | Optimized extraction within the loop.                     | Reduces redundant operations, speeding up data collection.      |
| **Code Structure**         | Simple structure with some repetitive checks.           | Modular structure with better error handling and waits.   | Better readability and maintainability.                       |

---

## Conclusion

This web scraping project efficiently extracts the top 100 best movies from Empire Magazine's website. The optimized version of the script improves efficiency, reduces errors, and speeds up the data extraction process, resulting in a more reliable and faster scraping solution.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

