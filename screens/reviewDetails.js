import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';


export default function ReviewDetails({navigation}){ 

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}> Number: {navigation.getParam ('number')} </Text>
            <Text style={globalStyles.text}> Linkedln: {navigation.getParam('linkedln')} </Text>
            <Text style={globalStyles.text}> Title: {navigation.getParam('title')} </Text>
            <Text style={globalStyles.text}> Brand: {navigation.getParam('brand')} </Text>
            <Text style={globalStyles.text}> Twitter: {navigation.getParam('twitter')} </Text>
            <Text style={globalStyles.text}> Location: {navigation.getParam('location')} </Text> 
        </View>
        )
    } 
// const styles = StyleSheet.create({
//     container:{
//         padding: 24,
//     }

// });