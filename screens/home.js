import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}){
    //passing data between screens using usestate 
    const [reviews, setReviews] = useState([
 {number: 1, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '1' },
 {number: 2, linkedln:'Adam Meyers', title: 'SVP Intelligence', brand: 'Crowdstrike', twitter:'@Adam_Cyber', location: 'Washington, D.C.', key: '2' },
 {number: 3, linkedln:'Alissa (Dr Jay) Abdullah, PhD', title: 'SVP & Deputy CSO', brand: 'Mastercard', twitter:'@dralissajay', location: 'Waldorf, Md.', key: '4' },
 {number: 5, linkedln:'Ann Johnson', title: 'CVP - Security, Compliance & Identity', brand: 'Microsoft', twitter:'@ajohnsocyber', location: 'Seattle, Wash.', key: '5' },
 {number: 6, linkedln:'Bob Carver', title: 'Principal Cybersecurity Threat Intelligence & Analytics', brand: 'Verizon', twitter:'@cybersecboardrm', location: 'Dallas, Texas', key: '6' },
 {number: 7, linkedln:'Brett Arsenault', title: 'CVP & CISO', brand: 'Microsoft', twitter:'@Microsoft', location: 'Bellevue, Wash.', key: '7' },
 {number: 8, linkedln:'Brian Honan', title: 'Technical Advisory Board Member', brand: 'Circit', twitter:'@BrianHonan', location: 'Ireland', key: '8' },
 {number: 9, linkedln:'Brian Krebs', title: 'Reporter & Publisher', brand: 'KrebsOnSecurity.com', twitter:'@briankrebs', location: 'Arlington, Va.', key: '9' },
 {number: 10, linkedln:'Bruce Schneier', title:'Security Guru', brand: 'Best-Selling Author', twitter:'@schneierblog', location: 'Boston, Mass.', key: '10' },
 {number: 11, linkedln:'Chuck Brooks', title: 'Adjunct Professor', brand: 'Georgetown University', twitter:'@ChuckDBrooks', location: 'Baltimore, Md.', key: '11' },
 {number: 12, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '12' },
 {number: 13, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '13' },
 {number: 14, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '14' },
 {number: 15, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '15' },
 {number: 16, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '16' },
 {number: 17, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '17' },
 {number: 18, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '18' },
 {number: 19, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '19' },
 {number: 20, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '20' },
 {number: 21, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '21' },
 {number: 22, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '22' },
 {number: 23, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '23' },
 {number: 24, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '24' },
 {number: 25, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '25' },
 {number: 26, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '26' },
 {number: 27, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '27' },
 {number: 28, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '28' },
 {number: 29, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '29' },
 {number: 30, linkedln:'Adam Levin', title: 'Chairman & Founder', brand: 'CyberScout', twitter:'@Adam_K_Levin', location: 'Scottsdale, Ariz.', key: '30' },
 
       
    ]);   

    return(
        <View style={globalStyles.container}>
        <FlatList 
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{item.linkedln}</Text>                
                </TouchableOpacity>
            )}       
        />         
                     
        </View>
    )
}

