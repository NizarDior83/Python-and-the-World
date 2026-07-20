import { View, Text, Image, Pressable, Switch, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useSettingsStore } from '@/stores/settingsStore';
import { useGameStore } from '@/stores/gameStore';
import { Colors, Radius, Shadows, Typography } from '@/constants/theme';

export default function Settings() {
  const router = useRouter();

  const soundEnabled = useSettingsStore(s => s.soundEnabled);
  const hapticsEnabled = useSettingsStore(s => s.hapticsEnabled);
  const setSound = useSettingsStore(s => s.setSound);
  const setHaptics = useSettingsStore(s => s.setHaptics);
  const resetOnboarding = useSettingsStore(s => s.resetOnboarding);
  const resetProgress = useGameStore(s => s.resetProgress);

  function confirmReset() {
    Alert.alert(
      'Reset all progress?',
      'This will erase your coins, XP, unlocked recipes and countries. Bito will start fresh. This cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            resetProgress();
            router.replace('/');
          },
        },
      ],
    );
  }

  function replayIntro() {
    resetOnboarding();
    router.replace('/onboarding');
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Pressable onPress={() => router.back()} hitSlop={12} style={styles.closeBtn}>
          <Text style={styles.closeText}>✕</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Game</Text>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>🔊  Sound effects</Text>
          <Switch
            value={soundEnabled}
            onValueChange={setSound}
            trackColor={{ false: Colors.parchmentDeep, true: Colors.herb }}
            thumbColor={Colors.white}
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.rowLabel}>📳  Vibration</Text>
          <Switch
            value={hapticsEnabled}
            onValueChange={setHaptics}
            trackColor={{ false: Colors.parchmentDeep, true: Colors.herb }}
            thumbColor={Colors.white}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>More</Text>

        <Pressable style={styles.row} onPress={replayIntro}>
          <Text style={styles.rowLabel}>👋  Watch Bito's intro again</Text>
          <Text style={styles.chevron}>›</Text>
        </Pressable>

        <View style={styles.divider} />

        <Pressable style={styles.row} onPress={confirmReset}>
          <Text style={[styles.rowLabel, styles.danger]}>🗑️  Reset all progress</Text>
          <Text style={[styles.chevron, styles.danger]}>›</Text>
        </Pressable>
      </View>

      <View style={styles.about}>
        <Image source={require('@/assets/logo.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.appName}>WorldBites</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
        <Text style={styles.tagline}>Cook your way around the world 🌍</Text>
      </View>
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
    paddingVertical: 16,
  },
  title: {
    ...Typography.display,
    fontSize: 26,
    color: Colors.soil,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.clayLight,
  },
  closeText: {
    fontSize: 16,
    color: Colors.soilMid,
    ...Typography.uiBold,
  },
  section: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: Colors.white,
    borderRadius: Radius.card,
    paddingHorizontal: 18,
    paddingVertical: 6,
    ...Shadows.clayLight,
  },
  sectionLabel: {
    ...Typography.ui,
    fontSize: 12,
    color: Colors.soilMid,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginTop: 12,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  rowLabel: {
    ...Typography.ui,
    fontSize: 16,
    color: Colors.soil,
  },
  chevron: {
    fontSize: 22,
    color: Colors.soilMid,
    ...Typography.uiBold,
  },
  danger: {
    color: Colors.spice,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.parchmentDeep,
  },
  about: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 32,
    gap: 2,
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 6,
  },
  appName: {
    ...Typography.display,
    fontSize: 20,
    color: Colors.soil,
  },
  version: {
    ...Typography.uiLight,
    fontSize: 13,
    color: Colors.soilMid,
  },
  tagline: {
    ...Typography.ui,
    fontSize: 13,
    color: Colors.soilMid,
    marginTop: 4,
  },
});
