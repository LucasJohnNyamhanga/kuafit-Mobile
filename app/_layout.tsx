import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { color } from "../constants/Theme";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    MontMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    MontRegural: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    FiraMedium: require("../assets/fonts/FiraSans-Medium.ttf"),
    FiraRegural: require("../assets/fonts/FiraSans-Regular.ttf"),
    FiraBold: require("../assets/fonts/FiraSans-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
