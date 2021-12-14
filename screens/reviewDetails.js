import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';


export default function ReviewDetails({navigation}){

    const pressHandler = () => {
        navigation.goBack();
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}> Review Details Screen</Text>
            <Button  title='back to home page' onPress={pressHandler} />
        </View>
        )
    } 
const styles = StyleSheet.create({
    container:{
        padding: 24,
    }

});