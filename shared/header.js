import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//import { Navigation } from 'react-navigation';

//creater component
export default function Header({ navigation, title }) {
  // destruction navigation

  // create onPRESS FUNCTION
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      {/*icon for menu*/}
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        {/* added a dynamic title for header and about screens*/}
        <Text style={styles.headerText}> {title} </Text>
      </View>
    </View>
  );
}

//creating styles sheets
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});
