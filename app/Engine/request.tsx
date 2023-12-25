import axios from "axios";
import { bodyExcercesType, bodyListType } from "../../app/Types/types";
import { ToastAndroid } from "react-native";

function showToast(sms: string) {
  ToastAndroid.show(sms, ToastAndroid.SHORT);
}

export const getBodyPart = async () => {
  const options = {
    method: "GET",
    url: "https://database.co.tz/api/bodyparts",
    // headers: {
    //   "X-RapidAPI-Key": "1936923b3emsh2cc97780d559a45p1629f7jsn2bb41be1f074",
    //   "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    // },
  };
  let data: bodyListType | any = [];

  try {
    const response = await axios.request(options);
    if (response.data.status == 200) {
      data = response.data.data.data;
    }
  } catch (error) {
    console.log("error : " + error);
    showToast(`${error}`);
  }

  return data;
};

export const getBodyPartExcercise = async (bodyPart: string) => {
  const options = {
    method: "GET",
    url: `https://database.co.tz/api/exercises`,
    params: { part: bodyPart },
    // headers: {
    //   "X-RapidAPI-Key": "1936923b3emsh2cc97780d559a45p1629f7jsn2bb41be1f074",
    //   "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    // },
  };

  let data: bodyExcercesType | any = [];
  //

  try {
    const response = await axios.request(options);
    if (response.status == 200) {
      data = response.data.data.data;
    }
  } catch (error) {
    console.log("error : " + error);
    showToast(`${error}`);
  }

  return data;
};
