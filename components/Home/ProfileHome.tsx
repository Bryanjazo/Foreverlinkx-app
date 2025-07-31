import { LinearGradient } from "expo-linear-gradient";
import { JSX } from "react";
import { Text, View, ScrollView } from "react-native";
import { profileHomeStyles } from "./styles/ProfileHome";
import BookingContainer from "./BookingContainer";
import PermanentJewelryServices from "./PermanentJewelryServices";
import HowPjWorks from "./HowPjWorks";
import RecentAdds from "./RecentAdds";

const ProfileHome = (): JSX.Element => {
  return (
    <ScrollView>
      <View style={profileHomeStyles.profileHomeContainer}>
        <View style={profileHomeStyles.profileHomeTopContainer}>
          <LinearGradient
            colors={["#ccc2c2", "#faf9f7", "white"]} // adjust to your background
            style={profileHomeStyles.linearGradient}
          />
          <View style={profileHomeStyles.welcomeContainer}>
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
        <View style={profileHomeStyles.homeInfoContainer}>
          <BookingContainer />
          <PermanentJewelryServices />
          <HowPjWorks />
          <RecentAdds />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileHome;
