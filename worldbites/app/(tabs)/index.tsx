import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGameStore } from '@/stores/gameStore';
import { HUD } from '@/components/game/HUD';
import { GameGrid } from '@/components/game/GameGrid';
import { Bito } from '@/components/bito/Bito';
import { RecipeUnlockModal } from '@/components/game/RecipeUnlockModal';
import { Colors } from '@/constants/theme';

export default function GameScreen() {
  const lastUnlockedRecipe = useGameStore(s => s.lastUnlockedRecipe);
  const dismissRecipe = useGameStore(s => s.dismissRecipe);
  const initRegion = useGameStore(s => s.initRegion);
  const activeRegion = useGameStore(s => s.activeRegion);
  const grid = useGameStore(s => s.grid);

  useEffect(() => {
    // Initialize grid on first mount if it's empty
    const isEmpty = grid.every(row => row.every(cell => cell === null));
    if (isEmpty) initRegion(activeRegion);
  }, []);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.container}>
        <HUD />
        <GameGrid />
        <Bito />
      </View>
      {lastUnlockedRecipe && (
        <RecipeUnlockModal
          recipeId={lastUnlockedRecipe}
          onDismiss={dismissRecipe}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.parchment,
  },
  container: {
    flex: 1,
  },
});
