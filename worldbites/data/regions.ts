export interface Region {
  id: string;
  name: string;
  flag: string;
  emoji: string;
  mapEmoji: string;
  unlockCost: number;
  recipeIds: string[];
  order: number;
  mapPosition: { top: string; left: string };
  gradient: [string, string];
  description: string;
}

export const REGIONS: Record<string, Region> = {
  japan: {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    emoji: '🗾',
    mapEmoji: '🗾',
    unlockCost: 0,
    recipeIds: ['sushi-roll', 'onigiri', 'shoyu-ramen'],
    order: 1,
    mapPosition: { top: '22%', left: '74%' },
    gradient: ['#FF9B70', '#FF6B35'],
    description: 'Land of fresh fish, delicate rice, and ancient culinary traditions.',
  },
  mexico: {
    id: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    emoji: '🌮',
    mapEmoji: '🌮',
    unlockCost: 500,
    recipeIds: ['burrito', 'tacos'],
    order: 2,
    mapPosition: { top: '40%', left: '18%' },
    gradient: ['#FFE57A', '#FFD93D'],
    description: 'Vibrant flavours of corn, peppers, and ancient Aztec ingredients.',
  },
  italy: {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    emoji: '🍕',
    mapEmoji: '🍕',
    unlockCost: 800,
    recipeIds: [],
    order: 3,
    mapPosition: { top: '28%', left: '50%' },
    gradient: ['#A8E063', '#56AB2F'],
    description: 'The land of pasta, pizza, and passionate cooks.',
  },
  india: {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    emoji: '🍛',
    mapEmoji: '🍛',
    unlockCost: 1200,
    recipeIds: [],
    order: 4,
    mapPosition: { top: '38%', left: '62%' },
    gradient: ['#f7971e', '#ffd200'],
    description: 'A spice paradise with centuries of culinary wisdom.',
  },
  morocco: {
    id: 'morocco',
    name: 'Morocco',
    flag: '🇲🇦',
    emoji: '🫖',
    mapEmoji: '🫖',
    unlockCost: 1600,
    recipeIds: [],
    order: 5,
    mapPosition: { top: '33%', left: '44%' },
    gradient: ['#C94B4B', '#4B134F'],
    description: 'Where the aromas of mint tea and tagine fill the ancient medinas.',
  },
};

export const REGION_ORDER = ['japan', 'mexico', 'italy', 'india', 'morocco'];
