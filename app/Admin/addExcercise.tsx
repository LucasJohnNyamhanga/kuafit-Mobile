import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/addExcercise";
import { color, defaultStyles, size } from "../../constants/Theme";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import BottomSheet from "../../components/BottomSheet";
import { Image } from "expo-image";
import { getBodyPart } from "../Engine/request";
import { bodyListType } from "../Types/types";
import Toast from "react-native-toast-message";
import axios from "axios";
import * as FileSystem from "expo-file-system";

const imgDir = FileSystem.documentDirectory + "images/";

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};

const index = () => {
  const [image, setImage] = useState<string>("");
  const [instruction, setInstruction] = useState<string>("");
  const [muscle, setMuscle] = useState<string>("");
  const [instructions, setInstructions] = useState<string[]>([]);
  const [muscles, setMuscles] = useState<string[]>([]);
  const [bodyList, setBodyList] = useState<string[]>([]);
  const [excerciseName, setExcerciseName] = useState("");
  const [activateEquipment, setActivateEquipment] = useState(false);
  const [activateBody, setActivateBody] = useState(false);
  const [bodyArea, setBodyArea] = useState("");
  const [equipment, setEquipment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [bodyAreaListFromDatabase, setBodyAreaListFromDatabase] = useState<
    bodyListType[]
  >([]);
  const [clear, setClear] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<any[]>([]);

  const showToast = (
    type: "success" | "error" | "info",
    title: string,
    sms: string
  ) => {
    Toast.show({
      type: type,
      text1: title,
      text2: sms,
    });
  };

  const selectedEquipment = (selected: string) => {
    setEquipment(selected);
  };

  const selectedBodyArea = (selected: string) => {
    setBodyArea(selected);
  };

  const listEquipment = [
    "No Equipment",
    "Bench press",
    "Dumbbells",
    "Squat rack",
    "Barbells",
    "Cables and pulleys",
    "LAT machine",
    "Dipping bars",
    "Leg curl machine",
    "Leg extension machine",
    "Seated row machine",
    "Shoulder press machine",
    "Treadmill",
  ];

  const activateModalBody = () => {
    setActivateEquipment(false);
    setActivateBody(true);
  };

  const activateModalEquipment = () => {
    setActivateBody(false);
    setActivateEquipment(true);
  };

  const checkBodyId = (name: string) => {
    let id = 0;
    bodyAreaListFromDatabase.filter((bodyArea) => {
      if (bodyArea.name == name) {
        id = bodyArea.id;
      }
    });
    return id;
  };

  const submit = () => {
    if (
      image != "" &&
      bodyArea != "" &&
      equipment != "" &&
      excerciseName != "" &&
      instructions.length > 0 &&
      muscles.length > 0
    ) {
      setSubmitting(true);
      setUploading(true);
      saveImage(image);
      //showToast("success", "Upload started..", "All settings working");
    } else {
      showToast("error", "Submit Failed", "Enter all required information");
    }
  };

  //image picker

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      //allowsEditing: true,
      //aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      showToast("error", "Image location", result.assets[0].uri);
    }
  };

  const addInstruction = () => {
    if (instruction != "") {
      setInstructions([...instructions, instruction]);
      setInstruction("");
    }
  };

  const addMuscle = () => {
    if (muscle != "") {
      setMuscles([...muscles, muscle]);
      setMuscle("");
    }
  };

  const getDataBodyPart = async () => {
    const data = await getBodyPart();
    setBodyAreaListFromDatabase(data);
    const dataProcessed: string[] = [];
    data.map((body: bodyListType) => {
      dataProcessed.push(body.name);
    });
    setBodyList(dataProcessed);
  };

  useEffect(() => {
    getDataBodyPart();
  }, []);

  const postInstructions = async (excerciseId: number) => {
    const responses = await Promise.all(
      instructions.map(async (inst) => {
        const dataInst = {
          exercise_id: excerciseId,
          name: inst,
        };

        const res = await axios.post(
          "https://database.co.tz/api/instructions",
          dataInst
        );
      })
    );

    return responses;
  };

  const postMuscle = async (excerciseId: number) => {
    const responses = await Promise.all(
      muscles.map(async (muscle) => {
        const dataMuscle = {
          exercise_id: excerciseId,
          name: muscle,
        };

        const res = await axios.post(
          "https://database.co.tz/api/muscles",
          dataMuscle
        );
      })
    );

    return responses;
  };

  const sendDataToDataBase = async (location: string) => {
    const data = {
      name: excerciseName,
      gifUrl: location,
      bodypart_id: checkBodyId(bodyArea),
      equipment: equipment,
    };

    axios
      .post("https://database.co.tz/api/exercises", data)
      .then((response) => {
        //responce

        const excerciseId: number = JSON.parse(response.data);

        if (instructions.length > 0) {
          postInstructions(excerciseId)
            .then((response) => {
              if (muscles.length > 0) {
                postMuscle(excerciseId).then((response) => {
                  showToast(
                    "success",
                    "DATABASE UPDATED SUCCESS.",
                    "All data has been inserted to database correctly."
                  );
                });
              }
            })
            .catch((err) => {
              setClear(true);
              setImage("");
              setBodyArea("");
              setEquipment("");
              setExcerciseName("");
              setInstructions([]);
              setMuscles([]);
              setSubmitting(false);
              setClear(false);
              showToast(
                "error",
                "DATABASE INSERT ERROR.",
                "No connection to database, Call 0784477999 for assistance!."
              );
            });
        }

        //! Clear ni kama switch ikiwaka inafua bottom sheet selected, harafu ikizima inaruhusu kuandika selected choice!.

        setClear(true);
        setImage("");
        setBodyArea("");
        setEquipment("");
        setExcerciseName("");
        setInstructions([]);
        setMuscles([]);
        setSubmitting(false);
        setClear(false);
      })
      .catch(function (error) {
        // handle error
        setClear(true);
        setImage("");
        setBodyArea("");
        setEquipment("");
        setExcerciseName("");
        setInstructions([]);
        setMuscles([]);
        setSubmitting(false);
        setClear(false);
        showToast(
          "error",
          "DATABASE INSERT ERROR.",
          "No connection to database, Call 0784477999 for assistance!."
        );
      });
  };

  //! IMAGE FROM FILE SYSTEM
  // Load images on startup
  useEffect(() => {
    loadImages();
  }, []);

  // Load images from file system
  const loadImages = async () => {
    await ensureDirExists();
    const files = await FileSystem.readDirectoryAsync(imgDir);
    if (files.length > 0) {
      setImages(files.map((f) => imgDir + f));
    }
  };

  // Save image to file system
  const saveImage = async (uri: string) => {
    await ensureDirExists();
    let filename = uri.split("/").pop();
    const dest = imgDir + filename;
    await FileSystem.copyAsync({ from: uri, to: dest });
    setImages([...images, dest]);
    setImage(dest);
    uploadImage(dest);
  };

  // Upload image to server
  const uploadImage = async (uri: string) => {
    const response = await FileSystem.uploadAsync(
      "https://database.co.tz/api/upload",
      uri,
      {
        httpMethod: "POST",
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        fieldName: "file",
      }
    );

    let location = JSON.parse(response.body);
    deleteImage(image);
    sendDataToDataBase(location);
    setUploading(false);
  };

  // Delete image from file system
  const deleteImage = async (uri: string) => {
    await FileSystem.deleteAsync(uri);
    setImages(images.filter((i) => i !== uri));
  };

  return (
    <View style={styles.mainContainer}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <StatusBar
        style="light"
        //translucent
        backgroundColor={color.primary}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.motherContainer}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons
                name="arrow-back-circle"
                size={size.xxLarge}
                color={color.secondary}
              />
              <Text style={styles.backHome}>Back</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.header}>Add Excercise</Text>
            <TextInput
              style={[
                defaultStyles.inputField,
                styles.inputText,
                styles.spaceBottom,
              ]}
              placeholder="Excercise Name"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={(text) => {
                setExcerciseName(text);
              }}
              value={excerciseName}
            />
            <View style={styles.containerGradient}>
              <TouchableOpacity onPress={pickImage}>
                <LinearGradient
                  colors={[color.primary, color.grey]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.gradient}
                >
                  <View style={styles.uploadContainer}>
                    {typeof image == "string" && image != "" ? (
                      <Image source={{ uri: image }} style={styles.image} />
                    ) : (
                      <Entypo name="image" size={54} color="black" />
                    )}
                    {!image && (
                      <Text style={styles.upload}>Upload gif image</Text>
                    )}
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.addContainer}>
              <TextInput
                style={[defaultStyles.inputField, styles.inputText]}
                placeholder="Instructions"
                autoCorrect={false}
                autoCapitalize="words"
                onChangeText={(text) => {
                  setInstruction(text);
                }}
                value={instruction}
              />
              <TouchableOpacity
                style={styles.touchableContainer}
                onPress={addInstruction}
              >
                <LinearGradient
                  colors={[color.primary, color.grey]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.touchableGradient}
                >
                  <View>
                    <Text style={styles.add}>Add</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.topTip}>
              {instructions.map((inst, index) => (
                <View key={index} style={styles.tipbox}>
                  <View style={styles.tipContainer} />
                  <Text style={styles.textTip}>{inst}</Text>
                  <Ionicons
                    name="arrow-back-circle"
                    size={size.medium}
                    color={color.secondary}
                  />
                </View>
              ))}
            </View>

            <View style={[styles.addContainer, styles.spaceTop]}>
              <TextInput
                style={[defaultStyles.inputField, styles.inputText]}
                placeholder="Target Muscle Name"
                autoCorrect={false}
                autoCapitalize="words"
                onChangeText={(text) => {
                  setMuscle(text);
                }}
                value={muscle}
              />
              <TouchableOpacity
                style={styles.touchableContainer}
                onPress={addMuscle}
              >
                <LinearGradient
                  colors={[color.primary, color.grey]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.touchableGradient}
                >
                  <View>
                    <Text style={styles.add}>Add</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.topTip}>
              {muscles.map((mus, index) => (
                <View key={index} style={styles.tipbox}>
                  <View style={styles.tipContainer} />
                  <Text style={styles.textTip}>{mus}</Text>
                </View>
              ))}
            </View>
            <TouchableOpacity
              style={[styles.select, styles.spaceTop]}
              onPress={activateModalBody}
            >
              <LinearGradient
                colors={[color.primary, color.grey]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}
              >
                <Text style={styles.selectText}>
                  {bodyArea == ""
                    ? `Select Body Area`
                    : `Body Area: ${bodyArea}`}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.select}
              onPress={activateModalEquipment}
            >
              <LinearGradient
                colors={[color.primary, color.grey]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}
              >
                <Text style={styles.selectText}>
                  {equipment == ""
                    ? `Select Equipment`
                    : `Equipment: ${equipment}`}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* //Submit */}
            <TouchableOpacity
              style={styles.select}
              onPress={submit}
              disabled={submitting}
            >
              <LinearGradient
                colors={[color.gold, color.grey]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonGradient}
              >
                {submitting && (
                  <ActivityIndicator size={size.large} color={color.black} />
                )}
                <Text style={styles.submitText}>
                  {submitting ? "Please Wait.." : "Submit"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomSheet
        list={bodyList}
        activate={activateBody}
        selected={selectedBodyArea}
        closedModal={() => setActivateBody(false)}
        title="Body Focus Area"
        clear={clear}
      />
      <BottomSheet
        list={listEquipment}
        activate={activateEquipment}
        selected={selectedEquipment}
        closedModal={() => setActivateEquipment(false)}
        title="Equipment Used"
        clear={clear}
      />
      <Toast />
    </View>
  );
};

export default index;
