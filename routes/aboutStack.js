import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
           // title: 'About: Top 30 Cybersecurity Experts You Should Follow In 2022',
            headerTitle: () => <Header />       
        },
    },
   
}

const AboutStack = createStackNavigator(screens, {
    //create one css for both screens, 
    //one can specify a different properties for a screen not here
    //on individual screen like for reviews details- its backgrundcolor 
    defaultNavigationOptions: {
        headerTintColor: '#666',
        headerStyle: {backgroundColor: '#aabbee', height: 60}
    }
});
    export default AboutStack;