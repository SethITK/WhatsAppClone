import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { IconButton } from "react-native-paper";

const _layout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#1E2A32",
        },
      }}
      initialRouteName="index"
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Chats",
          headerTitleStyle: {
            color: "#fff",
          },
          headerRight: () => {
            return (
              <View style={{ flexDirection: "row", gap: 16, marginRight: 12 }}>
                <IconButton
                  onPress={() => {
                    router.replace({
                      pathname: "/login",
                    });
                  }}
                  icon={"shutdown"}
                  size={20}
                  iconColor="#fff"
                />
              </View>
            );
          },
        }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
