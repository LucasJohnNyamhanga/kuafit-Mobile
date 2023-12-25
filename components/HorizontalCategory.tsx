import { View, Text, ScrollView, TouchableOpacity } from "react-native";
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

type dataType = {
  selectedCategory: (selected: string) => void;
  homeCategory: bodyListReadOnlyType;
};

const HorizontalCategory = ({ selectedCategory, homeCategory }: dataType) => {
  const iteamsRef = useRef<Array<TouchableOpacity>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollref = useRef<ScrollView>(null);

  const selectCategory = (index: number) => {
    const selectedElement = iteamsRef.current[index];

    setActiveIndex(index);
    selectedCategory(homeCategory[index].name);
    selectedElement?.measure((xposition) => {
      console.log(xposition);
      scrollref.current?.scrollTo({ x: xposition, y: 0, animated: true });
    });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <ScrollView
      ref={scrollref}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
      style={{ marginBottom: wp(2) }}
    >
      {homeCategory.map((cat, index) => (
        //! hii ni loop tuna loop through data set yetu
        <TouchableOpacity
          onPress={() => selectCategory(index)}
          key={index}
          style={
            activeIndex == index ? styles.containerActive : styles.container
          }
          ref={(el) => iteamsRef.current[index] == el}
        >
          <Image
            source={cat.img}
            contentFit="cover"
            transition={1000}
            contentPosition="right center"
            style={styles.image}
          />
          <Text style={activeIndex == index ? styles.textActive : styles.text}>
            {cat.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HorizontalCategory;
