import { LinearGradient } from "expo-linear-gradient";
import { JSX } from "react";
import { Text, View } from "react-native";
import { profileHomeStyles } from "./styles/ProfileHome";
import BookingContainer from "./BookingContainer";
const ProfileHome = (): JSX.Element => {
  return (
    <View style={profileHomeStyles.profileHomeContainer}>
      <View style={profileHomeStyles.profileHomeTopContainer}>
        <LinearGradient
          colors={["#ccc2c2", "#faf9f7", "white"]} // adjust to your background
          style={profileHomeStyles.linearGradient}
        />
        <View style={profileHomeStyles.welomeContainer}>
          <Text style={profileHomeStyles.welcomeHeader}>
            Create something unique
          </Text>
          <Text style={profileHomeStyles.welcomeText}>
            Your custom jewelry journey starts here
          </Text>
        </View>
        <View style={profileHomeStyles.profileIconContainer}>
          <Text style={profileHomeStyles.profileIconText}>FL</Text>
        </View>
      </View>
      <BookingContainer />
    </View>
  );
};

export default ProfileHome;
