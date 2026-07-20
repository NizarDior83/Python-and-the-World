# WorldBites — Claude Design Prompt 1 of 2
# Brand Kit & Visual Identity

> Paste everything below this line into Claude Design at claude.ai/design

---

Create a brand identity sheet in Claude Design for a mobile game called **WorldBites** — a 3+ casual merge game where children drag and combine food ingredients to unlock recipes from around the world.

<goal>
Produce a single-page brand reference sheet showing the WorldBites visual identity: logo mark, full colour palette with usage notes, typography scale, and the core ingredient tile component in all five states. This sheet will be used by developers and illustrators to stay consistent when building the app assets.
</goal>

<target_audience>
The people viewing this sheet are mobile developers, a freelance illustrator, and the founder. They need to see exactly what the brand looks, feels, and behaves like before any code is written. They are validation-mode: deciding whether to proceed with this visual direction.
</target_audience>

<design_system>
  <colors>
    <color role="primary.sunshine" hex="#FFB627" intent="Main CTA buttons, coin counter, star ratings, primary highlights. The universal warmth of food." />
    <color role="primary.spice" hex="#FF6B35" intent="Merge fire effects, gradient partner to Sunshine on CTAs, energy moments." />
    <color role="accent.herb" hex="#06D6A0" intent="Region unlocks, recipe success state, new discovery moments. The world's freshness." />
    <color role="accent.ocean" hex="#118AB2" intent="World map water, secondary interactive elements, global reach." />
    <color role="ground.parchment" hex="#FFF3E0" intent="Game board background, recipe card base, ingredient tile empty state. Like flour, like a recipe card." />
    <color role="ground.soil" hex="#3D2B1F" intent="ALL body text, tile outlines, borders. Earthy dark brown — never harsh black." />
    <color role="ground.soil-mid" hex="#6B4C3B" intent="Secondary text, muted labels, icon strokes at rest." />
    <color role="tile.grain" hex="#FFD93D" intent="Ingredient tile fill for grains, rice, bread — warm golden yellow." />
    <color role="tile.protein" hex="#FFB5A7" intent="Ingredient tile fill for fish, meat, egg — soft coral pink." />
    <color role="tile.herb" hex="#B8F2E6" intent="Ingredient tile fill for herbs, leaves, seaweed — cool mint." />
    <color role="tile.processed" hex="#FFA62B" intent="Ingredient tile fill for cooked/processed foods — deeper amber." />
    <color role="shadow.clay" hex="#C8855A" intent="The warm clay offset shadow used under ALL elevated elements. Never black shadows." />
  </colors>
  <typography>
    <font role="display" family="Fredoka" weight="700" usage="App title, region names, recipe names, big moments. Wide, rounded, friendly." />
    <font role="ui" family="Nunito" weight="400 600 800" usage="Body text, UI labels, ingredient names, recipe descriptions." />
    <font role="badge" family="Nunito" weight="800" usage="Counters, star counts, short caps labels — tabular-nums for digits." />
  </typography>
  <style>
    Claymorphism — every element should feel like a soft, squeezable clay toy.
    All shadows use warm amber-brown (#C8855A) offset, never black or grey.
    Shadow stack: 0 2px 0 #C8855A, 0 5px 0 rgba(200,133,90,0.4), 0 12px 24px rgba(61,43,31,0.15).
    Border-radius: 32px for large cards, 20px for buttons, 14px for small tiles, 999px for badges.
    Borders: 2.5–3px solid rgba(61,43,31,0.10) on all raised elements.
    Press animation: scale(0.92) spring on tap — cubic-bezier(0.34, 1.56, 0.64, 1).
    No harsh blacks anywhere in the brand. No gradients using grey or white.
  </style>
  <layout>
    <format>1440px wide single-page brand sheet, portrait scroll if needed</format>
    <grid>4-column layout with generous white space on parchment (#FFF3E0) background</grid>
    <spacing>Minimum 48px between sections, 24px between component groups</spacing>
  </layout>
</design_system>

---

<section id="header">
## Page header
Large title: "WorldBites — Brand Identity"
Subtitle: "Visual reference for developers, illustrators, and founders"
Use Fredoka 700 at 48px for the title on a dark soil (#3D2B1F) background strip.
Place the logo mark (described below) to the left of the title.
</section>

<section id="logo">
## Logo Mark — 3 sizes

Draw the WorldBites logo mark in three sizes: 128px, 64px, 32px.

The logo is a CLAY 3D GLOBE — not flat, not photorealistic. Think: a friendly clay toy globe sitting on a shelf in a children's room.

Visual description:
- Outer shape: Perfect circle, radial gradient from warm golden-yellow (#FFD176 at top-left highlight) to rich amber (#FF9B20 at bottom-right)
- The globe has simplified continent-shaped blobs in Fresh Teal (#06D6A0) — abstract, not geographically accurate, just friendly land shapes
- A soft white/cream highlight ellipse in the upper-left area (30% opacity) to sell the clay 3D depth
- Crossed in the centre: a fork (left) and a spoon (right) drawn in Dark Soil (#3D2B1F), thick rounded strokes (3px), no sharp ends
- Clay shadow below the globe: a warm amber-brown ellipse blur at the base suggesting it's sitting on a surface
- NO outlines, NO harsh edges, NO gradients involving grey

Show the logo on three backgrounds: Parchment (#FFF3E0), Dark Soil (#3D2B1F), and Sunshine Amber (#FFB627).

Below each logo size, show the full wordmark: logo mark + "WorldBites" in Fredoka 700, colour matching the background's foreground.
</section>

<section id="palette">
## Colour Palette

Show 6 primary swatches in a horizontal row. Each swatch is a tall rounded rectangle (clay shadow underneath) showing:
- The gradient version of the colour (lighter at top-left, deeper at bottom-right)
- Colour name in Fredoka 600 (e.g. "Sunshine")
- Hex value in Nunito 400 monospace style
- One-line usage note in Nunito 400 12px

Swatches in order:
1. Sunshine Amber — gradient #FFD176 → #FFB627 — "CTA, coins, stars"
2. Spice Orange — gradient #FF9B70 → #FF6B35 — "Merge fire, energy"
3. Fresh Teal — gradient #5EEFD4 → #06D6A0 — "Unlock, success"
4. Ocean Blue — gradient #3AAECC → #118AB2 — "World map, water"
5. Parchment — gradient #FFF9EE → #FFE8C2 — "Board, cards, base"
6. Dark Soil — gradient #6B4C3B → #3D2B1F — "All text, borders"

Below the swatches, show 4 tile colour chips in a smaller row labelled "Ingredient Tile Palette":
- Grain Yellow #FFD93D
- Protein Coral #FFB5A7
- Herb Mint #B8F2E6
- Processed Amber #FFA62B

No chip needs a shadow — just a rounded square colour sample with label underneath.
</section>

<section id="typography">
## Typography Scale

Show the full type scale on a white card with clay shadow, using real WorldBites copy (no Lorem Ipsum).

Scale items, each showing the specimen text + metadata label to the right:

1. Fredoka 700 · 40px · Line-height 1.0
   Specimen: "Japan — Land of Ramen"
   Label: "Region Title / Unlock Headline"

2. Fredoka 700 · 24px · Line-height 1.1
   Specimen: "Classic Sushi Roll"
   Label: "Recipe Name / Card Title"

3. Fredoka 600 · 18px · Line-height 1.2
   Specimen: "Fresh Tuna · Tier 2 Ingredient"
   Label: "Ingredient Name / Tile Label"

4. Nunito 600 · 16px · Line-height 1.6
   Specimen: "Sushi is made from vinegared rice topped with raw fish. Merge rice and tuna to create your first roll!"
   Max 55 characters per line. Label: "Body / Recipe Description"

5. Nunito 800 · 13px · Uppercase · Letter-spacing 0.12em
   Specimen: "NEW UNLOCK · RECIPE COMPLETE"
   Label: "Badge / Status Label"
   Show these as pill chips — Spice Orange background for NEW UNLOCK, Fresh Teal background for RECIPE COMPLETE, white text.

6. Nunito 800 · 20px · font-variant-numeric tabular-nums
   Specimen: "× 1,240 🪙"
   Label: "Counter / Coin Display"
</section>

<section id="tiles">
## Ingredient Tile Component — All 5 States

Show 5 large ingredient tiles side by side (each ~120px square) with labels below. These are the core game objects.

Clay tile rules for all states:
- Square with border-radius 20px
- 2.5px border: rgba(61,43,31,0.10)
- Clay shadow stack: 0 3px 0 #C8855A, 0 6px 0 rgba(200,133,90,0.35), 0 14px 24px rgba(61,43,31,0.14)
- Centred content area: emoji illustration at 50% of tile area, name label in Fredoka 600 at 11px below

**Tile 1 — Empty Slot**
Background: rgba(255,243,224,0.5) — faint warm cream
Content: a "+" sign in rgba(61,43,31,0.20)
Dashed border: 2.5px dashed rgba(61,43,31,0.15), NO clay shadow
Label below: "Empty Slot"

**Tile 2 — Grain Tier 1**
Background: gradient from #FFE57A top-left to #FFD93D bottom-right
Content: a rice/wheat grain icon (🌾 or custom simple illustration) + label "Rice Grain"
Tier badge: small circle top-right, Dark Soil background, white "1" in Nunito 800 10px
Label below: "Grain · Tier 1"

**Tile 3 — Protein Tier 2**
Background: gradient from #FFC5BA top-left to #FFB5A7 bottom-right
Content: fish illustration (🐟) + label "Fish Fillet"
Tier badge: "2"
Label below: "Protein · Tier 2"

**Tile 4 — Selected for Merge**
Same as Tile 2 (Grain Tier 1) but with:
- Outer glow ring: 3px solid #FFB627, box-shadow adds 0 0 0 3px rgba(255,182,39,0.5)
- Subtle scale hint: slightly larger (1.04x) to show it's selected
Label below: "Selected · Ready to Merge"

**Tile 5 — Recipe Unlocked ★**
Background: gradient from #FFD176 top-left to #FF9B20 bottom-right (richer/deeper than tier tiles)
Content: sushi emoji (🍣) + label "SUSHI ROLL"
Outer ring: 3px solid #06D6A0 (Fresh Teal), box-shadow 0 0 0 4px rgba(6,214,160,0.3)
No tier badge — instead, a gold star (★) in the top-right in #FFB627
Clay shadow is MORE pronounced on this tile (hero state)
Label below: "Recipe Unlock ★" in Fresh Teal (#06D6A0)
</section>

<section id="buttons">
## Button Components

Show 3 button variants in a row, all using the clay shadow pattern:

**Primary CTA**
Background: gradient left-to-right, #FFB627 → #FF6B35
Text: "🍱 Start Cooking" in Fredoka 700, 18px, Dark Soil (#3D2B1F) colour
Border-radius: 20px, padding 14px 28px
Shadow: 0 4px 0 #C8600A, 0 8px 16px rgba(200,96,10,0.25)

**Secondary Action**
Background: Parchment (#FFF3E0)
Border: 3px solid #FFE8C2
Text: "📖 View Recipes" in Nunito 700, 16px, Dark Soil
Shadow: standard clay warm shadow

**Unlock / Success CTA**
Background: gradient #06D6A0 → #00B884
Text: "🌍 Unlock Region" in Fredoka 700, 18px, white
Shadow: 0 4px 0 #009968, 0 8px 16px rgba(6,214,160,0.22)

Below each button, show the pressed state (scaled down slightly, shadow reduced).
</section>

<section id="badges">
## Small UI Components

Show in a compact row:

1. **Region Badge** — pill shape, Dark Soil (#3D2B1F) background, white text, small flag emoji + region name: "🗾 Japan". Fredoka 600 12px.

2. **Coin Counter** — pill, Sunshine Amber (#FFB627) background, Dark Soil text: "🪙 1,240". Nunito 800 12px tabular-nums.

3. **Progress Bar** — 240px wide. Track: rgba(61,43,31,0.10), radius 999px, height 8px. Fill: gradient #06D6A0 → #0FEBA8 at 60% width. Label above: "Recipes unlocked 3 / 5" in Nunito 600 11px, Dark Soil.

4. **XP Chip** — small rounded rect, Fresh Teal background, white text "+ 120 XP". Nunito 800 11px.
</section>

---

<execution_rules>
1. Apply EVERY hex value from the design_system exactly. Do not substitute, approximate, or introduce new colours.
2. All shadows must use warm amber-brown (#C8855A) as the offset shadow colour, never grey or black. This is the defining clay characteristic.
3. Font: use Fredoka for ALL display/heading text and Nunito for ALL body/UI text. These are Google Fonts — load them.
4. Do not use abstract AI illustrations, gradients using grey, or photography. The visual language is flat-with-clay-depth.
5. The background of the brand sheet is Parchment (#FFF3E0), not white.
6. All component showcases sit on white cards with clay shadows, floated on the parchment background.
7. Border-radius must be consistently rounded throughout — minimum 14px on any interactive element.
8. Keep all text at minimum 12px. No text smaller than 10px anywhere.
9. The page must not require horizontal scrolling at 1440px.
10. Do not generate placeholder text. Use the exact copy provided in each section.
</execution_rules>

Generate the complete brand identity sheet now.
