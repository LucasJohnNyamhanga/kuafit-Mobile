import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "../styles/horizontalCategory";
import * as Haptics from "expo-haptics";

type dataType = {
  selectedCategory: (selected: string) => void;
};

const HorizontalCategory = ({ selectedCategory }: dataType) => {
  const gymCat = [
    {
      name: "Weight training",
    },
    {
      name: "Nutrition",
    },
    {
      name: "Circuit",
    },
    {
      name: "Core",
    },
    {
      name: "Full body",
    },
    {
      name: "Lower body",
    },
    {
      name: "Upper body",
    },
    {
      name: "Interval training",
    },
    {
      name: "Cardio",
    },
    {
      name: "Hooping",
    },
    {
      name: "HIIT",
    },
    {
      name: "Crossfit",
    },
    {
      name: "Personal training",
    },
  ];

  const iteamsRef = useRef<Array<TouchableOpacity>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollref = useRef<ScrollView>(null);

  const selectCategory = (index: number) => {
    const selectedElement = iteamsRef.current[index];

    setActiveIndex(index);
    selectedCategory(gymCat[index].name);
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
      {gymCat.map((cat, index) => (
        <TouchableOpacity
          onPress={() => selectCategory(index)}
          key={index}
          style={
            activeIndex == index ? styles.containerActive : styles.container
          }
          ref={(el) => iteamsRef.current[index] == el}
        >
          <Text style={activeIndex == index ? styles.textActive : styles.text}>
            {cat.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HorizontalCategory;
