import { View, Text } from "react-native";
import { JSX } from "react";
import { bookingContainerStyles } from "./styles/BookingContainer";
import { IconSymbol } from "../ui/IconSymbol";
import { TouchableOpacity } from "react-native";
export default function BookingContainer(): JSX.Element {
  return (
    <View style={bookingContainerStyles.sectionContainer}>
      {/* Booking Container */}
      <View style={bookingContainerStyles.bookingContainer}>
        <View style={bookingContainerStyles.bookingCardContainer}>
          <View style={bookingContainerStyles.bookingCalendarContainer}>
            <IconSymbol name="calendar" color={"#a48566"} size={20} />
          </View>
          <View style={bookingContainerStyles.bookingTextContainer}>
            <Text style={bookingContainerStyles.bookingBookYourAppt}>
              Book Your Appointment Today
            </Text>
            <Text style={bookingContainerStyles.bookingInfoText}>
              Book your permanent jewelry appointment or ring making class
              today.
            </Text>
            <TouchableOpacity
              style={bookingContainerStyles.bookingScheduleButton}
              onPress={() => {
                // Handle schedule now button press
                console.log("Schedule now button pressed");
              }}
            >
              <View
                style={bookingContainerStyles.bookingScheduleButtonContainer}
              >
                <Text style={bookingContainerStyles.bookingScheduleButtonText}>
                  Schedule Now{" "}
                </Text>
                <Text>
                  <IconSymbol name="arrow.right" color={"white"} size={10} />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
