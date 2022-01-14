import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import Header from "../shared/header";
import React from "react";

const screens = {
  About: {
    screen: About,
    //the code help the menu button to open when clicked
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header
            navigation={navigation}
            title=" Details About Cyber Security Experts"
          />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  //create one css for both screens,
  //one can specify a different properties for a screen not here
  //on individual screen like for reviews details- its backgrundcolor
  defaultNavigationOptions: {
    headerTintColor: "#666",
    headerStyle: { backgroundColor: "#aabbee", height: 60 },
  },
});
export default AboutStack;
