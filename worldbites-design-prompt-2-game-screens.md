# WorldBites — Claude Design Prompt 2 of 2
# Game UI Screens (3 Mobile Screens)

> Paste everything below this line into Claude Design at claude.ai/design
> NOTE: Use Prompt 1 (Brand Kit) first and validate colours/style before running this one.

---

Create a 3-screen mobile UI mockup in Claude Design for **WorldBites**, a casual merge game for ages 3+ where children combine food ingredients to unlock world recipes. Show the screens at iPhone 15 Pro dimensions (393×852px), framed inside realistic phone hardware.

<goal>
Produce three high-fidelity mobile screen mockups — Main Game Board, Recipe Book, and World Map — sufficient for a developer to begin implementation and for a founder to validate the UX direction. Output as a single wide canvas showing all three phones side by side with labels.
</goal>

<target_audience>
A mobile game founder (3+ children's app space) and their React Native developer, reviewing these screens to decide if the visual direction is right before commissioning custom art assets. They need to see real UI density, real navigation, and real content — not placeholder wireframes.
</target_audience>

<design_system>
  <colors>
    <!-- Copy these exactly from Prompt 1 — consistency is critical -->
    <color role="primary.sunshine" hex="#FFB627" />
    <color role="primary.spice" hex="#FF6B35" />
    <color role="accent.herb" hex="#06D6A0" />
    <color role="accent.ocean" hex="#118AB2" />
    <color role="ground.parchment" hex="#FFF3E0" />
    <color role="ground.soil" hex="#3D2B1F" />
    <color role="ground.soil-mid" hex="#6B4C3B" />
    <color role="tile.grain" hex="#FFD93D" />
    <color role="tile.protein" hex="#FFB5A7" />
    <color role="tile.herb" hex="#B8F2E6" />
    <color role="tile.processed" hex="#FFA62B" />
    <color role="shadow.clay" hex="#C8855A" />
  </colors>
  <typography>
    <font role="display" family="Fredoka" weight="700" />
    <font role="ui" family="Nunito" weight="400 600 800" />
  </typography>
  <style>
    Claymorphism Mobile.
    ALL shadows: warm amber-brown (#C8855A) offset, never black.
    Shadow stack: 0 2px 0 #C8855A, 0 5px 0 rgba(200,133,90,0.4), 0 12px 24px rgba(61,43,31,0.15).
    Border-radius: 24px cards, 20px buttons/tiles, 999px badges/pills.
    Press animation: scale(0.92) spring — show as a subtle visual indicator on "active" tiles.
    Screen background: Parchment (#FFF3E0) for game board and recipe screens.
    World map screen background: Ocean Blue (#118AB2) gradient to dark teal.
    No grey shadows anywhere. No flat white backgrounds.
  </style>
  <layout>
    <format>Three iPhone 15 Pro frames (393×852pt each) side by side on a dark canvas (#1A1008)</format>
    <phones>Show realistic phone bezels in space black, with Dynamic Island notch at top. No home buttons.</phones>
    <labels>Below each phone: screen name in white Fredoka 700 18px centred</labels>
    <spacing>80px gap between phones, 48px padding around the canvas edge</spacing>
  </layout>
</design_system>

---

<screen id="1" name="Game Board — Japan Region">

## Screen 1: Main Game Board

This is the primary gameplay screen. Japan region is active. Show it mid-game with a mix of filled and empty tile slots.

### Status Bar (top, inside screen)
- Time: "9:41" left-aligned, Nunito 800 14px, Dark Soil
- Right: signal dots, wifi, battery icons in Dark Soil
- Dynamic Island at top centre (hardware element, dark pill shape)

### Game HUD (below status bar, 52px tall)
Layout: left badge + right counter, horizontal flex, 16px horizontal padding.

Left — Region Badge:
- Pill shape, Dark Soil (#3D2B1F) background, border-radius 999px
- Content: flag emoji "🗾" + "Japan" in Fredoka 700 13px, white text
- Clay shadow underneath

Right — Coin Counter:
- Pill shape, Sunshine Amber (#FFB627) background, border-radius 999px
- Content: "🪙 1,240" in Nunito 800 14px, Dark Soil text
- Clay shadow underneath

### Recipe Progress Bar (below HUD, 36px tall, 16px horizontal padding)
- Label row: "Recipes unlocked" left + "3 / 5" right, Nunito 600 11px, Dark Soil-mid (#6B4C3B)
- Track: full width, 8px tall, rounded, rgba(61,43,31,0.10) background
- Fill: 60% width, gradient #06D6A0 → #0FEBA8

### Game Grid (main content area)
5 columns × 6 rows of ingredient tiles. Grid fills from below the progress bar to above the bottom nav.
Gap between tiles: 6px. Horizontal padding: 16px.

Calculate tile size to fill the available width.

**Tile visual rules (repeat from brand kit):**
- Border-radius: 14px (slightly less than brand card for density)
- Clay shadow: warm amber offset
- Gradient fill per type
- Centred emoji at 55% of tile height
- Name label in Fredoka 600 8px below emoji, Dark Soil

**Grid contents — exactly as specified:**

Row 0 (top): [Grain:🌾:Rice] [Empty] [Protein★:🐟:Fish] [Empty] [Herb:🌿:Seaweed]
Row 1: [Empty] [Grain:🥚:Egg] [Empty] [Herb:🌿:Herb] [Empty]
Row 2: [Grain:🌾:Rice] [Empty] [Processed:🍚:Bowl] [Empty] [Grain:🌾:Rice]
Row 3: [Empty] [MERGED:🍣:Sushi★] [Empty] [Empty] [Herb:🥬:Leaf]
Row 4: [Grain:🥚:Egg] [Empty] [Herb:🌿:Herb] [Protein★:🐟:Fish] [Empty]
Row 5 (bottom): [Empty] [Processed:🍙:Onigiri] [Empty] [Empty] [Grain:🥚:Egg]

**Special tile states:**
- Two tiles marked ★ (row 0 col 2 and row 4 col 3 — both "Fish"): show SELECTED state with Sunshine Amber glow ring (3px, 0 0 0 3px rgba(255,182,39,0.55)) and very subtle scale up
- Tile at Row 3 col 1 marked MERGED: "Sushi★" tile shows UNLOCK state — deeper amber gradient, Fresh Teal (#06D6A0) 3px ring glow, gold ★ badge top-right, clay shadow more prominent. This tile is slightly larger (scale 1.05) suggesting it just appeared.

### Bottom Navigation (56px, above home indicator)
4 tabs in a horizontal flex, background is Parchment (#FFF3E0), thin top border rgba(61,43,31,0.10).

Tab items, each: icon on top, label below in Nunito 700 10px.
- [🎮 Play] — ACTIVE: icon and label in Spice Orange (#FF6B35), subtle orange dot indicator above icon
- [📖 Recipes] — inactive: Dark Soil-mid
- [🌍 World] — inactive: Dark Soil-mid
- [⚙️ Profile] — inactive: Dark Soil-mid

</screen>

---

<screen id="2" name="Recipe Book">

## Screen 2: Recipe Book Screen

The player's collection of discovered and locked recipes. Dark header, light card list below.

### Status Bar
Same as Screen 1.

### Header Section (gradient dark background, ~110px tall)
Background: gradient from #2A1408 (top) to #3D2B1F (bottom) — rich dark soil
- Title: "📖 Recipe Book" in Fredoka 700 24px, Sunshine Amber (#FFB627)
- Subtitle: "3 of 20 recipes unlocked" in Nunito 400 14px, rgba(255,243,224,0.65)
- Right side: a small horizontal progress strip (3 amber dots + 17 dark dots) showing count

### Filter Pills (below header, 48px row, 16px padding, horizontal scroll hint)
Show 4 filter pills in a row:
- "All" — selected: Sunshine Amber background, Dark Soil text, clay shadow
- "Japan" — unselected: rgba(61,43,31,0.08) background, Dark Soil-mid text
- "Mexico" — unselected: same
- "🔒 Locked" — unselected: same
All pills: Nunito 700 13px, border-radius 999px, 10px vertical 16px horizontal padding.

### Recipe List (scrollable content area)
Show 6 recipe items as cards in a vertical list, 12px gap, 16px horizontal padding.

**Unlocked Recipe Card style:**
- Background: white
- Border: 1.5px solid rgba(61,43,31,0.08)
- Border-radius: 16px
- Clay shadow: subtle (lighter than game tiles)
- Height: ~80px
- Layout: left thumbnail (48px circle, filled with gradient) | centre info column | right star row

**Locked Recipe Card style:**
- Same structure but 50% opacity overall
- Thumbnail shows a 🔒 icon instead of food
- Name shows as "???" 
- Region and difficulty visible (still a teaser)

Recipe item data:

1. [UNLOCKED] Thumbnail gradient: Spice-to-Amber. Emoji: 🍣
   Name: "Classic Sushi Roll" — Fredoka 700 16px, Dark Soil
   Region: "🗾 Japan" — Nunito 600 12px, Dark Soil-mid
   Stars: ★★★☆☆ (3 filled Sunshine Amber, 2 empty rgba(61,43,31,0.15))
   Right: small "VIEW" button chip in Fresh Teal background

2. [UNLOCKED] Thumbnail: Grain-yellow gradient. Emoji: 🍙
   Name: "Onigiri" — Fredoka 700 16px
   Region: "🗾 Japan"
   Stars: ★★☆☆☆

3. [UNLOCKED] Thumbnail: Protein-coral gradient. Emoji: 🍜
   Name: "Shoyu Ramen" — Fredoka 700 16px
   Region: "🗾 Japan"
   Stars: ★★★★☆

4. [LOCKED] 
   Name: "???" region: "🇲🇽 Mexico" — Nunito 600 12px visible as teaser
   Lock icon thumbnail

5. [LOCKED]
   Name: "???" region: "🇮🇹 Italy"

6. [LOCKED]  
   Name: "???" region: "🇮🇳 India"

### Bottom Navigation
Same 4 tabs as Screen 1 but "📖 Recipes" is the ACTIVE tab (Spice Orange indicator).

</screen>

---

<screen id="3" name="World Map">

## Screen 3: World Map Screen

Full-bleed ocean background. Shows 5 world regions as clay 3D pins on a stylised map.

### Status Bar
White text/icons (on dark background).

### Header (no separate block — title floats over the map)
Top area: "🌍 Explore the World" in Fredoka 700 22px, white, with subtle text-shadow for legibility.
Below: "2 of 5 regions unlocked" in Nunito 400 13px, rgba(255,255,255,0.75).

### Full-Screen Map Background
Background: radial gradient from #1A8FB2 (bright centre) to #0A4A6B (edges).
Add subtle wave/ocean texture patterns in slightly lighter blue (opacity 10%) suggesting sea.
Scattered very small white dot clusters suggesting stars or seafoam.
Do NOT show a realistic world map — keep it abstract and toy-like.

### 5 Region Pins (scattered across the map at approximate real-world positions)
Each pin = a clay circle button (56px diameter) + country label below + star rating below label.

Clay pin visual: circle with gradient fill, 3px white border at 35% opacity, clay shadow stack beneath.

**Pin 1 — Japan (top-right area of map)**
Status: UNLOCKED — full colour, fully opaque
Gradient: Spice Orange #FF9B70 → #FF6B35
Content: "🗾" emoji centred
Label: "Japan" in Fredoka 700 13px, white
Stars below label: ★★★ (3 Sunshine Amber filled stars, small, 10px)

**Pin 2 — Mexico (centre-left area)**
Status: UNLOCKED — full colour, fully opaque
Gradient: Grain Yellow #FFE57A → #FFD93D
Content: "🌮" emoji centred (placeholder — final art = clay taco illustration)
Label: "Mexico" in Fredoka 700 13px, white
Stars: ★★ (2 filled)

**Pin 3 — Italy (centre area)**
Status: LOCKED — greyed out, lock icon
Background: rgba(255,255,255,0.18) — translucent white clay
Content: "🔒" at 70% opacity
Label: "Italy" in Nunito 600 12px, rgba(255,255,255,0.60) — visible as teaser
No stars shown (locked)

**Pin 4 — India (right-centre)**
Status: LOCKED
Same locked style
Label: "India"

**Pin 5 — Morocco (centre, slightly left)**
Status: LOCKED
Same locked style
Label: "Morocco"

### Dotted Path Lines
Draw faint dotted lines connecting: Japan → Mexico (curved arc going upward over the Pacific), Mexico → Italy, Italy → India, India → Morocco. Lines in rgba(255,255,255,0.25), 2px dotted. These show the unlock progression path.

### Floating Action Area (bottom of screen, above nav)
A frosted glass card (backdrop-filter blur effect, rgba(255,255,255,0.15) background, 1px white 20% border):
- Left: "Next: Unlock Italy" in Fredoka 700 16px, white
- Right: A CTA button "500 🪙" in Sunshine Amber background, Dark Soil text, clay shadow

### Bottom Navigation
Same 4 tabs, "🌍 World" is ACTIVE (Spice Orange).

</screen>

---

<execution_rules>
1. All three phones on a single dark canvas (#1A1008 background). Label each phone below with the screen name in Fredoka 700 18px white.
2. Use EXACTLY the hex values provided. No approximations, no additional colours.
3. Font: Fredoka for ALL headings/titles/names, Nunito for ALL labels/body/UI text. Load via Google Fonts.
4. ALL shadows use warm amber-brown (#C8855A) as the offset colour. Zero grey or black shadows anywhere.
5. The game board (Screen 1) tile grid must be exactly 5 columns × 6 rows as specified. Do not simplify.
6. Do not use stock photography or realistic illustrations. Use emoji as placeholder ingredient content with the understanding that final art will be custom clay illustrations.
7. Minimum tap target: 44px for any interactive element. Tiles in the grid may be smaller if the grid demands it, but the bottom nav tabs must be at minimum 44px tall.
8. Text contrast: all body text must meet WCAG AA (4.5:1) against its background. Dark Soil (#3D2B1F) on Parchment (#FFF3E0) passes comfortably.
9. The World Map (Screen 3) is the single permitted departure from Parchment background — it uses the ocean blue gradient deliberately.
10. Do not add any sections, screens, or components not described above. Deliver exactly what is specified.
11. Place screen labels ("Screen 1 — Game Board", "Screen 2 — Recipe Book", "Screen 3 — World Map") below each phone in the canvas, not inside the phone screens.
</execution_rules>

Generate the complete 3-screen mobile UI mockup now.
