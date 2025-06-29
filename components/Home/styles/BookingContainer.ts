import { StyleSheet } from "react-native";

export const bookingContainerStyles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  // Adjusted to fit below the profile section
  bookingContainer: {
    top: -30,
    flex: 1,
    width: "100%",
    maxHeight: "38%", // Adjusted to fit below the profile section
  },
  bookingCardContainer: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "#f5f1ed",
    borderRadius: 10,
    shadowColor: "#000",
  },
  bookingHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  bookingCalendarContainer: {
    marginTop: 20,
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#e6d9cf",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  bookingBookYourAppt: {
    fontSize: 14,
    color: "black",
    marginBottom: 15,
  },
  bookingInfoText: {
    fontSize: 12,
    color: "#6B5D4F",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  bookingScheduleButton: {
    backgroundColor: "#a48566",
    padding: 8,
    borderRadius: 20,
  },
  bookingScheduleButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  bookingScheduleButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookingTextContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
