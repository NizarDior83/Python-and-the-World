import { View, Text, ScrollView, Pressable, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGameStore } from '@/stores/gameStore';
import { REGIONS, REGION_ORDER } from '@/data/regions';
import { Colors, Radius, Shadows, Typography } from '@/constants/theme';

export default function WorldScreen() {
  const coins = useGameStore(s => s.coins);
  const activeRegion = useGameStore(s => s.activeRegion);
  const unlockedRegions = useGameStore(s => s.unlockedRegions);
  const unlockRegion = useGameStore(s => s.unlockRegion);
  const initRegion = useGameStore(s => s.initRegion);

  function handlePress(regionId: string) {
    const region = REGIONS[regionId];
    if (unlockedRegions.includes(regionId)) {
      initRegion(regionId);
    } else if (coins >= region.unlockCost) {
      Alert.alert(
        `Unlock ${region.name}? ${region.flag}`,
        `Spend ${region.unlockCost} coins to explore ${region.name}?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Unlock! 🎉', onPress: () => unlockRegion(regionId) },
        ],
      );
    } else {
      Alert.alert(
        `${region.flag} ${region.name} is locked`,
        `You need ${region.unlockCost} coins. You have ${coins} coins.\n\nKeep merging ingredients to earn more!`,
        [{ text: 'OK' }],
      );
    }
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>🌍 World Map</Text>
        <View style={styles.coinsChip}>
          <Text style={styles.coinsText}>🪙 {coins}</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      >
        {REGION_ORDER.map(regionId => {
          const region = REGIONS[regionId];
          const unlocked = unlockedRegions.includes(regionId);
          const isActive = activeRegion === regionId;
          const canAfford = coins >= region.unlockCost;

          return (
            <Pressable
              key={regionId}
              style={[
                styles.card,
                unlocked && styles.cardUnlocked,
                isActive && styles.cardActive,
              ]}
              onPress={() => handlePress(regionId)}
            >
              <View
                style={[styles.regionIcon, { backgroundColor: region.gradient[0] }]}
              >
                <Text style={styles.mapEmoji}>{region.mapEmoji}</Text>
              </View>

              <View style={styles.cardBody}>
                <View style={styles.nameRow}>
                  <Text style={styles.flag}>{region.flag}</Text>
                  <Text style={styles.regionName}>{region.name}</Text>
                  {isActive && (
                    <View style={styles.activePill}>
                      <Text style={styles.activePillText}>Active</Text>
                    </View>
                  )}
                </View>

                <Text style={styles.desc} numberOfLines={2}>
                  {region.description}
                </Text>

                {!unlocked && (
                  <Text
                    style={[
                      styles.lockLabel,
                      canAfford ? styles.lockAffordable : styles.lockExpensive,
                    ]}
                  >
                    🪙 {region.unlockCost} to unlock
                    {canAfford ? ' ✓' : ''}
                  </Text>
                )}
              </View>
            </Pressable>
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
  coinsChip: {
    backgroundColor: Colors.sunshineLight,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: Radius.pill,
  },
  coinsText: {
    ...Typography.uiBold,
    fontSize: 15,
    color: Colors.soil,
  },
  list: {
    padding: 16,
    gap: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.parchmentDeep,
    borderRadius: Radius.card,
    overflow: 'hidden',
    opacity: 0.72,
    ...Shadows.clayLight,
  },
  cardUnlocked: {
    backgroundColor: Colors.white,
    opacity: 1,
  },
  cardActive: {
    borderWidth: 2.5,
    borderColor: Colors.sunshine,
  },
  regionIcon: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapEmoji: {
    fontSize: 36,
  },
  cardBody: {
    flex: 1,
    padding: 14,
    gap: 4,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  flag: {
    fontSize: 18,
  },
  regionName: {
    ...Typography.display,
    fontSize: 18,
    color: Colors.soil,
    flex: 1,
  },
  activePill: {
    backgroundColor: Colors.sunshine,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Radius.pill,
  },
  activePillText: {
    ...Typography.ui,
    fontSize: 10,
    color: Colors.white,
  },
  desc: {
    ...Typography.uiLight,
    fontSize: 12,
    color: Colors.soilMid,
    lineHeight: 17,
  },
  lockLabel: {
    ...Typography.ui,
    fontSize: 12,
    marginTop: 2,
  },
  lockAffordable: {
    color: Colors.herb,
  },
  lockExpensive: {
    color: Colors.spice,
  },
});
