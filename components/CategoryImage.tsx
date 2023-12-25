import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text } from "react-native";
import { color, fontFamily, size } from "../constants/Theme";
import { ImageDisplay } from "./ImageDisplay";
import { bodyExcercesType, imageType } from "../app/Types/types";

interface dataType extends imageType {
  category: string;
}

export const CategoryImage = ({ name, category }: dataType) => {
  return (
    <View
      style={{
        margin: 0,
        height: 150,
        position: "relative",

        marginHorizontal: 10,
      }}
    >
      <ImageDisplay name={name} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.7)"]}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          flex: 1,
          height: 150,
          width: "100%",
          justifyContent: "flex-end",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: color.secondary,
            fontFamily: fontFamily.MontBold,
            fontSize: size.xLarge,
            marginHorizontal: 15,
            marginVertical: 10,
          }}
        >
          {category}
        </Text>
      </LinearGradient>
    </View>
  );
};
