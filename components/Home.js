import { View, Text} from 'react-native';
import WebView from 'react-native-webview';
import React from 'react';

export default function Home() {
  return (
    <View>
      <WebView source={{ uri: 'https://infinite.red'}}
      style={{ marginTop: 20 }}
      />
    </View>
  )
}