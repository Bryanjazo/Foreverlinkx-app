import { JSX, useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { profileHomeStyles } from "../Home/styles/ProfileHome";
import { LinearGradient } from "expo-linear-gradient";
import { ShopHomeStyles } from "./Styles/ShopHomeStyles";
import { IconSymbol } from "../ui/IconSymbol";
import ButtonsCard from "./ShopHomeCards/ButtonCards";

function ShopHome(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <ScrollView>
      <View style={profileHomeStyles.profileHomeContainer}>
        <View style={profileHomeStyles.profileHomeTopContainer}>
          <LinearGradient
            colors={["#ccc2c2", "#faf9f7", "white"]} // adjust to your background
            style={profileHomeStyles.linearGradient}
          />
          <View style={profileHomeStyles.welcomeContainer}>
            <Text style={profileHomeStyles.welcomeHeader}>Shop Jewelry</Text>
            <Text style={profileHomeStyles.welcomeText}>
              Your custom jewelry journey starts here
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 40 }}>
          <View
            style={[
              ShopHomeStyles.shopInput,
              {
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <IconSymbol
              name="magnifyingglass"
              size={14}
              color="black"
              style={{ marginRight: 8 }}
            />
            <TextInput
              style={{ fontSize: 12 }}
              placeholder="Shop Jewelry..."
              value={searchValue}
              placeholderTextColor={"#888"}
              onChangeText={(text: string) => setSearchValue(text)}
            />
          </View>
          <ButtonsCard />
        </View>
      </View>
    </ScrollView>
  );
}

export default ShopHome;
