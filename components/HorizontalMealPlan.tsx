import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "../styles/horizontalCategory";
import * as Haptics from "expo-haptics";
import { bodyListType, bodyListReadOnlyType } from "../app/Types/types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ImageDisplay } from "./ImageDisplay";
import { Image } from "expo-image";
import { color, fontFamily, size } from "../constants/Theme";
import { LinearGradient } from "expo-linear-gradient";

const img = require("../assets/images/splash.png");
const sugar = require("../assets/images/sugar.jpg");
const food = require("../assets/images/food.jpg");
const fitman = require("../assets/images/fitman.jpg");
const fit = require("../assets/images/fit.jpg");

type dataType = {
  selectedCategory: (selected: string) => void;
  homeCategory: bodyListType[];
  loading: boolean;
};

const HorizontalCategory = () => {
  const iteamsRef = useRef<Array<TouchableOpacity>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollref = useRef<ScrollView>(null);
  const [iteamPosition, setItemPosition] = useState<number[]>([]);

  // const selectCategory = (index: number) => {
  // const selectedElement = iteamsRef.current[index];

  // setActiveIndex(index);
  // selectedCategory(homeCategory[index].name);
  // selectedElement?.measure((xposition) => {
  //   console.log(xposition);
  //   scrollref.current?.scrollTo({ x: xposition, y: 0, animated: true });
  // });
  //   scrollref.current?.scrollTo({
  //     x: iteamPosition[index],
  //     y: 0,
  //     animated: true,
  //   });
  //   Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  // };

  return (
    <ScrollView
      ref={scrollref}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
      style={{ marginBottom: wp(2) }}
      snapToInterval={wp(85)}
      snapToAlignment="center"
      decelerationRate={0}
    >
      <TouchableOpacity
        // onPress={() => selectCategory(index)}
        // key={index}
        style={{
          width: wp(80),
          height: hp(20),
          marginVertical: hp(2),
          marginRight: wp(3),
        }}
        // ref={(el) => iteamsRef.current[index] == el}
        // onLayout={(event) => {
        //   const layout = event.nativeEvent.layout;
        //   const position = layout.x;
        //   iteamPosition[index] = position;
        //   setItemPosition(iteamPosition);
        // }}
      >
        <LinearGradient
          colors={[color.backgroundMirror, color.mainColor]}
          start={{ x: 0.4, y: 0.2 }}
          end={{ x: 0.9, y: 0.9 }}
          style={{ flex: 1, borderRadius: wp(5) }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              //backgroundColor: color.backgroundMirror,
              borderRadius: wp(4),
            }}
          >
            <View
              style={{
                flex: 1.5,
                position: "relative",
                //justifyContent: "center",
              }}
            >
              <Text
                style={[
                  {
                    fontFamily: fontFamily.MontBold,
                    fontSize: size.large,
                    color: color.secondary,
                    paddingHorizontal: wp(5),
                    paddingVertical: wp(3),
                  },
                ]}
              >
                21 Days Sugar Free Diet Plan
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: wp(3),
                  position: "absolute",
                  bottom: wp(3),
                  width: wp(73),
                  zIndex: 999,
                }}
              >
                <Text
                  style={[
                    {
                      fontFamily: fontFamily.MontMedium,
                      backgroundColor: color.primary,
                      borderRadius: wp(2),
                      paddingHorizontal: wp(3),
                      paddingVertical: wp(1),
                      color: color.secondary,
                    },
                  ]}
                >
                  Tsh 15,000
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: fontFamily.MontMedium,
                      backgroundColor: color.primary,
                      borderRadius: wp(2),
                      paddingHorizontal: wp(3),
                      paddingVertical: wp(1),
                      color: color.secondary,
                    },
                  ]}
                >
                  Weight Loss
                </Text>
              </View>
            </View>
            <Image
              source={sugar}
              contentFit="cover"
              transition={1000}
              contentPosition="center"
              style={{
                flex: 1,
                borderTopLeftRadius: wp(18),
                borderBottomLeftRadius: wp(18),
              }}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => selectCategory(index)}
        // key={index}
        style={{
          width: wp(80),
          height: hp(20),
          marginVertical: hp(2),
          marginRight: wp(3),
        }}
        // ref={(el) => iteamsRef.current[index] == el}
        // onLayout={(event) => {
        //   const layout = event.nativeEvent.layout;
        //   const position = layout.x;
        //   iteamPosition[index] = position;
        //   setItemPosition(iteamPosition);
        // }}
      >
        <LinearGradient
          colors={[color.backgroundMirror, color.mainColor]}
          start={{ x: 0.4, y: 0.2 }}
          end={{ x: 0.9, y: 0.9 }}
          style={{ flex: 1, borderRadius: wp(5) }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              //backgroundColor: color.backgroundMirror,
              borderRadius: wp(4),
            }}
          >
            <View
              style={{
                flex: 1.5,
                position: "relative",
                //justifyContent: "center",
              }}
            >
              <Text
                style={[
                  {
                    fontFamily: fontFamily.MontBold,
                    fontSize: size.large,
                    color: color.secondary,
                    paddingHorizontal: wp(5),
                    paddingVertical: wp(3),
                  },
                ]}
              >
                4 Weeks Complete Weight Loss Challenge
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: wp(3),
                  position: "absolute",
                  bottom: wp(3),
                  width: wp(73),
                  zIndex: 999,
                }}
              >
                <Text
                  style={[
                    {
                      fontFamily: fontFamily.MontMedium,
                      backgroundColor: color.primary,
                      borderRadius: wp(2),
                      paddingHorizontal: wp(3),
                      paddingVertical: wp(1),
                      color: color.secondary,
                    },
                  ]}
                >
                  Tsh 25,000
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: fontFamily.MontMedium,
                      backgroundColor: color.primary,
                      borderRadius: wp(2),
                      paddingHorizontal: wp(3),
                      paddingVertical: wp(1),
                      color: color.secondary,
                    },
                  ]}
                >
                  Weight Loss
                </Text>
              </View>
            </View>
            <Image
              source={fit}
              contentFit="cover"
              transition={1000}
              contentPosition="center"
              style={{
                flex: 1,
                borderTopLeftRadius: wp(18),
                borderBottomLeftRadius: wp(18),
              }}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => selectCategory(index)}
        // key={index}
        style={{
          width: wp(80),
          height: hp(20),
          marginVertical: hp(2),
          marginRight: wp(3),
        }}
        // ref={(el) => iteamsRef.current[index] == el}
        // onLayout={(event) => {
        //   const layout = event.nativeEvent.layout;
        //   const position = layout.x;
        //   iteamPosition[index] = position;
        //   setItemPosition(iteamPosition);
        // }}
      >
        <LinearGradient
          colors={[color.backgroundMirror, color.mainColor]}
          start={{ x: 0.4, y: 0.2 }}
          end={{ x: 0.9, y: 0.9 }}
          style={{ flex: 1, borderRadius: wp(5) }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              //backgroundColor: color.backgroundMirror,
              borderRadius: wp(4),
            }}
          >
            <View
              style={{
                flex: 1.5,
                position: "relative",
                //justifyContent: "center",
              }}
            >
              <Text
                style={[
                  {
                    fontFamily: fontFamily.MontBold,
                    fontSize: size.large,
                    color: color.secondary,
                    paddingHorizontal: wp(5),
                    paddingVertical: wp(3),
                  },
                ]}
              >
                30 Days Carbs Free To Slimmer You
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: wp(3),
                  position: "absolute",
                  bottom: wp(3),
                  width: wp(73),
                  zIndex: 999,
                }}
              >
                <Text
                  style={[
                    {
                      fontFamily: fontFamily.MontMedium,
                      backgroundColor: color.primary,
                      borderRadius: wp(2),
                      paddingHorizontal: wp(3),
                      paddingVertical: wp(1),
                      color: color.secondary,
                    },
                  ]}
                >
                  Tsh 23,000
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: fontFamily.MontMedium,
                      backgroundColor: color.primary,
                      borderRadius: wp(2),
                      paddingHorizontal: wp(3),
                      paddingVertical: wp(1),
                      color: color.secondary,
                    },
                  ]}
                >
                  Weight Loss
                </Text>
              </View>
            </View>
            <Image
              source={food}
              contentFit="cover"
              transition={1000}
              contentPosition="center"
              style={{
                flex: 1,
                borderTopLeftRadius: wp(18),
                borderBottomLeftRadius: wp(18),
              }}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => selectCategory(index)}
        // key={index}
        style={{
          width: wp(80),
          height: hp(20),
          marginVertical: hp(2),
          marginRight: wp(3),
        }}
        // ref={(el) => iteamsRef.current[index] == el}
        // onLayout={(event) => {
        //   const layout = event.nativeEvent.layout;
        //   const position = layout.x;
        //   iteamPosition[index] = position;
        //   setItemPosition(iteamPosition);
        // }}
      >
        <LinearGradient
          colors={[color.backgroundMirror, color.mainColor]}
          start={{ x: 0.4, y: 0.2 }}
          end={{ x: 0.9, y: 0.9 }}
          style={{ flex: 1, borderRadius: wp(5) }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              //backgroundColor: color.backgroundMirror,
              borderRadius: wp(4),
            }}
          >
            <View
              style={{
                flex: 1.5,
                position: "relative",
                //justifyContent: "center",
              }}
            >
              <Text
                style={[
                  {
                    fontFamily: fontFamily.MontBold,
                    fontSize: size.large,
                    color: color.secondary,
                    paddingHorizontal: wp(5),
                    paddingVertical: wp(3),
                  },
                ]}
              >
                3 Weeks Transformation For Muscle Gain.
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: wp(3),
                  position: "absolute",
                  bottom: wp(3),
                  width: wp(73),
                  zIndex: 999,
                }}
              >
                <Text
                  style={[
                    {
                      fontFamily: fontFamily.MontMedium,
                      backgroundColor: color.primary,
                      borderRadius: wp(2),
                      paddingHorizontal: wp(3),
                      paddingVertical: wp(1),
                      color: color.secondary,
                    },
                  ]}
                >
                  Tsh 50,000
                </Text>
                <Text
                  style={[
                    {
                      fontFamily: fontFamily.MontMedium,
                      backgroundColor: color.primary,
                      borderRadius: wp(2),
                      paddingHorizontal: wp(3),
                      paddingVertical: wp(1),
                      color: color.secondary,
                    },
                  ]}
                >
                  Muscle Gain
                </Text>
              </View>
            </View>
            <Image
              source={fitman}
              contentFit="cover"
              transition={1000}
              contentPosition="center"
              style={{
                flex: 1,
                borderTopLeftRadius: wp(18),
                borderBottomLeftRadius: wp(18),
              }}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HorizontalCategory;
