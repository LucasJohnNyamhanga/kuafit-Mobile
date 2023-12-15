import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { color, fontFamily, size } from "../../constants/Theme";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import HomeHeader from "../../components/HomeHeader";
import { useEffect, useState } from "react";

import { bodyExcercesType, bodyListType, imageType } from "../Types/types";
import { getBodyPart, getBodyPartExcercise } from "../Engine/request";
import { ImageProps } from "react-native";
import { ImageDisplay } from "../../components/ImageDisplay";

const back = require("../../assets/images/back.jpg");
const cardio = require("../../assets/images/cardio.jpg");
const chest = require("../../assets/images/chest.jpg");
const lowerlegs = require("../../assets/images/lowerlegs.jpg");
const neck = require("../../assets/images/neck.jpg");
const shoulders = require("../../assets/images/shoulders.jpg");
const upperarms = require("../../assets/images/upperarms.jpg");
const upperlegs = require("../../assets/images/upperlegs.jpg");
const waist = require("../../assets/images/waist.jpg");
const def = require("../../assets/images/default.jpg");

const index = () => {
  const [bodyList, setBodyList] = useState<bodyListType>([]);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<ImageProps>(back);
  const [bodyExcerciseList, setBodyExcerciseList] = useState<bodyExcercesType>(
    []
  );

  const imageChanger = (element: string) => {
    switch (element) {
      case "back":
        setImage(back);
        break;
      case "cardio":
        setImage(cardio);
        break;
      case "chest":
        setImage(chest);
        break;
      case "lower arms":
        setImage(def);
        break;
      case "lower legs":
        setImage(lowerlegs);
        break;
      case "neck":
        setImage(neck);
        break;
      case "shoulders":
        setImage(shoulders);
        break;
      case "upper arms":
        setImage(upperarms);
        break;
      case "upper legs":
        setImage(upperlegs);
        break;
      case "waist":
        setImage(waist);
        break;

      default:
        setImage(def);
        break;
    }
  };

  const listPart = [
    "Back",
    "Cardio",
    "Chest",
    "Lower arms",
    "Lower legs",
    "Neck",
    "Shoulders",
    "Upper arms",
    "Upper legs",
    "Waist",
  ];

  const selectedCategory = (selected: string) => {
    getDataBodyExcercise(selected, 10);
    setCategory(selected);
    imageChanger(selected);
  };

  const getDataBodyPart = async () => {
    const data = await getBodyPart();
    setBodyList(data);
  };

  const getDataBodyExcercise = async (bodyPart: string, limit: number) => {
    const data = await getBodyPartExcercise(bodyPart, limit);
    setBodyExcerciseList(data);
  };

  useEffect(() => {
    getDataBodyPart();
    imageChanger("back");
    //getDataBodyExcercise("back", 10);
  }, []);

  return (
    <View>
      <StatusBar style="light" />
      <LinearGradient
        colors={[color.start, color.end]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={{ backgroundColor: "transparent", height: "100%" }}>
          <Stack.Screen
            options={{
              header: () => (
                <HomeHeader
                  categorySelect={selectedCategory}
                  homeCategory={listPart}
                />
              ),
            }}
          />
          <View
            style={{
              backgroundColor: color.secondary,
              margin: 10,
              height: 150,
              position: "relative",
              borderRadius: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <ImageDisplay name={image} />
            </View>
            <Text
              style={{
                color: color.gold,
                position: "absolute",
                top: 100,
                fontFamily: fontFamily.MontBold,
                fontSize: size.xxLarge,
                marginHorizontal: 15,
              }}
            >
              {category}
            </Text>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            {bodyExcerciseList.map((excercise, index) => (
              <Text
                key={index}
                style={{
                  color: color.secondary,
                  fontFamily: fontFamily.FiraBold,
                }}
              >
                {excercise.name}
              </Text>
            ))}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default index;
