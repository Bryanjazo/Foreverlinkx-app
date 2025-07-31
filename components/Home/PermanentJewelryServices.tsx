import { JSX } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import BookingCard from "../BookingCard/BookingCard";

import { IconSymbol } from "../ui/IconSymbol";
const appointments = [
  {
    title: "Custom ring making class",
    description:
      "Create your own custom jewelry piece with our expert guidance.",
    time: "30 minutes",
    location: "123 Main St, City, State",
    id: "1",
  },
  {
    title: "Permanent Jewelry Services",
    description:
      "Get your custom permanent jewelry piece made with our expert guidance.",
    location: "123 Main St, City, State",
    time: "30 minutes",
    id: "2",
  },
  {
    title: "Permanent Jewelry group session",
    description:
      "visit our studio for a group session to create your own custom jewelry piece.",
    location: "123 Main St, City, State",
    time: "30 minutes",
    id: "3",
  },
];
export default function PermanentJewelryServices(): JSX.Element {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Custom Jewlery Services</Text>
        <TouchableOpacity onPress={() => console.log("Check availability")}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 10,
                color: "#A18167",
                fontWeight: "700",
                paddingRight: 2,
              }}
            >
              Check availability{" "}
            </Text>
            <IconSymbol name="arrow.right" color={"#A18167"} size={10} />
          </View>
        </TouchableOpacity>
      </View>
      {appointments.map((props, index) => (
        <BookingCard key={index} {...props} />
      ))}
    </View>
  );
}
