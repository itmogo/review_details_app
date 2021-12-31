import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";


export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}> About Screen</Text>
      <Text>
        {" "}
        URL:
        https://cybersecurityventures.com/top-30-cybersecurity-experts-you-should-follow-in-2021/
      </Text>
    </View>
  );
}
