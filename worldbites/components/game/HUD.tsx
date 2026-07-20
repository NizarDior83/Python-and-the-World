import { View, Text, StyleSheet } from 'react-native';
import { useGameStore } from '@/stores/gameStore';
import { REGIONS } from '@/data/regions';
import { Colors, Radius, Shadows, Typography } from '@/constants/theme';

export function HUD() {
  const coins = useGameStore(s => s.coins);
  const xp = useGameStore(s => s.xp);
  const activeRegion = useGameStore(s => s.activeRegion);
  const region = REGIONS[activeRegion];

  return (
    <View style={styles.container}>
      <View style={styles.regionBadge}>
        <Text style={styles.flag}>{region?.flag ?? '🌍'}</Text>
        <Text style={styles.regionName}>{region?.name ?? 'World'}</Text>
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statEmoji}>🪙</Text>
          <Text style={styles.statValue}>{coins}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statEmoji}>⭐</Text>
          <Text style={styles.statValue}>{xp} XP</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    ...Shadows.clayLight,
  },
  regionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.sunshineLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radius.pill,
  },
  flag: {
    fontSize: 18,
  },
  regionName: {
    ...Typography.ui,
    fontSize: 15,
    color: Colors.soil,
  },
  stats: {
    flexDirection: 'row',
    gap: 8,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.parchmentDeep,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radius.pill,
  },
  statEmoji: {
    fontSize: 15,
  },
  statValue: {
    ...Typography.uiBold,
    fontSize: 14,
    color: Colors.soil,
  },
});
