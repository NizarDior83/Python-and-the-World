import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { INGREDIENTS } from '@/data/ingredients';
import { Colors, Radius, TileColorMap } from '@/constants/theme';

interface Props {
  ingredientId: string;
  isSelected: boolean;
}

export function GameTile({ ingredientId, isSelected }: Props) {
  const ingredient = INGREDIENTS[ingredientId];
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(isSelected ? 1.1 : 1, {
      stiffness: 320,
      damping: 16,
    });
  }, [isSelected]);

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const tileColor = TileColorMap[ingredient?.category ?? 'grain'] ?? Colors.tileGrain;

  return (
    <Animated.View
      style={[
        styles.tile,
        { backgroundColor: tileColor },
        isSelected && styles.tileSelected,
        animStyle,
      ]}
    >
      <Text style={styles.emoji} adjustsFontSizeToFit numberOfLines={1}>
        {ingredient?.emoji ?? '?'}
      </Text>
      {ingredient && ingredient.tier > 1 && (
        <View style={styles.tierBadge}>
          <Text style={styles.tierText}>{ingredient.tier}</Text>
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    borderRadius: Radius.tile,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    shadowColor: Colors.clay,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  tileSelected: {
    borderWidth: 2.5,
    borderColor: Colors.sunshine,
    shadowOpacity: 0.55,
    shadowRadius: 7,
    elevation: 8,
  },
  emoji: {
    fontSize: 26,
  },
  tierBadge: {
    position: 'absolute',
    top: 3,
    right: 3,
    backgroundColor: Colors.soil,
    width: 15,
    height: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tierText: {
    color: Colors.white,
    fontSize: 8,
    fontWeight: '700',
  },
});
