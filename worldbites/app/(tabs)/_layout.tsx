import { Tabs } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Radius, Shadows, Typography } from '@/constants/theme';

function TabIcon({ emoji, label, focused }: { emoji: string; label: string; focused: boolean }) {
  return (
    <View style={[styles.tabItem, focused && styles.tabItemFocused]}>
      <Text style={styles.tabEmoji}>{emoji}</Text>
      <Text style={[styles.tabLabel, { color: focused ? Colors.soil : Colors.soilMid }]}>
        {label}
      </Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="🍳" label="Cook" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="📖" label="Recipes" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="world"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="🌍" label="World" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.white,
    borderTopWidth: 0,
    height: 72,
    paddingBottom: 8,
    paddingTop: 8,
    ...Shadows.clayLight,
  },
  tabItem: {
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: Radius.pill,
  },
  tabItemFocused: {
    backgroundColor: Colors.sunshineLight,
  },
  tabEmoji: {
    fontSize: 22,
  },
  tabLabel: {
    fontSize: 10,
    ...Typography.ui,
  },
});
