import { useEffect } from 'react';
import { View, Image, Pressable, StyleSheet, ImageSourcePropType } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
import { useBito, BitoExpression } from '@/hooks/useBito';
import { BitoBubble } from './BitoBubble';

// Real Bito clay-render assets (transparent PNGs)
const BITO_IMAGES: Record<BitoExpression, ImageSourcePropType> = {
  happy:   require('@/assets/bito/bito-happy.png'),
  excited: require('@/assets/bito/bito-excited.png'),
  curious: require('@/assets/bito/bito-curious.png'),
  // No dedicated waving asset yet — fall back to the happy pose
  waving:  require('@/assets/bito/bito-happy.png'),
};

// Per-expression render size — keeps Bito's body roughly consistent even
// though the excited/curious frames include extra confetti / a thought bubble.
const BITO_SIZE: Record<BitoExpression, { width: number; height: number }> = {
  happy:   { width: 132, height: 165 },
  excited: { width: 158, height: 198 },
  curious: { width: 150, height: 188 },
  waving:  { width: 132, height: 165 },
};

export function Bito() {
  const { expression, dialogue, onBitoTap } = useBito();
  const enterY = useSharedValue(80);
  const idleY = useSharedValue(0);
  const scale = useSharedValue(1);

  useEffect(() => {
    enterY.value = withSpring(0, { mass: 0.8, stiffness: 200, damping: 18 });
  }, []);

  useEffect(() => {
    idleY.value = withRepeat(
      withSequence(
        withTiming(-5, { duration: 1200 }),
        withTiming(0, { duration: 1200 }),
      ),
      -1,
      false,
    );
  }, []);

  function handleTap() {
    scale.value = withSequence(
      withTiming(0.92, { duration: 80 }),
      withTiming(1.06, { duration: 80 }),
      withSpring(1, { stiffness: 300, damping: 15 }),
    );
    onBitoTap();
  }

  const animStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: enterY.value + idleY.value },
      { scale: scale.value },
    ],
  }));

  const size = BITO_SIZE[expression];

  return (
    <View style={styles.zone}>
      {dialogue && <BitoBubble text={dialogue} />}
      <Pressable onPress={handleTap} style={styles.pressable} hitSlop={12}>
        <Animated.View style={animStyle}>
          <Image
            source={BITO_IMAGES[expression]}
            style={{ width: size.width, height: size.height }}
            resizeMode="contain"
          />
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  zone: {
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 16,
    paddingBottom: 2,
  },
  pressable: {
    alignItems: 'center',
  },
});
