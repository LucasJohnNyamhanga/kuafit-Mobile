import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack } from "expo-router";
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

const index = () => {
  const [activateEquipment, setActivateEquipment] = useState(false);
  const [activateBody, setActivateBody] = useState(false);
  const [bodyArea, setBodyArea] = useState("");
  const [equipment, setEquipment] = useState("");

  const selectedEquipment = (selected: string) => {
    setEquipment(selected);
  };

  const selectedBodyArea = (selected: string) => {
    setBodyArea(selected);
  };

  const listEquipment = ["Nondo", "Dumb Bell"];
  const listBodyPart = ["Kifua", "Shingo", "Mkono Juu", "Mkono Chini"];

  const activateModalBody = () => {
    setActivateEquipment(false);
    setActivateBody(true);
  };

  const activateModalEquipment = () => {
    setActivateBody(false);
    setActivateEquipment(true);
  };

  const submit = () => {
    console.log("sUBMITTING...");
  };

  //image picker
  const [image, setImage] = useState<string | null>(null);
  const [instruction, setInstruction] = useState<string>("");
  const [muscle, setMuscle] = useState<string>("");
  const [instructions, setInstructions] = useState<string[]>([]);
  const [muscles, setMuscles] = useState<string[]>([]);
  const [bodyList, setBodyList] = useState<string[]>([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //allowsEditing: true,
      //aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
    const dataProcessed: string[] = [];
    data.map((body: bodyListType) => {
      dataProcessed.push(body.name);
    });
    setBodyList(dataProcessed);
  };

  useEffect(() => {
    getDataBodyPart();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.motherContainer}>
          <View style={styles.container}>
            <Link href={"/"} asChild>
              <TouchableOpacity style={styles.back}>
                <Ionicons
                  name="arrow-back-circle"
                  size={size.xxLarge}
                  color={color.secondary}
                />
                <Text style={styles.backHome}>Home</Text>
              </TouchableOpacity>
            </Link>
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
                    {image ? (
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
            <TouchableOpacity style={styles.select} onPress={submit}>
              <LinearGradient
                colors={[color.gold, color.grey]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}
              >
                <Text style={styles.submitText}>Submit</Text>
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
      />
      <BottomSheet
        list={listEquipment}
        activate={activateEquipment}
        selected={selectedEquipment}
        closedModal={() => setActivateEquipment(false)}
        title="Equipment Used"
      />
    </View>
  );
};

export default index;
