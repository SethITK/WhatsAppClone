import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { Modal, PaperProvider, Portal, RadioButton } from "react-native-paper";
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
            placeholder="País"
            leftIcon={{
              type: "font-awesome",
              name: "globe",
              color: "#999",
            }}
            value={CountryValues[country as keyof typeof CountryValues]}
            style={{ color: "#fff" }}
            onFocus={showModal} // Mostrar modal al enfocar el input
            disabled
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
              <RadioButton.Item label="México" value="mexico" />
              <RadioButton.Item label="Estados Unidos" value="usa" />
              <RadioButton.Item label="Canadá" value="canada" />
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
