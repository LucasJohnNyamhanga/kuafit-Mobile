import { Link, Stack, useRouter } from "expo-router";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
        <View style={{ backgroundColor: color.primary }}>
          <View
            style={{
              marginVertical: hp(2),
              alignContent: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: wp(5),
            }}
          >
            <Text
              style={{
                color: color.secondary,
                fontSize: size.large,
                fontFamily: fontFamily.MontBold,
              }}
            >
              Profile
            </Text>
            <Link href={"/Admin/"} asChild>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="police-badge-outline"
                  size={size.xLarge}
                  color={color.secondary}
                />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
        <View style={{ marginTop: hp(5), marginHorizontal: wp(5) }}></View>
      </View>
    </ScrollView>
  );
};

export default profile;
