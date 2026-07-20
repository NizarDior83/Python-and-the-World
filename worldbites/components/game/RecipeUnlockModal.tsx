import { View, Text, Pressable, Modal, StyleSheet } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { RECIPES } from '@/data/recipes';
import { Colors, Radius, Shadows, Typography } from '@/constants/theme';

interface Props {
  recipeId: string;
  onDismiss: () => void;
}

export function RecipeUnlockModal({ recipeId, onDismiss }: Props) {
  const recipe = RECIPES[recipeId];
  if (!recipe) return null;

  return (
    <Modal transparent animationType="fade" onRequestClose={onDismiss}>
      <Pressable style={styles.overlay} onPress={onDismiss}>
        <Animated.View
          entering={ZoomIn.springify().mass(0.8).stiffness(200).damping(18)}
          style={styles.card}
        >
          <Text style={styles.banner}>🎉 Recipe Unlocked!</Text>

          <Text style={styles.emoji}>{recipe.emoji}</Text>
          <Text style={styles.name}>{recipe.name}</Text>
          <Text style={styles.description}>{recipe.description}</Text>

          <View style={styles.funFactBox}>
            <Text style={styles.funFact}>{recipe.funFact}</Text>
          </View>

          <View style={styles.rewards}>
            <View style={styles.reward}>
              <Text style={styles.rewardEmoji}>🪙</Text>
              <Text style={styles.rewardValue}>+{recipe.coinsReward}</Text>
            </View>
            <View style={styles.reward}>
              <Text style={styles.rewardEmoji}>⭐</Text>
              <Text style={styles.rewardValue}>+{recipe.xpReward} XP</Text>
            </View>
          </View>

          <Pressable style={styles.button} onPress={onDismiss}>
            <Text style={styles.buttonText}>Awesome! 🙌</Text>
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(61,43,31,0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: Radius.card,
    padding: 28,
    alignItems: 'center',
    width: '100%',
    maxWidth: 340,
    ...Shadows.clayHeavy,
  },
  banner: {
    ...Typography.ui,
    fontSize: 13,
    color: Colors.spice,
    letterSpacing: 0.5,
    marginBottom: 14,
  },
  emoji: {
    fontSize: 68,
    marginBottom: 6,
  },
  name: {
    ...Typography.display,
    fontSize: 26,
    color: Colors.soil,
    marginBottom: 6,
    textAlign: 'center',
  },
  description: {
    ...Typography.uiLight,
    fontSize: 14,
    color: Colors.soilMid,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  funFactBox: {
    backgroundColor: Colors.sunshineLight,
    borderRadius: Radius.sm,
    padding: 14,
    marginBottom: 20,
    width: '100%',
  },
  funFact: {
    ...Typography.ui,
    fontSize: 13,
    color: Colors.soil,
    textAlign: 'center',
    lineHeight: 19,
    fontStyle: 'italic',
  },
  rewards: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  reward: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: Colors.parchmentDeep,
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: Radius.pill,
  },
  rewardEmoji: {
    fontSize: 18,
  },
  rewardValue: {
    ...Typography.uiBold,
    fontSize: 16,
    color: Colors.soil,
  },
  button: {
    backgroundColor: Colors.sunshine,
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: Radius.button,
    ...Shadows.clay,
  },
  buttonText: {
    ...Typography.uiBold,
    fontSize: 17,
    color: Colors.white,
  },
});
