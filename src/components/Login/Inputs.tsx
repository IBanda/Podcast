import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

interface Prop {
  placeholder: string;
  type: 'emailAddress' | 'password';
  value: string;
  onChangeText: (text: string) => void;
  children: object;
}

function Input({ placeholder, type, value, onChangeText, children }: Prop) {
  return (
    <View style={styles.inputContainer}>
      {children}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        textContentType={type}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default function LoginInputs() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onEmailChange = (text: string) => {
    setEmail(text);
  };
  const onPasswordChange = (text: string) => {
    setPassword(text);
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="E-mail address"
        type="emailAddress"
        onChangeText={onEmailChange}
        value={email}
      >
        <Image
          source={require('../../../assets/login/email.png')}
          style={styles.inputIcon}
        />
      </Input>
      <Input
        placeholder="Password"
        type="password"
        onChangeText={onPasswordChange}
        value={password}
      >
        <Image
          source={require('../../../assets/login/key.png')}
          style={styles.inputIcon}
        />
      </Input>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  inputIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
    position: 'absolute',
    left: 15,
  },
  input: {
    width: '100%',
    height: '100%',
    padding: 15,
    paddingLeft: 40,
    color: '#fff',
  },
  container: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
