import { ImageProps } from "react-native";

export type bodyListType = {}[];

export type bodyExcercesType = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}[];

export type imageType = {
  name: ImageProps | Readonly<ImageProps>;
};
