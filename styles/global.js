import {StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },

    titleText:{
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: 'red',
    },

    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        color: 'green'
    },
    text:{
        fontFamily: 'nunito-regular',
        fontSize: 18, 
        color: 'blue' ,      
    },
})