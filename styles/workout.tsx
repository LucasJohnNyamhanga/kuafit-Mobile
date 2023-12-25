import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color, fontFamily, size } from "../constants/Theme";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
  },
  cardHolder: {
    flexDirection: "column",
    marginBottom: wp(3),
  },
  image: {
    //flex: 1,
    //borderRadius: 10,
    width: wp(35),
    height: hp(15),
    borderRadius: wp(3),
  },

  moreDetail: {
    color: color.secondary,
    fontFamily: fontFamily.FiraBold,
    paddingLeft: size.small,
  },

  header: {
    color: color.secondary,
    fontFamily: fontFamily.FiraRegural,
    //textAlign: "center",
    paddingLeft: size.small,
    fontSize: size.large,
  },
  container: {
    //borderColor: color.gold,
    //borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    borderRadius: wp(3),
    padding: wp(3),
    backgroundColor: color.primary,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: wp(3),
    marginVertical: wp(3),
    flexDirection: "column",
  },
  textWorkout: {
    fontSize: size.large,
    color: color.secondary,
    marginBottom: wp(3),
    marginHorizontal: wp(1),
    fontFamily: fontFamily.MontMedium,
  },
  bottomDetails: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
    paddingHorizontal: wp(3),
    marginBottom: wp(1.5),
  },

  detailsContainer: {
    // borderColor: color.secondary,
    // borderWidth: 1,
    // borderStyle: "solid",
    flex: 1,
    position: "relative",
  },

  target: {
    color: color.secondary,
    fontFamily: fontFamily.FiraMedium,
  },
  level: {
    color: color.secondary,
    fontFamily: fontFamily.FiraMedium,
  },
  labelLevelandTarget: {
    color: color.gold,
  },
});
