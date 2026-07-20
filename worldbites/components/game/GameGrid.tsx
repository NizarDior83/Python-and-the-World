import { View, Pressable, StyleSheet, Platform } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useGameStore } from '@/stores/gameStore';
import { useSettingsStore } from '@/stores/settingsStore';
import { GameTile } from './GameTile';
import { Colors, Radius, Shadows } from '@/constants/theme';

const ROWS = 5;
const COLS = 5;
const GAP = 6;

export function GameGrid() {
  const grid = useGameStore(s => s.grid);
  const selectedCell = useGameStore(s => s.selectedCell);
  const selectCell = useGameStore(s => s.selectCell);
  const hapticsEnabled = useSettingsStore(s => s.hapticsEnabled);

  function handlePress(row: number, col: number) {
    if (hapticsEnabled && Platform.OS !== 'web' && grid[row][col]) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    selectCell(row, col);
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.grid}>
        {Array.from({ length: ROWS }, (_, row) => (
          <View key={row} style={styles.row}>
            {Array.from({ length: COLS }, (_, col) => {
              const cell = grid[row][col];
              const isSelected =
                selectedCell?.row === row && selectedCell?.col === col;
              return (
                <Pressable
                  key={col}
                  style={[styles.cell, isSelected && styles.cellSelected]}
                  onPress={() => handlePress(row, col)}
                >
                  {cell && (
                    <GameTile
                      ingredientId={cell.ingredientId}
                      isSelected={isSelected}
                    />
                  )}
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 14,
    justifyContent: 'center',
  },
  grid: {
    backgroundColor: Colors.parchmentDeep,
    borderRadius: Radius.card,
    padding: GAP,
    gap: GAP,
    ...Shadows.clay,
  },
  row: {
    flexDirection: 'row',
    gap: GAP,
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: Radius.tile,
    backgroundColor: Colors.parchment,
    borderWidth: 1.5,
    borderColor: `${Colors.clay}30`,
  },
  cellSelected: {
    borderColor: Colors.sunshine,
    borderWidth: 2,
  },
});
