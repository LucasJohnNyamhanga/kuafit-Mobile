import { ImageProps } from "react-native";

export type bodyListType =
  | {
      created_at: string;
      id: number;
      name: string;
      updated_at: string;
    }[]
  | [];

export type bodyListReadOnlyType = {
  name: string;
  img: ImageProps | Readonly<ImageProps>;
}[];

export type bodyExcercesType = {
  bodypart_id: number;
  created_at: string;
  equipment: string;
  gifUrl: string;
  id: number;
  instruction:
    | {
        id: number;
        exercise_id: number;
        name: string;
        created_at: string;
        updated_at: string;
      }[]
    | [];
  muscle:
    | {
        id: number;
        exercise_id: number;
        name: string;
        created_at: string;
        updated_at: string;
      }[]
    | [];
  name: string;
  target: string;
  updated_at: string;
}[];

export type ExcercesType = {
  bodypart_id: number;
  created_at: string;
  equipment: string;
  gifUrl: string;
  id: number;
  instruction:
    | {
        id: number;
        exercise_id: number;
        name: string;
        created_at: string;
        updated_at: string;
      }[]
    | [];
  muscle:
    | {
        id: number;
        exercise_id: number;
        name: string;
        created_at: string;
        updated_at: string;
      }[]
    | [];
  name: string;
  target: string;
  updated_at: string;
};

export type imageType = {
  name: ImageProps | Readonly<ImageProps>;
};

export type responceType = {
  status: boolean;
  data: any;
};
