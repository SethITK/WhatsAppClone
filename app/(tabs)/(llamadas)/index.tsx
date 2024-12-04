import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors"; // Puedes definir tus propios colores o reemplazarlo
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Usando expo-vector-icons
import { TouchableRipple } from "react-native-paper";

// Datos simulados para las llamadas
const CALLS_DATA = [
  {
    id: "1",
    name: "Juan Pérez",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    time: "Hoy, 10:30 AM",
    type: "incoming", // incoming, outgoing, missed
    video: false, // true si es llamada de video
  },
  {
    id: "2",
    name: "Ana López",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    time: "Ayer, 7:15 PM",
    type: "missed",
    video: true,
  },
  {
    id: "3",
    name: "Carlos Martínez",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    time: "Hoy, 12:45 PM",
    type: "outgoing",
    video: false,
  },
];

const CallItem = ({ call }: { call: any }) => {
  // Determina el color y el icono dependiendo del tipo de llamada
  const getCallIcon = () => {
    if (call.type === "incoming") {
      return (
        <Ionicons name="call-outline" size={20} color={Colors.green.primary} />
      );
    }
    if (call.type === "outgoing") {
      return (
        <Ionicons name="call-outline" size={20} color={Colors.green.accent} />
      );
    }
    return (
      <MaterialIcons name="call-missed" size={20} color={Colors.orange[500]} />
    );
  };

  return (
    <TouchableRipple
      onPress={() => console.log("Llamada seleccionada")}
      style={styles.callItem}
      rippleColor={
        call.type === "missed" ? Colors.orange[100] : Colors.orange[200]
      }
    >
      <>
        <View>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "#444",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></View>
        </View>
        <View style={styles.callInfo}>
          <Text style={styles.name}>{call.name}</Text>
          <View style={styles.callDetails}>
            {getCallIcon()}
            <Text style={styles.time}>{call.time}</Text>
          </View>
        </View>
        <View>
          {call.video ? (
            <Ionicons
              name="videocam-outline"
              size={24}
              color={Colors.green.primary}
            />
          ) : (
            <Ionicons
              name="call-outline"
              size={24}
              color={Colors.green.primary}
            />
          )}
        </View>
      </>
    </TouchableRipple>
  );
};

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={CALLS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CallItem call={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121B22", // Define un color de fondo
    paddingVertical: 5,
  },
  callItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444", // Color de la línea de división
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  callInfo: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  callDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  time: {
    fontSize: 14,
    color: "#999",
  },
});
