export type IngredientCategory = 'grain' | 'protein' | 'herb' | 'processed' | 'recipe';

export interface Ingredient {
  id: string;
  name: string;
  emoji: string;
  category: IngredientCategory;
  tier: 1 | 2 | 3;
  region: string;
  // What this merges with to produce something
  mergesWith?: string;
  produces?: string;
  // If this is the result of a merge of two same tiles
  mergePair?: string; // id of the ingredient that two of = this
}

export const INGREDIENTS: Record<string, Ingredient> = {
  // ── Japan ──────────────────────────────────────────────
  'rice-1': {
    id: 'rice-1',
    name: 'Rice',
    emoji: '🌾',
    category: 'grain',
    tier: 1,
    region: 'japan',
    mergesWith: 'rice-1',
    produces: 'rice-2',
  },
  'rice-2': {
    id: 'rice-2',
    name: 'Rice Bowl',
    emoji: '🍚',
    category: 'grain',
    tier: 2,
    region: 'japan',
    mergePair: 'rice-1',
  },
  'fish-1': {
    id: 'fish-1',
    name: 'Fish',
    emoji: '🐟',
    category: 'protein',
    tier: 1,
    region: 'japan',
    mergesWith: 'fish-1',
    produces: 'fish-2',
  },
  'fish-2': {
    id: 'fish-2',
    name: 'Fish Fillet',
    emoji: '🐠',
    category: 'protein',
    tier: 2,
    region: 'japan',
    mergePair: 'fish-1',
  },
  'egg-1': {
    id: 'egg-1',
    name: 'Egg',
    emoji: '🥚',
    category: 'protein',
    tier: 1,
    region: 'japan',
    mergesWith: 'egg-1',
    produces: 'egg-2',
  },
  'egg-2': {
    id: 'egg-2',
    name: 'Soft Egg',
    emoji: '🍳',
    category: 'protein',
    tier: 2,
    region: 'japan',
    mergePair: 'egg-1',
  },
  'seaweed-1': {
    id: 'seaweed-1',
    name: 'Seaweed',
    emoji: '🌿',
    category: 'herb',
    tier: 1,
    region: 'japan',
    mergesWith: 'seaweed-1',
    produces: 'nori-2',
  },
  'nori-2': {
    id: 'nori-2',
    name: 'Nori Sheet',
    emoji: '🥬',
    category: 'herb',
    tier: 2,
    region: 'japan',
    mergePair: 'seaweed-1',
  },
  // ── Mexico ─────────────────────────────────────────────
  'corn-1': {
    id: 'corn-1',
    name: 'Corn',
    emoji: '🌽',
    category: 'grain',
    tier: 1,
    region: 'mexico',
    mergesWith: 'corn-1',
    produces: 'tortilla-2',
  },
  'tortilla-2': {
    id: 'tortilla-2',
    name: 'Tortilla',
    emoji: '🫓',
    category: 'grain',
    tier: 2,
    region: 'mexico',
    mergePair: 'corn-1',
  },
  'bean-1': {
    id: 'bean-1',
    name: 'Beans',
    emoji: '🫘',
    category: 'protein',
    tier: 1,
    region: 'mexico',
    mergesWith: 'bean-1',
    produces: 'bean-2',
  },
  'bean-2': {
    id: 'bean-2',
    name: 'Spiced Beans',
    emoji: '🥣',
    category: 'protein',
    tier: 2,
    region: 'mexico',
    mergePair: 'bean-1',
  },
  'pepper-1': {
    id: 'pepper-1',
    name: 'Pepper',
    emoji: '🌶️',
    category: 'herb',
    tier: 1,
    region: 'mexico',
    mergesWith: 'pepper-1',
    produces: 'salsa-2',
  },
  'salsa-2': {
    id: 'salsa-2',
    name: 'Salsa',
    emoji: '🍅',
    category: 'herb',
    tier: 2,
    region: 'mexico',
    mergePair: 'pepper-1',
  },
};

// Cross-ingredient recipe combinations (A + B → recipe unlock)
export interface RecipeCombination {
  ingredientA: string;
  ingredientB: string;
  recipeId: string;
}

export const RECIPE_COMBINATIONS: RecipeCombination[] = [
  // Japan
  { ingredientA: 'rice-2',    ingredientB: 'fish-2',    recipeId: 'sushi-roll' },
  { ingredientA: 'rice-2',    ingredientB: 'nori-2',    recipeId: 'onigiri' },
  { ingredientA: 'fish-2',    ingredientB: 'egg-2',     recipeId: 'shoyu-ramen' },
  // Mexico
  { ingredientA: 'tortilla-2',ingredientB: 'bean-2',    recipeId: 'burrito' },
  { ingredientA: 'tortilla-2',ingredientB: 'salsa-2',   recipeId: 'tacos' },
];

export const REGION_STARTER_INGREDIENTS: Record<string, string[]> = {
  japan:  ['rice-1', 'rice-1', 'rice-1', 'fish-1', 'fish-1', 'egg-1', 'egg-1', 'seaweed-1', 'seaweed-1'],
  mexico: ['corn-1', 'corn-1', 'corn-1', 'bean-1', 'bean-1', 'pepper-1', 'pepper-1'],
};
