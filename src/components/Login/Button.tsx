import React from 'react';
import { TouchableHighlight, View, StyleSheet, Text } from 'react-native';

interface Props {
  children: string;
  onPress: () => void;
  bg: string;
}

export default function Button({ children, onPress, bg }: Props) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.touchableHighlight, { shadowColor: bg }]}
    >
      <View style={[styles.button, { backgroundColor: bg, shadowColor: bg }]}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touchableHighlight: {
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.44,
    shadowRadius: 20,
    borderRadius: 25,
    marginBottom: 20,
  },
  button: {
    borderRadius: 25,
    alignItems: 'center',
    paddingVertical: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 16,
  },
  buttonText: {
    color: '#fff',
  },
});
