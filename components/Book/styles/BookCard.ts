import { StyleSheet } from "react-native";

export const bookCard = StyleSheet.create({
  bookCardContainer: { paddingTop: 20 },
  apptCardContainer: {
    flexDirection: "row",
    borderRadius: 15,
    padding: 20,
    height: 110,
    maxHeight: 110,
  },
  iconContainer: {
    marginRight: 10,
    width: 25,
    height: 25,
    borderRadius: 40,
    backgroundColor: "#ece6e0",
    justifyContent: "center",
    alignItems: "center",
  },
  timeAndPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  infoText: {
    color: "#A18167",
    fontSize: 12,
  },
  popularTag: {
    width: 60,
    height: 15,
    justifyContent: "center",
    backgroundColor: "#ece6e0",
    borderRadius: 20,
    marginLeft: 5,
  },
  hover: {
    borderWidth: 2,
    borderColor: "#ded4cb",
  },
});
