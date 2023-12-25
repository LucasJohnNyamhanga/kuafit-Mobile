import { styles } from "../styles/workout";
import { View, Text } from "react-native";
import { size, color, fontFamily } from "../constants/Theme";
import { ExcercesType, bodyExcercesType } from "../app/Types/types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import CardWorkout from "./CardWorkout";

const workoutImage = require("../assets/images/image2.gif");

type dataType = {
  bodyExcerciseList: bodyExcercesType;
};

export const Workout = ({ bodyExcerciseList }: dataType) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textWorkout}>Workouts</Text>
      {bodyExcerciseList.map((excercise: ExcercesType, index: number) => (
        <View style={styles.card} key={index}>
          <CardWorkout image={workoutImage} excercise={excercise} />
        </View>
      ))}
    </View>
  );
};
