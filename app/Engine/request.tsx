import axios from "axios";
import { bodyExcercesType, bodyListType } from "../../app/Types/types";
import { ToastAndroid } from "react-native";

function showToast(sms: string) {
  ToastAndroid.show(sms, ToastAndroid.SHORT);
}

export const getBodyPart = async () => {
  const options = {
    method: "GET",
    url: "http://127.0.0.1:8000/api/bodyparts",
    // headers: {
    //   "X-RapidAPI-Key": "1936923b3emsh2cc97780d559a45p1629f7jsn2bb41be1f074",
    //   "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    // },
  };
  let data: bodyListType = [];

  try {
    const response = await axios.request(options);
    if (response.status == 200) {
      data = response.data;
    }
  } catch (error) {
    console.log("error : " + error);
    showToast(`${error}`);
  }

  return data;
};

export const getBodyPartExcercise = async (bodyPart: string, limit: number) => {
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
    params: { limit: limit.toString() },
    headers: {
      "X-RapidAPI-Key": "1936923b3emsh2cc97780d559a45p1629f7jsn2bb41be1f074",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  let data: bodyExcercesType = [];

  try {
    const response = await axios.request(options);
    if (response.status == 200) {
      data = response.data;
    }
  } catch (error) {
    console.log("error : " + error);
    //showToast(`${error}`);
  }

  return data;
};
