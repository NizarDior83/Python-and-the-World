export interface Recipe {
  id: string;
  name: string;
  emoji: string;
  region: string;
  description: string;
  funFact: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  coinsReward: number;
  xpReward: number;
}

export const RECIPES: Record<string, Recipe> = {
  // ── Japan ──────────────────────────────────────────────────────────────
  'sushi-roll': {
    id: 'sushi-roll',
    name: 'Classic Sushi Roll',
    emoji: '🍣',
    region: 'japan',
    description: 'Vinegared rice topped with fresh raw fish, a Japanese masterpiece.',
    funFact: 'Did you know? Sushi originally meant "sour rice" — the rice was fermented before fresh fish was added!',
    difficulty: 3,
    coinsReward: 120,
    xpReward: 80,
  },
  'onigiri': {
    id: 'onigiri',
    name: 'Onigiri',
    emoji: '🍙',
    region: 'japan',
    description: 'A triangular rice ball wrapped in nori seaweed.',
    funFact: 'Did you know? Onigiri is the ultimate Japanese snack — people have been eating it for over 2,000 years!',
    difficulty: 2,
    coinsReward: 80,
    xpReward: 50,
  },
  'shoyu-ramen': {
    id: 'shoyu-ramen',
    name: 'Shoyu Ramen',
    emoji: '🍜',
    region: 'japan',
    description: 'Rich soy sauce broth with chewy noodles, fish, and a soft egg.',
    funFact: 'Did you know? Japan has over 10,000 ramen restaurants, and each city has its own special recipe!',
    difficulty: 4,
    coinsReward: 160,
    xpReward: 110,
  },
  // ── Mexico ────────────────────────────────────────────────────────────
  'burrito': {
    id: 'burrito',
    name: 'Mega Burrito',
    emoji: '🌯',
    region: 'mexico',
    description: 'A big warm tortilla stuffed with spiced beans and all the goods.',
    funFact: 'Did you know? The word "burrito" means "little donkey" in Spanish — because the stuffed tortilla looks like a donkey\'s pack!',
    difficulty: 2,
    coinsReward: 90,
    xpReward: 60,
  },
  'tacos': {
    id: 'tacos',
    name: 'Street Tacos',
    emoji: '🌮',
    region: 'mexico',
    description: 'Crispy corn tortillas topped with fresh salsa and vibrant toppings.',
    funFact: 'Did you know? Tacos date back to the silver mines of Mexico in the 18th century — miners used to eat them for energy!',
    difficulty: 3,
    coinsReward: 110,
    xpReward: 75,
  },
};
