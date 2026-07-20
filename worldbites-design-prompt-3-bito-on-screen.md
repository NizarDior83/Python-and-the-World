# WorldBites — Claude Design Prompt 3 of 3
# Bito On-Screen Integration (Single Screen Focus)

> Paste everything below this line into Claude Design at claude.ai/design
> NOTE: Run after Prompt 1 (Brand Kit) and Prompt 2 (Game Screens).
> This prompt focuses on ONE screen — the Game Board — to validate how
> Bito the mascot lives inside the game UI before building.

---

Create a high-fidelity mobile screen mockup in Claude Design for **WorldBites**, showing the **Game Board screen with Bito the mascot character integrated**, at iPhone 15 Pro dimensions (393×852px) framed inside realistic phone hardware.

<goal>
Produce a single screen mockup that validates the mascot character integration pattern: Bito sits in a dedicated zone below the game grid, with a contextual prop to his left and an active speech bubble above his head. The founder and developer need to see the character-to-game-board relationship before commissioning Lottie animations.
</goal>

<target_audience>
A mobile game founder and their React Native developer, plus a Lottie animator who will build Bito's expression animations. They need to see real proportions — how much vertical space Bito needs, where his speech bubble sits, how props work alongside him — before any animation work begins.
</target_audience>

<design_system>
  <colors>
    <color role="primary.sunshine"   hex="#FFB627" />
    <color role="primary.spice"      hex="#FF6B35" />
    <color role="accent.herb"        hex="#06D6A0" />
    <color role="accent.ocean"       hex="#118AB2" />
    <color role="ground.parchment"   hex="#FFF3E0" />
    <color role="ground.soil"        hex="#3D2B1F" />
    <color role="ground.soil-mid"    hex="#6B4C3B" />
    <color role="tile.grain"         hex="#FFD93D" />
    <color role="tile.protein"       hex="#FFB5A7" />
    <color role="tile.herb"          hex="#B8F2E6" />
    <color role="tile.processed"     hex="#FFA62B" />
    <color role="shadow.clay"        hex="#C8855A" />
  </colors>
  <typography>
    <font role="display" family="Fredoka"  weight="700" />
    <font role="ui"      family="Nunito"   weight="400 600 800" />
  </typography>
  <style>
    Claymorphism Mobile.
    ALL shadows: warm amber-brown (#C8855A) offset, never black.
    Shadow stack: 0 2px 0 #C8855A, 0 5px 0 rgba(200,133,90,0.4), 0 12px 24px rgba(61,43,31,0.15).
    Border-radius: 24px cards, 20px buttons/tiles, 999px badges/pills.
    Screen background: Parchment (#FFF3E0).
  </style>
  <layout>
    <format>Single iPhone 15 Pro frame (393×852pt) centred on a dark canvas (#1A1008)</format>
    <phones>Show realistic phone bezel in space black, with Dynamic Island notch at top. No home button.</phones>
    <labels>Below the phone: "Screen 1 — Game Board + Bito" in white Fredoka 700 18px centred</labels>
    <spacing>64px padding around the canvas edge</spacing>
  </layout>
</design_system>

---

<vertical_zones>
The screen is divided into 4 vertical zones. Proportions are approximate — use the content to fill naturally.

ZONE 1 — Status + HUD (top, ~60pt):
Status bar (9:41, icons) + Region Badge + Coin Counter + Recipe Progress Bar.
Identical to Screen 1 in Prompt 2. Refer to that spec.

ZONE 2 — Game Grid (main content, fills as much space as needed):
5 columns × 5 rows of ingredient tiles (NOT 6 rows — one row removed to give Bito room).
Same tile contents as Prompt 2 Rows 0–4. Omit Row 5.
Gap between tiles: 6px. Horizontal padding: 16px.
Use same tile rules, same special states (★ selected fish tiles, MERGED sushi tile).

ZONE 3 — Bito Zone (~200pt tall, below grid, above nav):
This is the key new section — described in detail below.

ZONE 4 — Bottom Navigation (56pt):
Same 4-tab nav as Prompt 2. Play tab is ACTIVE (Spice Orange).
</vertical_zones>

---

<bito_zone>
## Bito Zone — Detailed Spec

Background: same Parchment (#FFF3E0) as the rest of the screen — no colour change, no line divider between grid and Bito zone.

### Bito Character (right side of zone)
- A round, globe-bodied clay character standing in the right ~55% of the zone width
- Body: amber sphere with teal continent patches scattered across it
- Expression: HAPPY / DEFAULT — warm smile, arms relaxed at sides with open palms
- Wearing a small tilted white chef's hat with a thin teal stripe on the band
- Two short stubby round-toed clay legs, standing in a slightly wide stance
- Character rendered as if it is a premium 3D clay toy — soft, rounded, no sharp edges
- Character fills approximately 180pt height (feet to hat tip)
- Character is right-aligned: Bito's body centre sits at ~72% of the screen width
- Bito's feet overlap the bottom nav top edge by ~10pt (grounded, not floating)
- Clay shadow beneath Bito's feet: warm amber-brown ellipse, softly blurred

### Prop — Recipe Card (left side of zone)
- A small clay-style recipe card: cream coloured (#FFF3E0), slightly tilted 15° counter-clockwise
- Printed on the card: a large 🍣 emoji in the centre, a thin Dark Soil border, rounded corners
- Card dimensions: approximately 72pt wide × 90pt tall
- Card positioned: left-aligned in the Bito zone, sitting at approximately 18pt from the left edge
- Card base sits at the same ground level as Bito's feet
- A tiny clay fork (3D rendered, Dark Soil colour, ~36pt tall) leans against the left edge of the card
- Warm clay shadow beneath the card and fork

### Speech Bubble
- A rounded rectangle speech bubble above and slightly left of Bito's head
- Background: white (#FFFFFF), border-radius 16px, border 1.5px solid rgba(61,43,31,0.10)
- Clay shadow: subtle, warm amber-brown offset beneath the bubble
- Bubble tail: a small downward-pointing triangle at the bottom-right corner of the bubble,
  pointing toward Bito's face/upper body
- Content: "Try merging the 🌾 rice and 🐟 fish!" in Fredoka 700 14px, Dark Soil (#3D2B1F)
- Max bubble width: 200pt. Multi-line if needed. Text centred within bubble.
- Bubble sits approximately 12pt above Bito's chef's hat, slightly left of Bito's centre
- The bubble must NOT overlap the game grid above — it sits fully within the Bito zone

### What Bito does NOT have in this state
- No thought bubble, no magnifying glass, no confetti (those are for other expressions)
- No heavy drop shadow on character (just the ground shadow at feet)
- No glow ring around Bito

</bito_zone>

---

<execution_rules>
1. The single phone is centred on a dark canvas (#1A1008). Label below in white Fredoka 700.
2. Use EXACTLY the hex values from the design_system. No new colours.
3. Font: Fredoka for ALL headings/titles/names/speech bubble text, Nunito for ALL labels/body/UI text. Load via Google Fonts.
4. ALL shadows use warm amber-brown (#C8855A) as the offset colour. Zero grey or black shadows anywhere.
5. The game grid must be exactly 5 columns × 5 rows (NOT 6 — one row removed for Bito).
6. Bito is represented as a high-quality 3D clay character illustration, not a flat emoji or 2D cartoon.
   He should feel consistent with the claymorphism aesthetic of the tiles and UI elements.
7. The speech bubble tail must clearly point toward Bito's face.
8. The prop (recipe card + fork) must sit on the same visual ground plane as Bito's feet.
9. The Bito zone and game grid zone should feel continuous — no hard divider between them.
10. Bito's feet overlapping the bottom nav slightly is intentional — show this.
11. Do not add any elements not described above.
</execution_rules>

Generate the Game Board screen with Bito integration now.
