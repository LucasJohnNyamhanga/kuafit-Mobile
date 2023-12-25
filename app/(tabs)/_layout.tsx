import { Tabs } from "expo-router";
import { color, defaultStyles, fontFamily, size } from "../../constants/Theme";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type iconType = {
  color: string;
  size: number;
};

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: color.gold,
        tabBarInactiveTintColor: color.grey,
        tabBarLabelStyle: {
          fontFamily: fontFamily.MontBold,
          fontSize: size.small,
          marginBottom: wp(3),
        },
        tabBarStyle: {
          height: wp(20),
          borderTopWidth: wp(0),
          borderColor: color.gold,
          borderStyle: "solid",
          backgroundColor: color.backgroundMirror,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }: iconType) => (
            <MaterialIcons name="fitness-center" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          tabBarLabel: "My Progress",
          tabBarIcon: ({ color, size }: iconType) => (
            <Ionicons name="fitness" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          tabBarLabel: "Activities",
          tabBarIcon: ({ color, size }: iconType) => (
            <MaterialIcons name="run-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }: iconType) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
