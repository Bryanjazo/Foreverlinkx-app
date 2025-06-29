import { LinearGradient } from "expo-linear-gradient";
import { JSX } from "react";
import { Text, View } from "react-native";
import { profileHomeStyles } from "./styles/ProfileHome";

const ProfileHome = (): JSX.Element => {
  return (
    <View style={profileHomeStyles.profileHomeContainer}>
      <View style={profileHomeStyles.profileHomeTopContainer}>
        <LinearGradient
          colors={["#f0ede8", "#faf9f7", "white"]} // adjust to your background
          style={profileHomeStyles.linearGradient}
        />
        <Text>Home profile</Text>;
      </View>
    </View>
  );
};

export default ProfileHome;
