# WorldBites — Bito Character Integration Guide

> Master spec for placing Bito on every game screen.
> Reference pattern: character mascot sits in the bottom zone below the game board,
> slightly right-weighted, with thematic 3D props to the left. No persistent speech
> bubble — Bito reacts expressively; dialogue appears contextually on tap or game event.

---

## 1. Screen Placement Rules

### Layout split (all game screens)
```
┌─────────────────────────────┐
│  Status bar + HUD           │  ~60 pt
│  Game content area          │  ~62% of screen
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│  Bito zone                  │  ~24% of screen
│  Bottom nav (56 pt)         │  ~7% of screen
└─────────────────────────────┘
```

- Bito is **right-aligned** in his zone — centre of Bito body sits at ~68% of screen width
- Props appear to Bito's **left**, occupying the remaining 0–50% width of the zone
- Bito's feet overlap the top edge of the bottom nav by ~12 pt (grounded look)
- Bito's head may overlap the bottom edge of the game content area by ~8 pt (alive look)

### Safe zone for props
- Props must not overlap the bottom nav tab labels
- Props must not overlap any HUD elements in the game content area
- Max 2 props per scene (foreground object + optional background accent)

---

## 2. Expression → Screen → Game State Map

| Screen | Game State | Bito Expression | Dialogue Trigger |
|--------|-----------|-----------------|-----------------|
| Onboarding | First launch | **Waving / Greeting** | Auto on screen load |
| Onboarding | Returning player | **Waving / Greeting** | Auto on screen load |
| Game Board | Idle / tutorial | **Happy / Default** | Auto or idle timeout |
| Game Board | Player idle >8s | **Happy / Default** | Auto (idle hint) |
| Game Board | Recipe just merged | **Excited / Celebrating** | Triggered by merge event |
| Game Board | Region complete | **Excited / Celebrating** | Triggered by region unlock |
| Recipe Book | Browsing | **Curious / Thinking** | Auto on screen load |
| Recipe Book | Tapping locked recipe | **Curious / Thinking** | Tap event |
| World Map | Browsing | **Happy / Default** | Auto on screen load |
| World Map | Tapping locked region | **Curious / Thinking** | Tap event |
| World Map | Unlocking new region | **Excited / Celebrating** | Triggered by unlock event |

---

## 3. Props Per Expression

Props are 3D clay-render objects, matching the WorldBites clay aesthetic.
Each prop has a warm clay shadow beneath it.

### Waving / Greeting
- **Primary prop**: None (clean scene — Bito is the hero)
- Optional: small floating confetti dots in amber + teal around Bito's wave hand

### Happy / Default (Game Board — tutorial mode)
- **Primary prop**: A tiny clay **recipe card** — cream coloured, held at an angle, with a
  small food emoji printed on it (🍣 for Japan region)
- **Secondary prop**: A small clay **fork** leaning against the card

### Happy / Default (World Map — browsing)
- **Primary prop**: A small **clay globe** (miniature version of the WorldBites logo mark)
- No secondary prop

### Excited / Celebrating (Recipe unlock)
- **Primary prop**: None (arms are raised — Bito IS the prop)
- Particle FX: sparkle stars (⭐ in amber) and confetti dots (teal + coral) burst around chef's hat
- Screen-level FX: brief golden overlay flash at the moment of unlock

### Excited / Celebrating (Region unlock / coins earned)
- **Primary prop**: A small clay **treasure chest** or **coin pile** in amber/gold to Bito's left
- Particle FX: coin arc from chest toward HUD counter

### Curious / Thinking (Recipe Book — browsing)
- **Primary prop**: An open **clay recipe book** to Bito's left, pages slightly ruffled
- Secondary prop: a tiny **magnifying glass** held in Bito's free hand

### Curious / Thinking (World Map — teasing locked region)
- **Primary prop**: A small **thought cloud** graphic above Bito's head with a "?" inside
- Bito's thinking finger pose (right index finger to cheek) says it all

---

## 4. Full Dialogue Bank

### Waving / Greeting
| Trigger | Line |
|---------|------|
| First time playing | "Hello, chef! I'm Bito! Welcome to WorldBites!" |
| Introducing the game | "Are you ready to explore the world and cook yummy food together? Let's go!" |
| Returning player | "Hi again, friend! Our kitchen is ready for more fun!" |

### Happy / Default — Tutorial & Everyday Gameplay
| Trigger | Line |
|---------|------|
| Explaining the board | "Look at all these empty slots! We need ingredients to fill them." |
| Teaching merge mechanic (Japan) | "Sushi is made from vinegared rice topped with raw fish. Merge rice and tuna to create your first roll!" |
| Encouraging gameplay | "Keep dragging and combining the food! What will we make next?" |
| Idle prompt (>8s no move) | "Try dragging the rice grain over to the fish!" |

