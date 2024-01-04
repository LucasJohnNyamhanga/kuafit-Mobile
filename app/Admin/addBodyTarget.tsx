import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/addExcercise";
import { color, defaultStyles, size } from "../../constants/Theme";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
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
  const [excerciseName, setExcerciseName] = useState("");
  const [submitting, setSubmitting] = useState(false);
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

  const submit = () => {
    if (image != "" && excerciseName != "") {
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
      //showToast("error", "Image location", result.assets[0].uri);
    }
  };

  const sendDataToDataBase = async (location: string) => {
    const data = {
      name: excerciseName,
      imgUrl: location,
    };

    axios
      .post("https://database.co.tz/api/bodyparts", data)
      .then((response) => {
        //responce

        const bodyId: number = JSON.parse(response.data);

        setImage("");
        setExcerciseName("");
        setUploading(false);
        setSubmitting(false);
        showToast(
          "success",
          "DATABASE INSERT SUCCESS.",
          "Data has been inserted successfully"
        );
      })
      .catch(function (error) {
        // handle error
        setImage("");
        setExcerciseName("");
        setUploading(false);
        setSubmitting(false);
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
            <Text style={styles.header}>Add Body Target</Text>
            <TextInput
              style={[
                defaultStyles.inputField,
                styles.inputText,
                styles.spaceBottom,
              ]}
              placeholder="Body Target Name"
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
                    {!image && <Text style={styles.upload}>Upload image</Text>}
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>

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

      <Toast />
    </View>
  );
};

export default index;
