import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color, defaultStyles, fontFamily, size } from "../../constants/Theme";
import BottomSheet from "../../components/BottomSheet";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const index = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: color.start }}>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <View
        style={{
          backgroundColor: "transparent",
          marginTop: wp(10),
          flexDirection: "column",
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />

        <View style={{ paddingTop: wp(3), paddingLeft: wp(3) }}>
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <Text
                style={{
                  color: color.secondary,
                  fontFamily: fontFamily.MontMedium,
                }}
              >
                Home
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={{ flex: 1 }}>
          <View>
            <Text
              style={{
                fontSize: size.large,
                marginHorizontal: wp(2),
                marginVertical: wp(3),
                color: color.gold,
                fontFamily: fontFamily.MontBold,
              }}
            >
              Add Excercise
            </Text>
            <TextInput
              style={defaultStyles.inputField}
              placeholder="Excercise Name"
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              style={defaultStyles.inputField}
              placeholder="Equipment Name"
              autoCorrect={false}
              autoCapitalize="words"
            />
            <View
              style={{
                width: wp(60),
                backgroundColor: color.end,
                borderRadius: wp(3),
                alignSelf: "center",
                marginBottom: wp(5),
              }}
            >
              <TouchableOpacity>
                <LinearGradient
                  colors={[color.primary, color.grey]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    flex: 1,
                    borderRadius: 5,
                    height: wp(35),
                    borderWidth: wp(1),
                    borderColor: color.gold,
                    borderStyle: "solid",
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Entypo name="image" size={54} color="black" />
                    <Text
                      style={{
                        color: color.secondary,
                        fontFamily: fontFamily.FiraBold,
                        fontSize: size.medium,
                        marginTop: wp(2),
                      }}
                    >
                      Upload gif image
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginEnd: wp(4),
              }}
            >
              <TextInput
                style={defaultStyles.inputField}
                placeholder="Target Muscle Name"
                autoCorrect={false}
                autoCapitalize="words"
              />
              <TouchableOpacity style={{ height: hp(6) }}>
                <LinearGradient
                  colors={[color.primary, color.grey]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    flex: 1,
                    borderRadius: 4,
                    width: wp(20),
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: wp(1),
                    borderColor: color.gold,
                    borderStyle: "solid",
                  }}
                >
                  <View>
                    <Text style={{ color: color.secondary }}>Add</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <TextInput
              style={defaultStyles.inputField}
              placeholder="Excercise Name"
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              style={defaultStyles.inputField}
              placeholder="Excercise Name"
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              style={defaultStyles.inputField}
              placeholder="Excercise Name"
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              style={defaultStyles.inputField}
              placeholder="Excercise Name"
              autoCorrect={false}
              autoCapitalize="words"
            />
            <BottomSheet />
          </View>
        </View>
        <View style={{}}></View>
      </View>
    </ScrollView>
  );
};

export default index;
