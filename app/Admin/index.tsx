import { Link, Stack, useRouter } from "expo-router";
import { Button, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { color, fontFamily, size } from "../../constants/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
const index = () => {
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
            backgroundColor: color.primary,
            paddingHorizontal: wp(5),
            paddingVertical: hp(2),
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: wp(1),
              }}
            >
              <Ionicons
                name="arrow-back-circle"
                size={size.xxLarge}
                color={color.secondary}
              />
              <Text
                style={{
                  color: color.secondary,
                  fontFamily: fontFamily.MontMedium,
                }}
              >
                Back
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingTop: hp(1),
              backgroundColor: color.primary,
              alignContent: "center",
            }}
          >
            <Text
              style={{
                color: color.secondary,
                fontSize: size.large,
                fontFamily: fontFamily.MontBold,
              }}
            >
              Admin Pannel
            </Text>
          </View>
        </View>
        <View style={{ marginTop: hp(2.5), marginHorizontal: wp(8) }}>
          <TouchableOpacity
            onPress={() => {
              router.push("/Admin/addBodyTarget");
            }}
          >
            <Text
              style={{
                color: color.secondary,
                fontSize: size.medium,
                fontFamily: fontFamily.MontMedium,
              }}
            >
              {"Add Body Target"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: hp(2.5), marginHorizontal: wp(8) }}>
          <TouchableOpacity
            onPress={() => {
              router.push("/Admin/addExcercise");
            }}
          >
            <Text
              style={{
                color: color.secondary,
                fontSize: size.medium,
                fontFamily: fontFamily.MontMedium,
              }}
            >
              {"Add Excercise"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;
