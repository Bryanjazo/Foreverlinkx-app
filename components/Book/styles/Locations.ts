import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  locationContainer: {
    paddingTop: 20,
  },
  locationCard: {
    maxWidth: "100%",
    flexDirection: "row",
    padding: 20,
    borderBottomColor: "#eee",
    borderRadius: 10,
  },
  locationIcon: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#ece6e0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  locationText: {
    maxWidth: "85%",
  },
  locationTitle: {
    fontSize: 14,
    marginBottom: 5,
    color: "#2C2520",
  },
  locationDescription: {
    fontSize: 12,
    color: "#6B5D4F",
    marginBottom: 12,
  },
  locationAddress: {
    fontSize: 12,
    color: "#6B5D4F",
    fontWeight: "600",
    marginBottom: 10,
    width: "95%",
  },
  locationEmailAddress: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationEmailAddressText: {
    fontSize: 12,
    color: "#6B5D4F",
    marginLeft: 5,
    fontWeight: "600",
  },
  locationAddressContainer: {
    maxWidth: "75%",
  },
  bookButton: {
    height: 35,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A18167",
    borderRadius: 10,
  },
  bookNowText: {
    color: "white",
    fontSize: 12,
    fontWeight: 700,
  },
});

export default styles;
