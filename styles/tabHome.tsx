import { StyleSheet } from "react-native";
import { color, fontFamily, size } from "../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  welcomeContent: {
    flexDirection: "column",
    marginVertical: 10,
  },
  welcomeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },

  welcomeHeaderContainer: {
    flexDirection: "row",
    gap: 10,
  },

  welcomeText: {},
  text: {
    color: color.secondary,
    fontFamily: fontFamily.MontBold,
    fontSize: size.small,
  },
});