### Excited / Celebrating — Recipe & Region Unlocks
| Trigger | Line |
|---------|------|
| Unlocking a recipe | "Wow! You made a Classic Sushi Roll!" |
| Completing a region | "Amazing! We've found all the recipes in Japan!" |
| Earning rewards | "Yay! Look at all those shiny coins and XP!" |
| Opening a new region | "Pack your bags! We are traveling to a brand new place on the world map!" |

### Curious / Thinking — Food Facts & World Info
| Trigger | Line |
|---------|------|
| Sharing a food fact (Japan) | "Did you know? Onigiri is a yummy rice ball snack!" |
| Teasing a locked recipe | "Hmm... I wonder what happens if we mix these two ingredients?" |
| Looking at World Map | "Where should we travel next? Mexico, Italy, India, or Morocco?" |
| Recipe Book prompt | "Let's check our Recipe Book to see how many dishes we've discovered!" |

---

## 5. Dialogue Delivery — UX Rules

- **Dialogue bubble**: appears ABOVE Bito's head — cream (#FFF3E0) rounded rectangle,
  Dark Soil (#3D2B1F) text, Fredoka 600 16px, border-radius 20px, clay shadow beneath
- **Bubble tail**: points down-right toward Bito's face
- **Auto-dismiss**: after 4 seconds, or immediately on player tap anywhere
- **Tap Bito**: always shows a random dialogue line for the current screen state
- **Max 1 active dialogue at a time**: new event cancels previous bubble
- **No dialogue during active merge animation**: wait for merge FX to finish (~0.8s)

---

## 6. Animation Spec (React Native / Reanimated 3 + Lottie)

### Expression switching
- Cross-fade between Lottie animation files: 200ms opacity fade
- Each expression is a **looping idle Lottie** (subtle breathing, blinking, weight shift)
- Celebration has a **one-shot Lottie** (V-pose, confetti burst) that plays once then
  returns to Happy/Default idle

### Entrance (screen load)
- Bito slides up from below the bottom nav: `translateY(+80) → 0`, spring,
  `mass: 0.8, stiffness: 200, damping: 18`
- Dialogue bubble fades in 300ms after Bito settles

### Idle bounce
- Bito bobs gently: `translateY(0 → -4 → 0)`, ease-in-out, 2.4s loop
- Pause bobbing during celebration animation

### Tap interaction
- Bito does a quick "happy squish": `scale(1 → 0.92 → 1.06 → 1)`, 350ms,
  `cubic-bezier(0.34, 1.56, 0.64, 1)` (WorldBites spring)
- Dialogue bubble pops in: `scale(0.7 → 1)`, 180ms spring

### Chef's hat wiggle (Waving state only)
- Hat rotates: `rotate(-6° → 6° → -6°)`, 0.6s, triggered when wave arm rises

---

## 7. Technical Notes (React Native Implementation)

```
components/
  Bito/
    Bito.tsx              — main component, accepts `expression` + `dialogue` props
    BitoBubble.tsx        — speech bubble with auto-dismiss timer
    BitoProps.tsx         — contextual 3D prop images per expression
    animations/
      bito-happy.lottie
      bito-excited.lottie
      bito-curious.lottie
      bito-waving.lottie

hooks/
  useBito.ts             — state machine: maps game events → expression + dialogue
```

### `useBito` state machine events
```ts
type BitoEvent =
  | 'SCREEN_LOAD'
  | 'PLAYER_IDLE'          // >8s no interaction
  | 'RECIPE_MERGED'        // payload: recipeName
  | 'REGION_UNLOCKED'      // payload: regionName
  | 'LOCKED_RECIPE_TAPPED' // curious state
  | 'LOCKED_REGION_TAPPED' // curious state
  | 'BITO_TAPPED'          // show random dialogue for current screen
```

---

## 8. Design Handoff — Bito Asset Sizes

For the app at 2× resolution:

| Asset | Dimensions | Format |
|-------|-----------|--------|
| Bito Happy (full body) | 280 × 320 pt | Lottie + PNG fallback |
| Bito Excited (full body) | 280 × 380 pt | Lottie (arms up, larger) |
| Bito Curious (full body) | 280 × 320 pt | Lottie |
| Bito Waving (full body) | 280 × 340 pt | Lottie |
| Recipe card prop | 80 × 100 pt | PNG with transparency |
| Clay globe prop | 70 × 70 pt | PNG with transparency |
| Recipe book prop | 110 × 80 pt | PNG with transparency |
| Coin pile prop | 90 × 70 pt | PNG with transparency |

All props should have pre-baked clay shadows. No runtime shadows on prop PNGs.

---

## 9. Accessibility

- Bito and dialogue are decorative / supplementary — all game actions work without them
- VoiceOver / TalkBack: dialogue bubble text is read by screen reader
- `prefers-reduced-motion`: disable Bito's idle bounce and entrance slide;
  show Bito statically at final position; celebration FX disabled
- Bito tap area minimum: 56 × 56 pt (larger than Bito's visible body to ease tapping for 3+ audience)
