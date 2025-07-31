import { JSX } from "react";
import { View, Text, ScrollView } from "react-native";
import { profileHomeStyles } from "../Home/styles/ProfileHome";
import { BookHomeStyles } from "./styles/BookHome";
import { LinearGradient } from "expo-linear-gradient";
import BookCard from "./BookCards/BookCard";
import BookExpectation from "./BookExpectation";
import Calendar from "./Calendar";
import Locations from "./Locations";

function BookHome(): JSX.Element {
  const appointments = [
    {
      title: "Permanent Jewelry",
      description: "Two people appointment",
      time: "30 minutes",
      deposit: "20",
      isPopular: true,
      icon: "sparkles",
    },
    {
      title: "Ring making class",
      description: "2 people appointment",
      time: "1 hour",
      deposit: "20",
      isPopular: false,
      icon: "heart",
    },
    {
      title: "Permanent Jewelry",
      description: "Single person appointment",
      time: "15 minutes",
      deposit: "20",
      isPopular: true,
      icon: "arrow.right",
    },
    {
      title: "Permanent Jewelry",
      description: "Five group appointment",
      time: "2 hours",
      deposit: "50",
      isPopular: false,
      icon: "heart",
    },
    {
      title: "Permanent Jewelry",
      description: "Five group appointment",
      time: "2 hours",
      deposit: "50",
      isPopular: false,
      icon: "heart",
    },
    {
      title: "Permanent Jewelry",
      description: "Five group appointment",
      time: "2 hours",
      deposit: "50",
      isPopular: false,
      icon: "heart",
    },
  ];

  return (
    <ScrollView>
      <View style={profileHomeStyles.profileHomeContainer}>
        <View style={BookHomeStyles.bookHeaderContainer}>
          <LinearGradient
            colors={["#ccc2c2", "#faf9f7", "white"]} // adjust to your background
            style={profileHomeStyles.linearGradient}
          />
          <View style={profileHomeStyles.welcomeContainer}>
            <Text style={[profileHomeStyles.welcomeHeader, { paddingTop: 20 }]}>
              Book Custom Consultation
            </Text>
            <Text style={profileHomeStyles.welcomeText}>
              Start your custom jewelry journey with our expert designers
            </Text>
          </View>
        </View>
        <View style={profileHomeStyles.homeInfoContainer}>
          <Text>Choose Your Consultation Type</Text>
          <ScrollView style={{ maxHeight: 400 }}>
            {appointments.map((props, index) => (
              <BookCard key={index} {...props} />
            ))}
          </ScrollView>
          <BookExpectation />
          {/* <Calendar /> */}
          <Locations />
        </View>
      </View>
    </ScrollView>
  );
}

export default BookHome;
