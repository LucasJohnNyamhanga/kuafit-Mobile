import { StyleSheet } from "react-native";
import { color, fontFamily, size } from "../constants/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignContent: "center",
    marginVertical: hp(1),
    marginHorizontal: hp(2),
  },
  innerContainer: { marginVertical: hp(0.5), marginHorizontal: wp(5) },
  checkBox: {
    fontFamily: fontFamily.FiraMedium,
    textDecorationLine: "none",
    fontSize: size.medium,
    color: color.black,
    marginLeft: wp(-1),
  },
  title: {
    fontFamily: fontFamily.MontBold,
    fontSize: size.large,
    marginBottom: hp(1),
    marginHorizontal: wp(3.5),
  },
});
