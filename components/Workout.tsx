import { styles } from "../styles/workout";
import { View, Text, ActivityIndicator } from "react-native";
import { bodyExcercesType } from "../app/Types/types";
import CardWorkout from "./CardWorkout";
import { color, fontFamily, size } from "../constants/Theme";

type dataType = {
  bodyExcerciseList: bodyExcercesType[];
  loading: boolean;
};

export const Workout = ({ bodyExcerciseList, loading }: dataType) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textWorkout}>Workouts</Text>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size={size.xxxLarge} color={color.secondary} />
        </View>
      )}
      {!loading &&
        bodyExcerciseList.map((excercise, index: number) => (
          <View style={styles.card} key={index}>
            <CardWorkout excercise={excercise} />
          </View>
        ))}
      {!loading && bodyExcerciseList.length < 1 && (
        <View style={styles.noExcerciseContainer}>
          <Text style={styles.noExcircise}>No excercise available</Text>
        </View>
      )}
    </View>
  );
};
