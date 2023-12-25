import { StyleSheet } from "react-native";
import { color, fontFamily, size } from "../constants/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    margin: wp(3),
  },
  welcomeContent: {
    flexDirection: "column",
    marginVertical: wp(1),
  },
  welcomeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp(1),
  },

  welcomeHeaderContainer: {
    flexDirection: "row",
    gap: wp(1),
    marginVertical: wp(1),
  },

  welcomeText: {},
  text: {
    color: color.secondary,
    fontFamily: fontFamily.MontBold,
    fontSize: size.small,
  },

  searchContainer: {},

  search: {
    backgroundColor: color.grey,
    height: wp(10),
    borderRadius: wp(5),
    marginHorizontal: wp(1),
    marginBottom: wp(2),
    marginTop: wp(2),
    borderStyle: "solid",
    borderColor: color.gold,
    borderWidth: wp(0.5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },

  icon: {
    justifyContent: "center",
    alignContent: "center",
    marginTop: wp(1),
    marginRight: wp(4),
  },

  searchText: {
    alignSelf: "center",
    color: color.secondary,
    fontSize: size.medium,
    fontFamily: fontFamily.MontMedium,
    marginBottom: wp(1),
    marginHorizontal: wp(5),
  },

  catText: {
    color: color.secondary,
    fontSize: size.large,
    fontFamily: fontFamily.MontMedium,
    marginTop: wp(2),
    marginHorizontal: wp(2),
  },
});
