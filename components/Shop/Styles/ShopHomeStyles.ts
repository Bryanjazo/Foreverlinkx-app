import { StyleSheet } from "react-native";

export const ShopHomeStyles = StyleSheet.create({
  shopInput: {
    top: 0, // Adjust this value to position the input correctly
    height: 40,
    backgroundColor: "#F5F5F5", // Adjust the background color as needed
    borderRadius: 18,
    borderWidth: 0, // This removes the border
    color: "black", // Text color
    paddingHorizontal: 10,
  },
  shopHomeContainer: {
    paddingVertical: 60,
    position: "relative",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
  },
  linearGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200, // fade height
  },
});
