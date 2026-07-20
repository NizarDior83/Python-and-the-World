import { View, Text, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Colors, Radius, Shadows, Typography } from '@/constants/theme';

interface Props {
  text: string;
}

export function BitoBubble({ text }: Props) {
  return (
    <Animated.View
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(200)}
      style={styles.bubble}
    >
      <Text style={styles.text}>{text}</Text>
      <View style={styles.tail} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: Colors.white,
    borderRadius: Radius.bubble,
    paddingHorizontal: 14,
    paddingVertical: 10,
    maxWidth: 220,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 6,
    ...Shadows.clayLight,
  },
  text: {
    ...Typography.ui,
    fontSize: 13,
    color: Colors.soil,
    lineHeight: 19,
  },
  tail: {
    position: 'absolute',
    bottom: -8,
    right: 28,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.white,
  },
});
