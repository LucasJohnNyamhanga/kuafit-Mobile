import { StyleSheet } from "react-native";
import { color, fontFamily, size } from "../constants/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    marginTop: wp(4),
    padding: wp(1),
    paddingHorizontal: wp(3),
    width: wp(21),
    height: wp(21),
    justifyContent: "center",
    alignItems: "center",
    borderColor: "transparent",
    borderWidth: wp(0.5),
    borderStyle: "solid",
    borderRadius: wp(2),
    paddingVertical: wp(1),
  },
  containerActive: {
    marginTop: wp(2),
    padding: wp(1),
    paddingHorizontal: wp(3),
    width: wp(21),
    height: wp(21),
    justifyContent: "center",
    alignItems: "center",
    borderColor: color.gold,
    borderWidth: wp(0.5),
    borderStyle: "solid",
    borderRadius: wp(2),
    paddingVertical: wp(1),
  },
  text: {
    color: color.grey,
    fontFamily: fontFamily.MontMedium,
    textAlign: "center",
    fontSize: wp(3.2),
  },

  textActive: {
    color: color.gold,
    fontFamily: fontFamily.MontMedium,
    textAlign: "center",
    fontSize: wp(3.2),
  },
  scroll: {
    alignItems: "center",
    gap: wp(0.5),
  },
  image: {
    width: wp(10),
    height: wp(10),
    borderRadius: 10,
  },
});
