import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { View, Text } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { color } from "../constants/Theme";
import { styles } from "../styles/bottomSheet";

type dataType = {
  list: string[];
  selected: (selected: string) => void;
  activate: boolean;
  closedModal: () => void;
  title: string;
};

const App = ({ list, selected, activate, closedModal, title }: dataType) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [choice, setChoice] = useState("");

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  useEffect(() => {
    if (activate) {
      handlePresentModalPress();
    } else {
      handleCloseModalPress();
    }
  }, [activate]);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    if (index < 0) {
      closedModal();
    }
  }, []);
  // renders
  return (
    <BottomSheetModalProvider>
      <View>
        <BottomSheetModal
          // backgroundStyle={
          //   {
          //     backgroundColor: color.backgroundMirror
          //   }
          // }
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {list.map((name: string, index: number) => (
              <View key={index} style={styles.innerContainer}>
                <BouncyCheckbox
                  isChecked={choice === name ? true : false}
                  size={25}
                  fillColor={color.green}
                  unfillColor={color.gold}
                  text={name}
                  iconStyle={{ borderColor: "red" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  textStyle={styles.checkBox}
                  onPress={(isChecked: boolean) => {
                    setChoice(name);
                    selected(name);
                    handleCloseModalPress();
                  }}
                />
              </View>
            ))}
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default App;
