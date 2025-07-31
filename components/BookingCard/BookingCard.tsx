import React, { JSX } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PermanentJStyles } from "../Home/styles/PermanentJewelryServices";
import { IconSymbol } from "../ui/IconSymbol";

type BookingCardProps = {
  title: string;
  description: string;
  time: string;
  location: string;
};

export default function BookingCard({
  title,
  description,
  time,
  location,
}: BookingCardProps): JSX.Element {
  return (
    <View style={PermanentJStyles.apptCardContainer} key={Math.random()}>
      <View>
        <View style={PermanentJStyles.iconContainer}>
          <Text>
            <IconSymbol name="sparkles" color={"#a48566"} size={20} />
          </Text>
        </View>
      </View>
      <View style={PermanentJStyles.infoContainer}>
        <Text style={[PermanentJStyles.title, PermanentJStyles.hasPadding]}>
          {title}
        </Text>
        <Text
          style={[PermanentJStyles.description, PermanentJStyles.hasPadding]}
        >
          {description}
        </Text>
        <View>
          <View
            style={[
              PermanentJStyles.infoAndIconContainer,
              { paddingBottom: 8 },
            ]}
          >
            <IconSymbol name="clock" color={"#a48566"} size={15} />
            <Text style={[PermanentJStyles.infoText, { paddingLeft: 5 }]}>
              {time}
            </Text>
          </View>
          <View
            style={[
              PermanentJStyles.infoAndIconContainer,
              { paddingBottom: 20 },
            ]}
          >
            <IconSymbol name="location" color={"#A18167"} size={15} />
            <Text style={[PermanentJStyles.infoText, { paddingLeft: 5 }]}>
              {location}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={PermanentJStyles.bookNowButton}
              onPress={() => {
                // Handle schedule now button press
                console.log("Schedule now button pressed");
              }}
            >
              <Text style={PermanentJStyles.bookNowButtonText}>Book Now</Text>
              <IconSymbol name="arrow.right" color={"#A18167"} size={10} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
