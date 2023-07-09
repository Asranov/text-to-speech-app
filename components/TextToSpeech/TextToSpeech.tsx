import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Tts from 'react-native-tts';

const TextToSpeech = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultPitch(1.0);
  }, []);

  const speakText = () => {
    Tts.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Speak" onPress={speakText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    borderRadius: 8,
  },
});

export default TextToSpeech;
