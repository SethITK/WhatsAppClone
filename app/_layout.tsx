import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button, IconButton, PaperProvider } from "react-native-paper";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
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
      <PaperProvider>
        <Stack initialRouteName="login">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen
            name="[id]/index"
            options={(props) => {
              return {
                headerStyle: {
                  backgroundColor: "#1E2A32",
                },
                headerTitleStyle: {
                  color: "#fff",
                },
                headerBackButtonDisplayMode: "hidden",
                headerBackVisible: false,
                headerTitle: () => (
                  <Button
                    onPress={() => {
                      router.push({
                        pathname: "/[id]chats",
                        params: {
                          id: props?.route?.params?.id || "1",
                          title: props?.route?.params?.title || "Messages",
                        },
                      });
                    }}
                    labelStyle={{
                      color: "#fff",
                      fontSize: 16,
                    }}
                    style={{ flexDirection: "row", gap: 16 }}
                  >
                    {props.route.params.title || "Messages"}
                  </Button>
                ),
                headerLeft: () => (
                  <IconButton
                    style={{ marginLeft: 0 }}
                    icon={"arrow-left"}
                    iconColor={"#fff"}
                    onPress={() => {
                      if (router.canGoBack()) {
                        router.back();
                      }
                    }}
                  />
                ),
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
          <Stack.Screen
            name="crearContacto"
            options={{
              title: "Crear contacto",
              headerStyle: {
                backgroundColor: "#1E2A32",
              },
              headerTitleStyle: {
                color: "#fff",
              },
              headerBackButtonDisplayMode: "hidden",
              headerBackVisible: false,
              headerLeft: () => (
                <IconButton
                  style={{ marginLeft: 0 }}
                  icon={"arrow-left"}
                  iconColor={"#fff"}
                  onPress={() => {
                    if (router.canGoBack()) {
                      router.back();
                    }
                  }}
                />
              ),
            }}
          />

          <Stack.Screen
            name="login"
            options={{
              title: "Iniciar Sesion",
              headerStyle: {
                backgroundColor: "#1E2A32",
              },
              headerTitleStyle: {
                color: "#fff",
              },
              headerBackButtonDisplayMode: "hidden",
              headerBackVisible: false,
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </PaperProvider>
    </ThemeProvider>
  );
}
