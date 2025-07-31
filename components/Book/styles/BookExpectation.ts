import { StyleSheet } from "react-native";

export const bookingExpectation = StyleSheet.create({
  expectationContainer: {
    backgroundColor: "#faf9f7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  expectHeadingCont: {
    flexDirection: "row",
  },
  expectHeadingtext: {
    fontSize: 14,
    marginLeft: 10,
    color: "#2C2520",
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 5, // makes it a circle
    backgroundColor: "#A18167", // brown-ish color
    marginRight: 15,
  },
  listContainer: {
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  flatListText: {
    fontSize: 10,
  },
});
