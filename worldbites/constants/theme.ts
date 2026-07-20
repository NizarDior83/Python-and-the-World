export const Colors = {
  // Primary
  sunshine:     '#FFB627',
  spice:        '#FF6B35',
  // Accents
  herb:         '#06D6A0',
  ocean:        '#118AB2',
  // Ground
  parchment:    '#FFF3E0',
  soil:         '#3D2B1F',
  soilMid:      '#6B4C3B',
  // Tile fills
  tileGrain:    '#FFD93D',
  tileProtein:  '#FFB5A7',
  tileHerb:     '#B8F2E6',
  tileProcessed:'#FFA62B',
  // Shadow
  clay:         '#C8855A',
  // Derived
  white:        '#FFFFFF',
  parchmentDeep:'#FFE8C2',
  sunshineLight:'#FFF0CC',
  herbLight:    '#DFF9F1',
  spiceLight:   '#FFE8DC',
  oceanDeep:    '#0A4A6B',
} as const;

export const Shadows = {
  clay: {
    shadowColor: Colors.clay,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 8,
  },
  clayLight: {
    shadowColor: Colors.clay,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  clayHeavy: {
    shadowColor: Colors.clay,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.55,
    shadowRadius: 12,
    elevation: 12,
  },
} as const;

export const Radius = {
  card:   24,
  button: 20,
  tile:   14,
  pill:   999,
  bubble: 16,
  sm:     10,
} as const;

export const Typography = {
  display:  { fontFamily: 'Fredoka_700Bold' },
  uiLight:  { fontFamily: 'Nunito_400Regular' },
  ui:       { fontFamily: 'Nunito_600SemiBold' },
  uiBold:   { fontFamily: 'Nunito_800ExtraBold' },
} as const;

export const TileColorMap: Record<string, string> = {
  grain:     Colors.tileGrain,
  protein:   Colors.tileProtein,
  herb:      Colors.tileHerb,
  processed: Colors.tileProcessed,
  recipe:    Colors.sunshine,
};

export const TileColorLight: Record<string, string> = {
  grain:     '#FFE57A',
  protein:   '#FFC5BA',
  herb:      '#C8F8EC',
  processed: '#FFBB60',
  recipe:    '#FFD176',
};
