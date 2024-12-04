import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const _layout = () => {
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
        }}
      />

      <Stack.Screen
        name="[id]/messages"
        options={(props) => {
          return {
            title: props.route.params.title || "Messages",
            headerRight: () => (
              <View style={{ flexDirection: "row", gap: 16, marginRight: 12 }}>
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
  );
};

export default _layout;

const styles = StyleSheet.create({});
