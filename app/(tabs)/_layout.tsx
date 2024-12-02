import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="(chats)"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarInactiveBackgroundColor: "#1E2A32",
        animation: "shift",
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="(chats)"
        options={(props) => {
          return {
            title: "Chats",
            headerStyle: {
              backgroundColor: "#1E2A32",
            },
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          };
        }}
      />

      <Tabs.Screen
        name="(chats)/[id]/messages"
        options={{
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="(novedades)"
        options={{
          title: "Novedades",
          headerStyle: {
            backgroundColor: "#1E2A32",
          },
          tabBarIcon: ({ color }) => (
            <IconSymbol color={"#fff"} size={28} name="1.magnifyingglass.ar" />
          ),
        }}
      />

      <Tabs.Screen
        name="(llamadas)"
        options={{
          title: "Estados",
          headerStyle: {
            backgroundColor: "#1E2A32",
          },
          tabBarIcon: ({ color }) => (
            <IconSymbol color={"#fff"} size={28} name="person.crop.artframe" />
          ),
        }}
      />

      <Tabs.Screen
        name="(comunidades)"
        options={{
          title: "Comunidades",
          headerStyle: {
            backgroundColor: "#1E2A32",
          },
          tabBarIcon: ({ color }) => (
            <IconSymbol color={"#fff"} size={28} name="phone.and.waveform.fill" />
          ),
        }}
      />
    </Tabs>
  );
}
