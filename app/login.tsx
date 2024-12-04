import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input } from "react-native-elements";
import { Button, Card, Checkbox } from "react-native-paper";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const login = () => {
  const router = useRouter();
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [recordar, setRecordar] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1E2A32",
        alignItems: "center",
      }}
    >
      <Card style={{ maxWidth: "80%", padding: 10, marginTop: 40 }}>
        <Input
          placeholder="Telefono"
          placeholderTextColor={Colors.green.textPrimary}
          inputStyle={{ color: Colors.green.textPrimary }}
          leftIcon={{
            type: "font-awesome",
            name: "phone",
            color: Colors.green.textPrimary,
          }}
          value={telefono}
          onChangeText={setTelefono}
          inputContainerStyle={{ borderBottomColor: "#fff" }}
        />

        <Input
          placeholderTextColor={Colors.green.textPrimary}
          inputStyle={{ color: Colors.green.textPrimary }}
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            color: Colors.green.textPrimary,
          }}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          inputContainerStyle={{ borderBottomColor: "#fff" }}
        />

        <Checkbox.Item
          label="Recordar contraseña"
          status={recordar ? "checked" : "unchecked"}
          labelStyle={{ color: Colors.green.textPrimary }}
          color={Colors.green.primary}
          onPress={() => setRecordar(!recordar)}
        />

        <Button
          mode="outlined"
          textColor="#fff"
          style={{
            backgroundColor: Colors.green.textPrimary,
            borderRadius: 8,
          }}
          onPress={() => {
            if (!telefono || !password) {
              Alert.alert("Error", "Por favor, rellene todos los campos");
              return;
            }

            router.navigate({
              pathname: "/(tabs)/(chats)",
            });
          }}
        >
          Iniciar Sesión
        </Button>
      </Card>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
