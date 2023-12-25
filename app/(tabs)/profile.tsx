import { Link, Stack, useRouter } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { color } from "../../constants/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const profile = () => {
  const router = useRouter();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: color.start }}>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <View
        style={{
          backgroundColor: "transparent",
          marginTop: wp(10),
          flexDirection: "column",
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <View>
          {/* <Link href={"/Admin/"}> */}
          <Button
            title="Go to Admin Pannel"
            onPress={() => {
              router.push("/Admin/");
            }}
          ></Button>
          {/* </Link> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default profile;
