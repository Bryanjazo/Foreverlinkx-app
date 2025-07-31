import { StyleSheet } from "react-native";

export const PermanentJStyles = StyleSheet.create({
  apptCardContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },

  iconContainer: {
    position: "relative",
    marginRight: 20,
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#e6d9cf",
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: { maxWidth: "80%" },
  description: {
    fontSize: 12,
    color: "#6B5D4F",
  },
  title: {
    fontSize: 14,
  },
  infoText: {
    fontSize: 12,
    color: "#A18167",
  },
  hasPadding: {
    paddingBottom: 8,
  },
  bookNowButton: {
    top: 10,
    left: 150,
    flexDirection: "row",
    alignItems: "center",
  },
  bookNowButtonText: {
    fontSize: 12,
    color: "#A18167",
    fontWeight: 700,
    paddingRight: 3,
  },
  infoAndIconContainer: { flexDirection: "row", flexWrap: "wrap" },
});
