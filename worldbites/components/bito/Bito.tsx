import { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
import { useBito } from '@/hooks/useBito';
import { BitoBubble } from './BitoBubble';
import { Colors } from '@/constants/theme';

// Swap these for the real Bito images once generated
const BITO_EMOJI: Record<string, string> = {
  happy:   '😊',
  excited: '🤩',
  curious: '🤔',
  waving:  '👋',
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

  return (
    <View style={styles.zone}>
      {dialogue && <BitoBubble text={dialogue} />}
      <Pressable onPress={handleTap} style={styles.pressable}>
        <Animated.View style={animStyle}>
          {/* Replace View+Text below with <Image> when bito-{expression}.png is ready */}
          <View style={styles.bitoBody}>
            <Text style={styles.bitoEmoji}>{BITO_EMOJI[expression]}</Text>
          </View>
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
    paddingRight: 12,
    paddingBottom: 4,
  },
  pressable: {
    alignItems: 'center',
  },
  bitoBody: {
    width: 110,
    height: 126,
    borderRadius: 55,
    backgroundColor: Colors.sunshine,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.clay,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  bitoEmoji: {
    fontSize: 58,
  },
});
