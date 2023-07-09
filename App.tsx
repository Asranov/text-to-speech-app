import React from 'react';
import { View } from 'react-native';
import TextToSpeech from './components/TextToSpeech/TextToSpeech';


function App(): JSX.Element {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextToSpeech />
    </View>
  );
}


export default App;
