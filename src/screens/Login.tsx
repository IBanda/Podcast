import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from '../components/Login/Button';
import LoginInputs from '../components/Login/Inputs';
import Logo from '../components/Logo';

const bgImage = require('../../assets/login/bg.png');

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.imageBackground}>
        <View style={[styles.container, styles.layer]}>
          <Logo />
          <Text style={styles.text}>Episodic series of digital audio</Text>
          <LoginInputs />
          <Button onPress={() => {}} bg="#3369FF">
            Login
          </Button>
          <TouchableWithoutFeedback>
            <Text style={styles.forgottenPWDText}>Forgot Password?</Text>
          </TouchableWithoutFeedback>
          <Button onPress={() => {}} bg="#2B5D95">
            Login with Facebook
          </Button>
          <Button onPress={() => {}} bg="#FF334B">
            Register new account
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    paddingRight: 30,
    paddingBottom: 50,
  },
  layer: {
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 20,
    maxWidth: '70%',
  },
  forgottenPWDText: {
    color: '#fff',
    margin: 'auto',
    marginBottom: 20,
    marginTop: 0,
    textDecorationLine: 'underline',
  },
});
