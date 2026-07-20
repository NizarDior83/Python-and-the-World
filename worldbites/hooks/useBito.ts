import { useEffect, useState } from 'react';
import { useGameStore } from '@/stores/gameStore';

export type BitoExpression = 'happy' | 'excited' | 'curious' | 'waving';

const DIALOGUE: Record<BitoExpression, string[]> = {
  happy: [
    'Try merging two 🌾 rice tiles!',
    'Combine ingredients to cook something amazing!',
    'Keep merging — great food takes patience!',
    "You're doing great, little chef! 👨‍🍳",
  ],
  excited: [
    'WOW! You unlocked a new recipe! 🎉',
    "AMAZING! The world's flavours are yours!",
    'Yes, yes, YES! You did it! 🌟',
  ],
  curious: [
    "Did you know sushi means 'sour rice'? 🍣",
    'Fun fact: Onigiri is 2,000 years old! 🍙',
    'Ramen has over 10,000 restaurants in Japan! 🍜',
    "Burrito means 'little donkey' in Spanish! 🌯",
    'Tacos date back to 18th-century silver mines! ⛏️',
  ],
  waving: [
    'Hello, world explorer! 👋',
    'Welcome back, little chef!',
    'Ready to cook up something amazing?',
  ],
};

export function useBito() {
  const lastUnlockedRecipe = useGameStore(s => s.lastUnlockedRecipe);
  const [expression, setExpression] = useState<BitoExpression>('happy');
  const [dialogue, setDialogue] = useState<string | null>(null);

  useEffect(() => {
    if (lastUnlockedRecipe) {
      setExpression('excited');
      setDialogue(pick(DIALOGUE.excited));
      const timer = setTimeout(() => {
        setDialogue(null);
        setExpression('happy');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [lastUnlockedRecipe]);

  function onBitoTap() {
    const lines = DIALOGUE.curious;
    setDialogue(pick(lines));
    const timer = setTimeout(() => setDialogue(null), 4000);
    return () => clearTimeout(timer);
  }

  return { expression, dialogue, onBitoTap };
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
