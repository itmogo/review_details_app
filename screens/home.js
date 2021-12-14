import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}){

    //onpress function on button when pressed
     const pressHandler = () => {
         navigation.navigate('ReviewDetails');
        //new navigation code push up element in a stack
        //navigation.push('ReviewDetails');
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen </Text>
           
           <Button title='go to review page' onPress={pressHandler}/>
        </View>
    );
}

