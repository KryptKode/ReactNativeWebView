import React from "react";
import { WebView } from "react-native-webview";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function App() {
  return (
    <WebView
      source={{ uri: "https://www.achimecreativeinsight.com/law/public/" }}
      style={{ marginTop: getStatusBarHeight() }}
    />
  );
}
