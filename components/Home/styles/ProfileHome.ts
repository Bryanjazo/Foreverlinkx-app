import { StyleSheet } from "react-native";

export const profileHomeStyles = StyleSheet.create({
  profileHomeContainer: {
    backgroundColor: "white",
    height: "100%",
    paddingLeft: 5,
    paddingRight: 5,
  },

  profileHomeTopContainer: {
    flex: 1,
    alignItems: "center",
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
});
