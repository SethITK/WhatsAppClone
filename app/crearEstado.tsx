import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Text, Button } from "react-native-elements";
import { Modal, Portal, PaperProvider } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "@/constants/Colors";


const crearEstado = () => {

    const [name, setName] = useState("");
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
  
    const pickImage = async () => {
      // Solicitar permisos para acceder a la galería
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (!permissionResult.granted) {
        Alert.alert("Permiso denegado", "Se requiere acceso a la galería.");
        return;
      }
  
      // Abrir el selector de imágenes
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setProfileImage(result.assets[0].uri);
        setModalVisible(true);
      }
    };
  
    const saveProfile = () => {
      if (!name || !profileImage) {
        Alert.alert("Faltan datos", "Por favor completa todos los campos.");
        return;
      }
  
      Alert.alert("Perfil guardado", `Nombre: ${name}`);
      // Aquí podrías enviar la información al servidor o guardarla localmente
    };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text h3 style={styles.title}>
          Crear Perfil
        </Text>

        <View style={styles.form}>
          {/* Input para el nombre */}
          <TextInput
            placeholder="Nombre"
            placeholderTextColor={Colors.dark.icon}
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          {/* Botón para cargar imagen */}
          <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.image} />
            ) : (
              <Text style={styles.imagePickerText}>Seleccionar Imagen</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Botón para guardar */}
        <Button
          title="Guardar Perfil"
          buttonStyle={styles.saveButton}
          onPress={saveProfile}
        />
      </View>

      {/* Modal para confirmar la imagen seleccionada */}
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={styles.modalContainer}
        >
          <Text style={styles.modalText}>¿Usar esta imagen?</Text>
          {profileImage && (
            <Image source={{ uri: profileImage }} style={styles.modalImage} />
          )}
          <View style={styles.modalActions}>
            <Button
              title="Aceptar"
              buttonStyle={styles.modalButton}
              onPress={() => setModalVisible(false)}
            />
            <Button
              title="Cancelar"
              buttonStyle={[styles.modalButton, styles.cancelButton]}
              onPress={() => {
                setProfileImage(null);
                setModalVisible(false);
              }}
            />
          </View>
        </Modal>
      </Portal>
    </PaperProvider>
  )
}

export default crearEstado

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
        padding: 20,
        overflow: "hidden",
      },
      title: {
        color: Colors.dark.text,
        marginBottom: 16,
      },
      form: {
        flex: 1,
        alignItems: "center",
      },
      input: {
        width: "100%",
        backgroundColor: Colors.dark.text,
        borderRadius: 8,
        padding: 12,
        color: 'black',
        marginBottom: 20,
      },
      imagePicker: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: Colors.dark.text,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      },
      imagePickerText: {
        color: Colors.dark.icon,
        fontSize: 14,
      },
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
      },
      saveButton: {
        backgroundColor: Colors.green.primary,
        width: "100%",
        marginTop: 16,
      },
      modalContainer: {
        backgroundColor: Colors.dark.background,
        padding: 20,
        borderRadius: 16,
        width: "80%",
        alignSelf: "center",
      },
      modalText: {
        fontSize: 20,
        color: Colors.dark.text,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
      },
      modalImage: {
        width: "100%",
        height: 200,
        borderRadius: 16,
        marginBottom: 16,
      },
      modalActions: {
        flexDirection: "row",
        justifyContent: "space-around",
      },
      modalButton: {
        backgroundColor: Colors.green.primary,
        width: 120,
      },
      cancelButton: {
        backgroundColor: Colors.dark.icon,
      },
})