import { Link, Stack, useRouter } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { color, fontFamily, size } from "../../constants/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const profile = () => {
  const router = useRouter();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: color.start }}>
      <StatusBar
        style="light"
        //translucent
        backgroundColor={color.primary}
      />

      <View
        style={{
          backgroundColor: "transparent",
          marginTop: wp(6),
          flexDirection: "column",
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <View
          style={{
            paddingTop: hp(2),
            //marginHorizontal: wp(5),
            //height: hp(6),
            backgroundColor: color.primary,
            alignContent: "center",
          }}
        >
          <Text
            style={{
              color: color.secondary,
              fontSize: size.large,
              fontFamily: fontFamily.MontBold,
              marginHorizontal: wp(5),
            }}
          >
            Progress
          </Text>
          <Text
            style={{
              color: color.secondary,
              fontSize: size.small,
              fontFamily: fontFamily.MontMedium,
              marginHorizontal: wp(5),
              marginVertical: hp(1),
            }}
          >
            You have an outstanding muscle growth.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default profile;
