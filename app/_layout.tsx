import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="[id]/index"
          options={(props) => {
            return {
              title: props.route.params.title || "Messages",
              headerRight: () => (
                <View
                  style={{ flexDirection: "row", gap: 16, marginRight: 12 }}
                >
                  <TouchableOpacity>
                    <AntDesign color={"#fff"} name="camera" size={20} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <AntDesign color={"#fff"} name="phone" size={20} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <AntDesign color={"#fff"} name="ellipsis1" size={20} />
                  </TouchableOpacity>
                </View>
              ),
            };
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
