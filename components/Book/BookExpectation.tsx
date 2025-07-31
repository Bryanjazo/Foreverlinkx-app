import { JSX } from "react";
import { View, Text } from "react-native";
import { bookingExpectation } from "./styles/BookExpectation";
import { IconSymbol } from "../ui/IconSymbol";
import { LinearGradient } from "expo-linear-gradient";

function BookExpectation(): JSX.Element {
  const data = [
    {
      id: "1",
      title: "Personalized design guidance to create your custom piece",
    },
    { id: "2", title: "Overview of materials, sizes, and chain options" },
    { id: "3", title: "Time to ask questions and explore inspiration ideas" },
    {
      id: "4",
      title: "Sizing and safety checks for permanent jewelry application",
    },
    {
      id: "5",
      title: "Hands-on preview of tools used in the ring-making process",
    },
  ];

  return (
    <LinearGradient
      colors={["#fcf9f5", "#faf7f5", "#faf7f5"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={bookingExpectation.expectationContainer}
    >
      <View style={bookingExpectation.expectHeadingCont}>
        <IconSymbol name="sparkle" size={15} color={"#a48566"} />
        <Text style={bookingExpectation.expectHeadingtext}>
          What to expect in Your Consultation
        </Text>
      </View>
      <View>
        <View style={{ marginTop: 15, maxWidth: "99%" }}>
          {data.map((item, key) => (
            <View style={bookingExpectation.listContainer} key={key}>
              <View style={bookingExpectation.circle} />
              <Text style={bookingExpectation.flatListText}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}

export default BookExpectation;
