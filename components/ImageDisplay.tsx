import { Image } from "expo-image";
import { styles } from "../styles/imageDisplayer";
import { imageType } from "../app/Types/types";
import { useEffect } from "react";

export const ImageDisplay = ({ name }: imageType) => {
  useEffect(() => {}, [name]);

  return (
    <Image
      style={styles.image}
      source={name}
      contentFit="cover"
      transition={1000}
      contentPosition="top center"
    />
  );
};
