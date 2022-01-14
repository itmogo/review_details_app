import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  //passing data between screens using usestate
  const [reviews, setReviews] = useState([
    {
      number: 1,
      linkedln: "Adam Levin",
      title: "Chairman & Founder",
      brand: "CyberScout",
      twitter: "@Adam_K_Levin",
      location: "Scottsdale, Ariz.",
      rating: 4,
      key: "1",
    },
    {
      number: 2,
      linkedln: "Adam Meyers",
      title: "SVP Intelligence",
      brand: "Crowdstrike",
      twitter: "@Adam_Cyber",
      location: "Washington, D.C.",
      rating: 3,
      key: "2",
    },
    {
      number: 3,
      linkedln: "Alissa (Dr Jay) Abdullah, PhD",
      title: "SVP & Deputy CSO",
      brand: "Mastercard",
      twitter: "@dralissajay",
      location: "Waldorf, Md.",
      rating: 1,
      key: "4",
    },
    {
      number: 5,
      linkedln: "Ann Johnson",
      title: "CVP - Security, Compliance & Identity",
      brand: "Microsoft",
      twitter: "@ajohnsocyber",
      location: "Seattle, Wash.",
      rating: 2,
      key: "5",
    },
    {
      number: 6,
      linkedln: "Bob Carver",
      title: "Principal Cybersecurity Threat Intelligence & Analytics",
      brand: "Verizon",
      twitter: "@cybersecboardrm",
      location: "Dallas, Texas",
      rating: 5,
      key: "6",
    },
    {
      number: 7,
      linkedln: "Brett Arsenault",
      title: "CVP & CISO",
      brand: "Microsoft",
      twitter: "@Microsoft",
      location: "Bellevue, Wash.",
      rating: 2,
      key: "7",
    },
    {
      number: 8,
      linkedln: "Brian Honan",
      title: "Technical Advisory Board Member",
      brand: "Circit",
      twitter: "@BrianHonan",
      location: "Ireland",
      rating: 3,
      key: "8",
    },
    {
      number: 9,
      linkedln: "Brian Krebs",
      title: "Reporter & Publisher",
      brand: "KrebsOnSecurity.com",
      twitter: "@briankrebs",
      location: "Arlington, Va.",
      rating: 5,
      key: "9",
    },
    {
      number: 10,
      linkedln: "Bruce Schneier",
      title: "Security Guru",
      brand: "Best-Selling Author",
      twitter: "@schneierblog",
      location: "Boston, Mass.",
      rating: 1,
      key: "10",
    },
    {
      number: 11,
      linkedln: "Chuck Brooks",
      title: "Adjunct Professor",
      brand: "Georgetown University",
      twitter: "@ChuckDBrooks",
      location: "Baltimore, Md.",
      rating: 5,
      key: "11",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>{/*added card component around text*/}
              <Text style={globalStyles.titleText}>{item.linkedln}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
