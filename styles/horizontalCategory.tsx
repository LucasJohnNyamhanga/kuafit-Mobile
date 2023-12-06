import { Dimensions, StyleSheet } from "react-native";
import { color, fontFamily, size } from "../constants/Theme";
export const styles = StyleSheet.create({
  container: {
    borderColor: color.secondary,
    borderWidth: 2,
    marginTop: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  containerActive: {
    borderColor: color.gold,
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: color.gold,
  },
  text: {
    color: color.secondary,
    fontFamily: fontFamily.MontMedium,
  },

  textActive: {
    color: color.black,
    fontFamily: fontFamily.MontMedium,
  },
  scroll: {
    alignItems: "center",
    gap: 10,
  },
});
