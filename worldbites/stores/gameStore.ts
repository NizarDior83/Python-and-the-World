import { create } from 'zustand';
import {
  INGREDIENTS,
  RECIPE_COMBINATIONS,
  REGION_STARTER_INGREDIENTS,
  type Ingredient,
} from '@/data/ingredients';
import { RECIPES } from '@/data/recipes';

export interface TileData {
  id: string; // unique instance id
  ingredientId: string;
}

export type GridCell = TileData | null;

const GRID_ROWS = 5;
const GRID_COLS = 5;

function makeGrid(): GridCell[][] {
  return Array.from({ length: GRID_ROWS }, () => Array(GRID_COLS).fill(null));
}

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

interface GameStore {
  grid: GridCell[][];
  coins: number;
  xp: number;
  activeRegion: string;
  unlockedRegions: string[];
  unlockedRecipes: string[];
  selectedCell: { row: number; col: number } | null;
  lastUnlockedRecipe: string | null;
  lastMergedCell: { row: number; col: number } | null;

  // Actions
  initRegion: (regionId: string) => void;
  selectCell: (row: number, col: number) => void;
  clearSelection: () => void;
  unlockRegion: (regionId: string) => void;
  dismissRecipe: () => void;
  spawnIngredient: (ingredientId: string) => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  grid: makeGrid(),
  coins: 300,
  xp: 0,
  activeRegion: 'japan',
  unlockedRegions: ['japan'],
  unlockedRecipes: [],
  selectedCell: null,
  lastUnlockedRecipe: null,
  lastMergedCell: null,

  initRegion(regionId) {
    const starters = REGION_STARTER_INGREDIENTS[regionId] ?? [];
    const grid = makeGrid();
    // Scatter starters randomly
    const positions: [number, number][] = [];
    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        positions.push([r, c]);
      }
    }
    // Shuffle
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }
    starters.forEach((ingId, idx) => {
      const [r, c] = positions[idx];
      grid[r][c] = { id: uid(), ingredientId: ingId };
    });
    set({ grid, activeRegion: regionId, selectedCell: null });
  },

  selectCell(row, col) {
    const { grid, selectedCell, unlockedRecipes } = get();
    const target = grid[row][col];

    // Nothing here and nothing selected → ignore
    if (!target && !selectedCell) return;

    // If no selection → select this tile
    if (!selectedCell) {
      if (!target) return;
      set({ selectedCell: { row, col } });
      return;
    }

    // Tapped the same cell → deselect
    if (selectedCell.row === row && selectedCell.col === col) {
      set({ selectedCell: null });
      return;
    }

    const source = grid[selectedCell.row][selectedCell.col];
    if (!source) { set({ selectedCell: null }); return; }

    // Target is empty → move
    if (!target) {
      const newGrid = grid.map(r => [...r]);
      newGrid[row][col] = source;
      newGrid[selectedCell.row][selectedCell.col] = null;
      set({ grid: newGrid, selectedCell: null });
      return;
    }

    // Check same-ingredient merge
    if (source.ingredientId === target.ingredientId) {
      const ing = INGREDIENTS[source.ingredientId];
      if (ing.mergesWith === source.ingredientId && ing.produces) {
        const newGrid = grid.map(r => [...r]);
        newGrid[row][col] = { id: uid(), ingredientId: ing.produces };
        newGrid[selectedCell.row][selectedCell.col] = null;
        set({
          grid: newGrid,
          selectedCell: null,
          coins: get().coins + 5,
          xp: get().xp + 10,
          lastMergedCell: { row, col },
        });
        // Spawn a new starter ingredient after merge
        setTimeout(() => get().spawnIngredient(get().activeRegion), 600);
        return;
      }
    }

    // Check cross-ingredient recipe combination
    const combo = RECIPE_COMBINATIONS.find(
      c =>
        (c.ingredientA === source.ingredientId && c.ingredientB === target.ingredientId) ||
        (c.ingredientA === target.ingredientId && c.ingredientB === source.ingredientId)
    );
    if (combo && !unlockedRecipes.includes(combo.recipeId)) {
      const recipe = RECIPES[combo.recipeId];
      const newGrid = grid.map(r => [...r]);
      // Clear both cells
      newGrid[row][col] = null;
      newGrid[selectedCell.row][selectedCell.col] = null;
      set({
        grid: newGrid,
        selectedCell: null,
        unlockedRecipes: [...unlockedRecipes, combo.recipeId],
        lastUnlockedRecipe: combo.recipeId,
        coins: get().coins + recipe.coinsReward,
        xp: get().xp + recipe.xpReward,
      });
      return;
    }

    // No valid merge → just switch selection to target
    if (target) {
      set({ selectedCell: { row, col } });
    } else {
      set({ selectedCell: null });
    }
  },

  clearSelection() {
    set({ selectedCell: null });
  },

  unlockRegion(regionId) {
    const { coins, unlockedRegions } = get();
    const { REGIONS } = require('@/data/regions');
    const region = REGIONS[regionId];
    if (!region || unlockedRegions.includes(regionId)) return;
    if (coins < region.unlockCost) return;
    set({
      coins: coins - region.unlockCost,
      unlockedRegions: [...unlockedRegions, regionId],
      activeRegion: regionId,
    });
    get().initRegion(regionId);
  },

  dismissRecipe() {
    set({ lastUnlockedRecipe: null });
  },

  spawnIngredient(regionId) {
    const { grid } = get();
    const starters = REGION_STARTER_INGREDIENTS[regionId];
    if (!starters?.length) return;
    const empty: [number, number][] = [];
    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        if (!grid[r][c]) empty.push([r, c]);
      }
    }
    if (empty.length === 0) return;
    const [r, c] = empty[Math.floor(Math.random() * empty.length)];
    const ingId = starters[Math.floor(Math.random() * starters.length)];
    const newGrid = grid.map(row => [...row]);
    newGrid[r][c] = { id: uid(), ingredientId: ingId };
    set({ grid: newGrid });
  },
}));
