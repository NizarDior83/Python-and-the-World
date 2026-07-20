import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SettingsStore {
  hasOnboarded: boolean;
  soundEnabled: boolean;
  hapticsEnabled: boolean;
  _hasHydrated: boolean;

  completeOnboarding: () => void;
  resetOnboarding: () => void;
  setSound: (v: boolean) => void;
  setHaptics: (v: boolean) => void;
  setHasHydrated: (v: boolean) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    set => ({
      hasOnboarded: false,
      soundEnabled: true,
      hapticsEnabled: true,
      _hasHydrated: false,

      completeOnboarding: () => set({ hasOnboarded: true }),
      resetOnboarding: () => set({ hasOnboarded: false }),
      setSound: v => set({ soundEnabled: v }),
      setHaptics: v => set({ hapticsEnabled: v }),
      setHasHydrated: v => set({ _hasHydrated: v }),
    }),
    {
      name: 'worldbites-settings',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: s => ({
        hasOnboarded: s.hasOnboarded,
        soundEnabled: s.soundEnabled,
        hapticsEnabled: s.hapticsEnabled,
      }),
      onRehydrateStorage: () => state => state?.setHasHydrated(true),
    },
  ),
);
