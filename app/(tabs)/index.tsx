import { ScrollView, RefreshControl, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { color, fontFamily, size } from "../../constants/Theme";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import HomeHeader from "../../components/HomeHeader";
import { useCallback, useEffect, useState } from "react";

import { bodyExcercesType, bodyListType, imageType } from "../Types/types";
import { getBodyPart, getBodyPartExcercise } from "../Engine/request";
import { ImageProps } from "react-native";
import { Workout } from "../../components/Workout";

const index = () => {
  const [bodyList, setBodyList] = useState<bodyListType[]>([]);
  const [bodyExcerciseList, setBodyExcerciseList] = useState<
    bodyExcercesType[]
  >([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingBody, setLoadingBody] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getDataBodyPart();
    // setTimeout(() => {
    //   setRefreshing(false);
    // }, 2000);
  }, []);

  const selectedCategory = (selected: string) => {
    setLoading(true);
    getDataBodyExcercise(checkBodyId(selected));
  };

  const getDataBodyPart = async () => {
    setLoadingBody(true);
    const data = await getBodyPart();
    setBodyList(data);
    if (bodyList.length > 0) {
      selectedCategory(bodyList[0].name);
    }
    setLoading(false);
    setLoadingBody(false);
  };

  const checkBodyId = (name: string) => {
    let id = 0;
    bodyList.filter((bodyArea) => {
      if (bodyArea.name == name) {
        id = bodyArea.id;
      }
    });
    return id;
  };

  const getDataBodyExcercise = async (bodyPartId: number) => {
    setLoading(true);
    const data = await getBodyPartExcercise(bodyPartId);
    setBodyExcerciseList(data);
    setRefreshing(false);
    setLoading(false);
  };

  useEffect(() => {
    getDataBodyPart();
  }, []);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: color.start }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <LinearGradient
        colors={[color.middle, color.end]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <View>
          <StatusBar
            style="light"
            //translucent
            backgroundColor={color.primary}
          />

          <View style={{ backgroundColor: "transparent" }}>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
            />

            <HomeHeader
              loading={loadingBody}
              categorySelect={selectedCategory}
              homeCategory={bodyList}
            />
            <Workout
              loading={loading}
              bodyExcerciseList={bodyExcerciseList.reverse()}
            />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;
