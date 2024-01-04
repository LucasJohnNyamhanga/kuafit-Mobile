import { View, Text } from "react-native";
import React from "react";
import { styles } from "../styles/workout";
import { Image } from "expo-image";
import { bodyExcercesType } from "../app/Types/types";

type dataType = {
  excercise: bodyExcercesType;
};

const CardWorkout = ({ excercise }: dataType) => {
  return (
    <View>
      <View style={styles.cardHolder}>
        <View
          style={styles.container}
          // key={excercise.id}
        >
          <Image
            style={styles.image}
            source={excercise.gifUrl}
            contentFit="cover"
            transition={500}
            contentPosition="right center"
            priority={"high"}
          />
          <View style={styles.detailsContainer}>
            <Text
              // key={index}
              style={styles.header}
            >
              {excercise.name}
            </Text>
            <Text
              // key={index}
              style={styles.moreDetail}
            >
              More DEtails kwenye maelezo
            </Text>
            <View style={styles.bottomDetails}>
              <Text style={styles.level}>
                <Text style={styles.labelLevelandTarget}>Level: </Text>
                Beginner
              </Text>
              <Text style={styles.target}>
                <Text style={styles.labelLevelandTarget}>Target: </Text>Chest
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardWorkout;
