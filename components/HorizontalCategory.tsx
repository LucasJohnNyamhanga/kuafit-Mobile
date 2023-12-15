import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "../styles/horizontalCategory";
import * as Haptics from "expo-haptics";

type dataType = {
  selectedCategory: (selected: string) => void;
  homeCategory: string[];
};

const HorizontalCategory = ({ selectedCategory, homeCategory }: dataType) => {
  const iteamsRef = useRef<Array<TouchableOpacity>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollref = useRef<ScrollView>(null);

  const selectCategory = (index: number) => {
    const selectedElement = iteamsRef.current[index];

    setActiveIndex(index);
    selectedCategory(homeCategory[index]);
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
          <Text style={activeIndex == index ? styles.textActive : styles.text}>
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HorizontalCategory;
