import { SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { color, defaultStyles } from "../../constants/Theme";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import HomeHeader from "../../components/HomeHeader";
import { useEffect, useState } from "react";

const index = () => {
  const [category, setCategory] = useState("Weight training");
  const selectedCategory = (selected: string) => {
    setCategory(selected);
    console.log(selected);
  };
  return (
    <View>
      <StatusBar style="light" />
      <LinearGradient
        colors={[
          color.start,
          color.middle,
          color.middleCenter,
          color.middleBottom,
          color.end,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.98, y: 0.98 }}
      >
        <View style={{ backgroundColor: "transparent", height: "100%" }}>
          <Stack.Screen
            options={{
              header: () => <HomeHeader categorySelect={selectedCategory} />,
            }}
          />

          <View>
            <Text style={{ color: color.secondary }}>{category}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default index;
