import { StyleSheet } from "react-native";

export const profileHomeStyles = StyleSheet.create({
  profileHomeContainer: {
    top: -5,
    backgroundColor: "white",
    height: "100%",
  },

  profileHomeTopContainer: {
    flex: 1,
    justifyContent: "center",
    maxHeight: "25%",
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
    height: 190, // fade height
  },
  welomeContainer: {
    top: 0,
    left: 20,
    right: 0,
  },
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
    top: 80,
    right: 25,
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
