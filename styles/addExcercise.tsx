import { StyleSheet } from "react-native";
import { color, fontFamily, size } from "../constants/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "transparent",

    flexDirection: "column",
    flex: 1,
  },
  scrollView: { flex: 1, backgroundColor: color.start, height: hp(100) },
  container: {
    paddingLeft: wp(3),
    flex: 1,
    paddingTop: wp(8),
  },
  motherContainer: { flex: 1 },
  back: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: hp(0.5),
  },
  backHome: {
    color: color.secondary,
    fontFamily: fontFamily.MontMedium,
    fontSize: size.medium,
    marginLeft: wp(2),
    textAlign: "center",
    paddingTop: hp(0.5),
  },
  header: {
    fontSize: size.large,
    marginHorizontal: wp(2),
    marginVertical: wp(3),
    color: color.gold,
    fontFamily: fontFamily.MontBold,
  },
  inputText: {
    paddingHorizontal: wp(4),
  },
  containerGradient: {
    width: wp(60),
    backgroundColor: color.end,
    borderRadius: wp(3),
    alignSelf: "center",
    marginBottom: wp(5),
  },
  gradient: {
    flex: 1,
    borderRadius: 5,
    height: hp(20),
    width: wp(60),
    borderWidth: wp(1),
    borderColor: color.gold,
    borderStyle: "solid",
  },
  uploadContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  upload: {
    color: color.secondary,
    fontFamily: fontFamily.FiraBold,
    fontSize: size.medium,
    marginTop: wp(2),
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: wp(4),
  },
  touchableContainer: { height: hp(5.7) },
  touchableGradient: {
    flex: 1,
    borderRadius: 4,
    width: wp(20),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: wp(1),
    borderColor: color.gold,
    borderStyle: "solid",
  },
  add: {
    color: color.secondary,
    fontFamily: fontFamily.MontMedium,
  },
  select: {
    borderColor: color.gold,
    borderWidth: wp(1),
    borderStyle: "solid",
    marginHorizontal: wp(4),
    borderRadius: wp(2),
    marginBottom: hp(2),
  },
  selectText: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    fontFamily: fontFamily.MontRegural,
    fontSize: size.large,
    color: color.secondary,
  },
  submitText: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    fontFamily: fontFamily.MontBold,
    fontSize: size.large,
    color: color.secondary,
    textAlign: "center",
  },
  image: { height: hp(20), width: wp(60) },
  spaceBottom: {
    marginBottom: hp(2),
  },
  spaceTop: {
    marginTop: hp(2),
  },
  tipbox: {
    marginHorizontal: wp(5),
    marginVertical: hp(0.1),
    flexDirection: "row",
    alignItems: "center",
  },
  tipContainer: {
    height: wp(2),
    width: wp(2),
    backgroundColor: color.gold,
    borderRadius: wp(2),
    marginRight: wp(2),
  },
  topTip: { marginTop: hp(1), marginBottom: hp(0.5) },
  textTip: {
    color: color.secondary,
    fontFamily: fontFamily.FiraRegural,
    fontSize: size.medium,
  },
});
