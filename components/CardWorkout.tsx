import { View, Text } from "react-native";
import React from "react";
import { styles } from "../styles/workout";
import { Image } from "expo-image";
import { ExcercesType } from "../app/Types/types";
import { ImageProps } from "react-native";

type dataType = {
  image: ImageProps | Readonly<ImageProps>;
  excercise: ExcercesType;
};

const CardWorkout = ({ image, excercise }: dataType) => {
  return (
    <View>
      <View style={styles.cardHolder}>
        <View
          style={styles.container}
          // key={excercise.id}
        >
          <Image
            style={styles.image}
            source={image}
            contentFit="cover"
            transition={1000}
            contentPosition="right center"
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
