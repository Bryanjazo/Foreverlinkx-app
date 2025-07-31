import { StyleSheet } from "react-native";

export const profileHomeStyles = StyleSheet.create({
  profileHomeContainer: {
    backgroundColor: "white",
    height: "100%",
  },
  homeInfoContainer: {
    paddingHorizontal: 40,
  },

  profileHomeTopContainer: {
    justifyContent: "center",
    height: 120, // Adjusted to fit the profile section
    maxHeight: "100%",
  },
  profileText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  linearGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120, // fade height
  },
  welcomeContainer: { paddingHorizontal: 40, marginTop: 40 },
  welcomeHeader: {
    fontSize: 16,
    color: "black",
    fontFamily: "SfBold", // Ensure this font is loaded
    fontWeight: "bold",
  },
  welcomeText: {
    marginTop: 5,
    color: "#6B5D4F",
    fontFamily: "SfRegular", // Ensure this font is loaded
    fontSize: 12,
  },
  profileIconContainer: {
    position: "absolute",
    right: 40,
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#8B7355",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIconText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "SfBold", // Ensure this font is loaded
  },
});
