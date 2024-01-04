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
import { color, size } from "../constants/Theme";

type dataType = {
  selectedCategory: (selected: string) => void;
  homeCategory: bodyListType[];
  loading: boolean;
};

const HorizontalCategory = ({
  selectedCategory,
  homeCategory,
  loading,
}: dataType) => {
  const iteamsRef = useRef<Array<TouchableOpacity>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollref = useRef<ScrollView>(null);
  const [iteamPosition, setItemPosition] = useState<number[]>([]);

  const selectCategory = (index: number) => {
    const selectedElement = iteamsRef.current[index];

    setActiveIndex(index);
    selectedCategory(homeCategory[index].name);
    // selectedElement?.measure((xposition) => {
    //   console.log(xposition);
    //   scrollref.current?.scrollTo({ x: xposition, y: 0, animated: true });
    // });
    scrollref.current?.scrollTo({
      x: iteamPosition[index],
      y: 0,
      animated: true,
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
      {loading ? (
        <View
          style={{
            height: hp(12),
            width: wp(100),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: wp(2) }}>
            <ActivityIndicator size={size.xxLarge} color={color.secondary} />
            <Text style={{ fontSize: size.large, color: color.grey }}>
              Loading Categories...
            </Text>
          </View>
        </View>
      ) : (
        homeCategory.map((cat, index) => (
          //! hii ni loop tuna loop through data set yetu
          <TouchableOpacity
            onPress={() => selectCategory(index)}
            key={index}
            style={
              activeIndex == index ? styles.containerActive : styles.container
            }
            ref={(el) => iteamsRef.current[index] == el}
            onLayout={(event) => {
              const layout = event.nativeEvent.layout;
              const position = layout.x;
              iteamPosition[index] = position;
              setItemPosition(iteamPosition);
            }}
          >
            <Image
              source={cat.imgUrl}
              contentFit="cover"
              transition={1000}
              contentPosition="right center"
              style={styles.image}
            />
            <Text
              style={activeIndex == index ? styles.textActive : styles.text}
            >
              {cat.name}
            </Text>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

export default HorizontalCategory;
