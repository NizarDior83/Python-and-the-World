import { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeOut, FadeInDown } from 'react-native-reanimated';
import { useSettingsStore } from '@/stores/settingsStore';
import { Colors, Radius, Shadows, Typography } from '@/constants/theme';

interface Step {
  image: ImageSourcePropType;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    image: require('@/assets/bito/bito-happy.png'),
    title: "Hi! I'm Bito! 👋",
    body: "Welcome to WorldBites! I'll be your guide as we cook our way around the whole world together.",
  },
  {
    image: require('@/assets/bito/bito-happy.png'),
    title: 'Tap to Merge',
    body: 'Tap an ingredient, then tap a matching one next to it. Merge them to create something brand new!',
  },
  {
    image: require('@/assets/bito/bito-curious.png'),
    title: 'Discover Recipes',
    body: 'Combine the right ingredients to unlock real recipes from around the world — and fun facts about each one!',
  },
  {
    image: require('@/assets/bito/bito-excited.png'),
    title: "Let's Cook! 🎉",
    body: 'Earn coins, unlock new countries, and fill your recipe book. Ready to start your delicious adventure?',
  },
];

export default function Onboarding() {
  const router = useRouter();
  const completeOnboarding = useSettingsStore(s => s.completeOnboarding);
  const [step, setStep] = useState(0);

  const isLast = step === STEPS.length - 1;
  const current = STEPS[step];

  function finish() {
    completeOnboarding();
    router.replace('/');
  }

  function next() {
    if (isLast) finish();
    else setStep(s => s + 1);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.top}>
        {!isLast ? (
          <Pressable onPress={finish} hitSlop={12}>
            <Text style={styles.skip}>Skip</Text>
          </Pressable>
        ) : (
          <View />
        )}
      </View>

      <View style={styles.content}>
        <Animated.View
          key={`img-${step}`}
          entering={FadeIn.duration(350)}
          exiting={FadeOut.duration(150)}
          style={styles.imageWrap}
        >
          <Image source={current.image} style={styles.image} resizeMode="contain" />
        </Animated.View>

        <Animated.View key={`txt-${step}`} entering={FadeInDown.duration(400).delay(120)}>
          <Text style={styles.title}>{current.title}</Text>
          <Text style={styles.body}>{current.body}</Text>
        </Animated.View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.dots}>
          {STEPS.map((_, i) => (
            <View key={i} style={[styles.dot, i === step && styles.dotActive]} />
          ))}
        </View>

        <Pressable style={styles.button} onPress={next}>
          <Text style={styles.buttonText}>
            {isLast ? "Start Cooking! 🍳" : 'Next'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.parchment,
  },
  top: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  skip: {
    ...Typography.ui,
    fontSize: 15,
    color: Colors.soilMid,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  imageWrap: {
    height: 280,
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  image: {
    width: 220,
    height: 275,
  },
  title: {
    ...Typography.display,
    fontSize: 30,
    color: Colors.soil,
    textAlign: 'center',
    marginBottom: 14,
  },
  body: {
    ...Typography.uiLight,
    fontSize: 16,
    color: Colors.soilMid,
    textAlign: 'center',
    lineHeight: 24,
  },
  bottom: {
    paddingHorizontal: 32,
    paddingBottom: 24,
    gap: 24,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.parchmentDeep,
  },
  dotActive: {
    width: 24,
    backgroundColor: Colors.sunshine,
  },
  button: {
    backgroundColor: Colors.sunshine,
    paddingVertical: 16,
    borderRadius: Radius.button,
    alignItems: 'center',
    ...Shadows.clay,
  },
  buttonText: {
    ...Typography.uiBold,
    fontSize: 18,
    color: Colors.white,
  },
});
