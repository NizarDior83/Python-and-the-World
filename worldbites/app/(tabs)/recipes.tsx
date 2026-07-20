import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGameStore } from '@/stores/gameStore';
import { RECIPES } from '@/data/recipes';
import { Colors, Radius, Shadows, Typography } from '@/constants/theme';

export default function RecipesScreen() {
  const unlockedRecipes = useGameStore(s => s.unlockedRecipes);
  const allRecipes = Object.values(RECIPES);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>📖 Recipe Book</Text>
        <Text style={styles.subtitle}>
          {unlockedRecipes.length} / {allRecipes.length} collected
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      >
        {allRecipes.map(recipe => {
          const unlocked = unlockedRecipes.includes(recipe.id);
          return (
            <View
              key={recipe.id}
              style={[styles.card, !unlocked && styles.cardLocked]}
            >
              <Text style={styles.cardEmoji}>
                {unlocked ? recipe.emoji : '🔒'}
              </Text>

              <View style={styles.cardBody}>
                <Text style={[styles.cardName, !unlocked && styles.textMuted]}>
                  {unlocked ? recipe.name : '???'}
                </Text>

                {unlocked ? (
                  <>
                    <Text style={styles.cardDesc} numberOfLines={2}>
                      {recipe.description}
                    </Text>
                    <View style={styles.cardFooter}>
                      <View style={styles.diffBar}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <View
                            key={i}
                            style={[
                              styles.diffDot,
                              i < recipe.difficulty && styles.diffDotOn,
                            ]}
                          />
                        ))}
                      </View>
                      <View style={styles.rewardRow}>
                        <Text style={styles.rewardChip}>🪙 {recipe.coinsReward}</Text>
                        <Text style={styles.rewardChip}>⭐ {recipe.xpReward}</Text>
                      </View>
                    </View>
                  </>
                ) : (
                  <Text style={styles.cardDesc}>
                    Keep merging to unlock this recipe!
                  </Text>
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.parchment,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.white,
    ...Shadows.clayLight,
  },
  title: {
    ...Typography.display,
    fontSize: 22,
    color: Colors.soil,
  },
  subtitle: {
    ...Typography.ui,
    fontSize: 13,
    color: Colors.soilMid,
  },
  list: {
    padding: 16,
    gap: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: Radius.card,
    padding: 16,
    gap: 14,
    alignItems: 'center',
    ...Shadows.clayLight,
  },
  cardLocked: {
    backgroundColor: Colors.parchmentDeep,
    opacity: 0.75,
  },
  cardEmoji: {
    fontSize: 40,
    width: 52,
    textAlign: 'center',
  },
  cardBody: {
    flex: 1,
    gap: 4,
  },
  cardName: {
    ...Typography.display,
    fontSize: 16,
    color: Colors.soil,
  },
  cardDesc: {
    ...Typography.uiLight,
    fontSize: 12,
    color: Colors.soilMid,
    lineHeight: 17,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  diffBar: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  diffDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.parchmentDeep,
  },
  diffDotOn: {
    backgroundColor: Colors.sunshine,
  },
  rewardRow: {
    flexDirection: 'row',
    gap: 6,
  },
  rewardChip: {
    ...Typography.ui,
    fontSize: 11,
    color: Colors.soilMid,
  },
  textMuted: {
    color: Colors.soilMid,
  },
});
