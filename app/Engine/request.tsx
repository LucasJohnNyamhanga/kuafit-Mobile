import axios from "axios";
import { bodyExcercesType, bodyListType } from "../../app/Types/types";
import { ToastAndroid } from "react-native";
import { useState } from "react";

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
      data = JSON.parse(JSON.stringify(response.data.data.data));
    }
  } catch (error) {
    console.log("error : " + error);
  }

  return data;
};

export const getBodyPartExcercise = async (bodyPartId: number) => {
  const options = {
    method: "GET",
    url: `https://database.co.tz/api/exercises/${bodyPartId}`,

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
      data = JSON.parse(JSON.stringify(response.data.data.data));
    }
  } catch (error) {
    console.log("error : " + error);
  }

  return data;
};

const pushData = () => {
  const data = {
    name: "jina",
  };

  axios.post("/api/getUser", data).then(function (response) {
    //responce
    const userData = JSON.parse(JSON.stringify(response.data));

    if (userData) {
      // notifyError("Tayari kuna akaunti yenye jina hili.");
      // setLoadingDisplay(false);
      // setSubmit(true);
      // // username.current.focus();
      // // username.current.style.color = "red";
    } else {
      // uploadToServer();
    }
  });
};
