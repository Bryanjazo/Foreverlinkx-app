import { JSX } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles/Locations";
import { IconSymbol } from "../ui/IconSymbol";
import { LinearGradient } from "expo-linear-gradient";

function Locations(): JSX.Element {
  return (
    <View style={styles.locationContainer}>
      <LinearGradient
        style={styles.locationCard}
        colors={["#e7d6c4", "#f5f2ed"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.locationIcon}>
          <IconSymbol name="map" size={16} color={"#a48566"} />
        </View>
        <View style={styles.locationText}>
          <Text style={styles.locationTitle}>Foreverlinkx Locations</Text>
          <Text style={styles.locationDescription}>
            You can walk-in to any of our two locations located at our address
            below.
          </Text>
          <View style={styles.locationAddressContainer}>
            <Text style={styles.locationAddress}>
              282 N Second ave, Upland, CA 91786
            </Text>
            <Text style={styles.locationAddress}>
              455 E ocean blvd, Unit 21, Long Beach, CA 90802
            </Text>
          </View>
          <View style={styles.locationEmailAddress}>
            <IconSymbol name="envelope" size={14} color={"#000"} />
            <Text style={styles.locationEmailAddressText}>
              support@foreverlinkx.com
            </Text>
          </View>
          <View style={[styles.locationEmailAddress, { marginTop: 10 }]}>
            <IconSymbol name="phone" size={14} color={"#000"} />
            <Text style={styles.locationEmailAddressText}>(909)-709-1148</Text>
          </View>
        </View>
      </LinearGradient>

      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => console.log("book now pressed")}
      >
        <Text style={styles.bookNowText}>Book your appointment today</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 11,
            textAlign: "center",
            fontWeight: "300",
            lineHeight: 20,
          }}
        >
          All appoointment deposits are non refundable. Your deposit will go
          towards your final purchase.
        </Text>
      </View>
    </View>
  );
}

export default Locations;
