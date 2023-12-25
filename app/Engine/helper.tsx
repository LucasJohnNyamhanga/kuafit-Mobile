//import { getDataFromDevice, storeDataToDevice } from "./helper";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { responceType } from "../Types/types";

let responce: responceType;

export const storeDataToDevice = async (key: string, value: any) => {
  console.log(value);
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    responce.status = true;
    responce.data = "Success";
  } catch (e) {
    // saving error
    responce.status = false;
    responce.data = "Fail";
  }

  return responce;
};

export const getDataFromDevice = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    responce.data = jsonValue != null ? JSON.parse(jsonValue) : null;
    responce.status = true;
  } catch (e) {
    // error reading value
    responce.data = "Fail";
    responce.status = false;
  }

  return responce;
};
