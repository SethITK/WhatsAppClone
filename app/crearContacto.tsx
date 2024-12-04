import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import {
  Checkbox,
  Modal,
  PaperProvider,
  Portal,
  RadioButton,
  Switch,
} from "react-native-paper";
import { Colors } from "@/constants/Colors";

const CountryValues = {
  mexico: "México",
  usa: "Estados Unidos",
  canada: "Canadá",
};

const CreateContactForm = () => {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("mexico");
  const [notification, setNotification] = useState(false);
  const [options, setOptions] = useState<{
    favorite: boolean;
    blocked: boolean;
    videoOrVoice: boolean;
  }>({
    favorite: false,
    blocked: false,
    videoOrVoice: false,
  });
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text h3 style={styles.title}>
          Crear Nuevo Contacto
        </Text>

        {/* Formulario de entrada */}
        <View style={styles.form}>
          <Input
            placeholder="Nombre"
            leftIcon={{
              type: "font-awesome",
              name: "user",
              color: "#999",
            }}
            style={{ color: "#fff" }}
            value={name}
            onChangeText={setName}
            containerStyle={styles.inputContainer}
          />
          <Input
            placeholder="Apellido"
            leftIcon={{
              type: "font-awesome",
              name: "user",
              color: "#999",
            }}
            style={{ color: "#fff" }}
            value={apellido}
            onChangeText={setApellido}
            containerStyle={styles.inputContainer}
          />

          <Input
            placeholder="Teléfono"
            keyboardType="phone-pad"
            leftIcon={{
              type: "font-awesome",
              name: "phone",
              color: "#999",
            }}
            style={{ color: "#fff" }}
            value={phone}
            onChangeText={setPhone}
            containerStyle={styles.inputContainer}
          />
          <Button
            title={
              CountryValues[country as keyof typeof CountryValues] ||
              "Selleciona un país"
            }
            buttonStyle={{
              justifyContent: "flex-start",
              marginBottom: 20,
              borderWidth: 0,
            }}
            titleStyle={{ color: "#fff" }}
            onPress={showModal}
            type="outline"
          />

          <View>
            <Checkbox.Item
              labelStyle={{ color: "#fff" }}
              label="Favorito"
              status={options.favorite ? "checked" : "unchecked"}
              onPress={() =>
                setOptions({ ...options, favorite: !options.favorite })
              }
              color={Colors.green.primary}
            />
            <Checkbox.Item
              labelStyle={{ color: "#fff" }}
              label="Bloqueado"
              status={options.blocked ? "checked" : "unchecked"}
              onPress={() =>
                setOptions({ ...options, blocked: !options.blocked })
              }
              color={Colors.green.primary}
            />
            <Checkbox.Item
              labelStyle={{ color: "#fff" }}
              label="Silenciado"
              status={options.videoOrVoice ? "checked" : "unchecked"}
              onPress={() =>
                setOptions({ ...options, videoOrVoice: !options.videoOrVoice })
              }
              color={Colors.green.primary}
            />
          </View>
          <View style={[styles.row, { paddingHorizontal: 12 }]}>
            <Text style={{ color: "#fff" }}>
              Recibir notificaciones de este usuario?
            </Text>
            <Switch
              value={notification}
              onValueChange={setNotification}
              color={Colors.green.primary}
            />
          </View>
        </View>

        {/* Botón para guardar */}
        <Button
          title="Guardar"
          buttonStyle={styles.saveButton}
          onPress={() => {
            // Aquí puedes agregar la lógica de guardado
            Alert.alert(
              "Contacto guardado",
              `Nombre: ${name}\nTeléfono: ${phone}`
            );
          }}
        />
      </View>

      {/* Modal de selección de país */}
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Selecciona un país</Text>
            <RadioButton.Group
              value={country}
              onValueChange={(value) => {
                setCountry(value);
                hideModal();
              }}
            >
              <RadioButton.Item
                color={Colors.green.primary}
                label="México"
                labelStyle={{ color: "#fff" }}
                value="mexico"
              />
              <RadioButton.Item
                color={Colors.green.primary}
                label="Estados Unidos"
                labelStyle={{ color: "#fff" }}
                value="usa"
              />
              <RadioButton.Item
                color={Colors.green.primary}
                label="Canadá"
                labelStyle={{ color: "#fff" }}
                value="canada"
              />
            </RadioButton.Group>
          </View>
        </Modal>
      </Portal>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121B22",
    flex: 1,
    padding: 20,
    overflow: "hidden",
  },
  title: {
    color: "#fff",
    marginBottom: 16,
  },
  form: {
    flex: 1,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  inputContainer: {
    marginBottom: 12,
  },
  saveButton: {
    backgroundColor: Colors.green.primary,
    width: "100%",
    marginTop: 16,
  },
  modalContainer: {
    backgroundColor: "#121B22",
    padding: 20,
    borderRadius: 16,
    width: "80%",
    alignSelf: "center",
  },
  modalContent: {
    alignItems: "center",
  },
  modalText: {
    marginBottom: 10,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CreateContactForm;
