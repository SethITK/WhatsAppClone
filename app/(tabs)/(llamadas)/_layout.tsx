import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

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
        options={{
          title: "Llamadas",
          headerTitleStyle: {
            color: "#fff",
          },
        }}
        name="index"
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
