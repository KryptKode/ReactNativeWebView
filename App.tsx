import React from "react";
import { WebView } from "react-native-webview";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function App() {
  return (
    <WebView
<<<<<<< HEAD
      source={{ uri: "http://Onetipbox.com" }}
      style={{ marginTop: 50 }}
=======
      source={{ uri: "https://expo.io" }}
      style={{ marginTop: getStatusBarHeight() }}
>>>>>>> develop
    />
  );
}
