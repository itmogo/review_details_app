import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}){
    //passing data between screens using usestate 
    const [reviews, setReviews] = useState([
        {title: 'Pray, some more', rating: 5, body:'PUSH - Pray Until Something Happens', key: '1' },
        {title: 'Lion, child of a lion roar wild ', rating: 3, body:'Wow, am doing well', key: '2' },
        {title: 'Winner, Move up now!!!!!!!!!!', rating:  4, body:'Move', key: '3' },

    ]);   

    return(
        <View style={globalStyles.container}>
        <FlatList 
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>                
                </TouchableOpacity>
            )}       
        />         
                     
        </View>
    )
}

