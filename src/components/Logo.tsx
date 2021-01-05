import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <Image source={require('../../assets/logo.png')} style={styles.logo} />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 156,
    height: 72,
  },
});
