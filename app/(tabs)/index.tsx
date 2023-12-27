import { ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { color, fontFamily, size } from "../../constants/Theme";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import HomeHeader from "../../components/HomeHeader";
import { useEffect, useState } from "react";

import { bodyExcercesType, bodyListType, imageType } from "../Types/types";
import { getBodyPart, getBodyPartExcercise } from "../Engine/request";
import { ImageProps } from "react-native";
import { Workout } from "../../components/Workout";

const mgongo = require("../../assets/images/BACK.png");
const kifua = require("../../assets/images/kifua.png");
const mikonoJuu = require("../../assets/images/mikonojuu.png");
const mikonoChini = require("../../assets/images/mikonochini.png");
const mikonoNyuma = require("../../assets/images/TRICEPS.png");
const mabega = require("../../assets/images/mabega.png");
const tumbo = require("../../assets/images/tumbo.png");
const miguuJuu = require("../../assets/images/mapajaMbele.png");
const miguuChini = require("../../assets/images/miguuChini.png");
const kiuno = require("../../assets/images/makalio.png");
const shingo = require("../../assets/images/shingo.png");

const index = () => {
  const [bodyList, setBodyList] = useState<bodyListType[]>([]);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<ImageProps>(mgongo);
  const [bodyExcerciseList, setBodyExcerciseList] = useState<
    bodyExcercesType[]
  >([]);

  const catList = [
    { name: "Shingo", img: shingo },
    { name: "Kifua", img: kifua },
    { name: "Mikono Juu", img: mikonoJuu },
    { name: "Mikono Chini", img: mikonoChini },
    { name: "Mikono Nyuma", img: mikonoNyuma },
    { name: "Miguu Juu", img: miguuJuu },
    { name: "Miguu Chini", img: miguuChini },
    { name: "Mabega", img: mabega },
    { name: "Kiuno", img: kiuno },
    { name: "Tumbo", img: tumbo },
  ];

  const selectedCategory = (selected: string) => {
    getDataBodyExcercise(selected);
    setCategory(selected);
  };

  const getDataBodyPart = async () => {
    const data = await getBodyPart();
    setBodyList(data);
  };

  const getDataBodyExcercise = async (bodyPart: string) => {
    const data = await getBodyPartExcercise(bodyPart);
    setBodyExcerciseList(data);
  };

  useEffect(() => {
    getDataBodyPart();
    getDataBodyExcercise("back");
    setCategory("Shingo");
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: color.start }}>
      <LinearGradient
        colors={[color.middle, color.end]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <View>
          <StatusBar style="light" translucent backgroundColor="transparent" />

          <View style={{ backgroundColor: "transparent" }}>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
            />

            <HomeHeader
              categorySelect={selectedCategory}
              homeCategory={catList}
            />
            {/* <CategoryImage category={category} name={image} /> */}
            <Workout bodyExcerciseList={bodyExcerciseList} />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;
