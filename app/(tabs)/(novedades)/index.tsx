import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Colors } from "@/constants/Colors";
import { IconButton } from "react-native-paper";

import { useRouter } from "expo-router";

interface Estado {
  id: number;
  nombre: string;
  imagenPerfil: string;
  visto: boolean;
}

interface Canal {
  id: number;
  nombre: string;
  imagen: string;
  mensajeReciente: string;
  horaActualizacion: string;
  mensajesNoLeidos: number;
}

interface CanalSugerido {
  id: number;
  nombre: string;
  imagen: string;
  seguidores: string;
  seguido: boolean;
}

// Mock data
const mockEstados: Estado[] = [
  { id: 1, nombre: "Erika", imagenPerfil: require('../../../assets/images/claudio-schwarz-QDPH5m4h3XI-unsplash.jpg'), visto: true },
  { id: 2, nombre: "Osvaldo", imagenPerfil: require('../../../assets/images/clay-banks-haJdK-oucKg-unsplash.jpg'), visto: true },
  { id: 3, nombre: "Javier", imagenPerfil: require('../../../assets/images/dean-rose-M1tblS6U3Bo-unsplash.jpg'), visto: true },
  { id: 4, nombre: "Ana", imagenPerfil: require('../../../assets/images/eric-lee-ss8Dka_Tvwg-unsplash.jpg'), visto: true },
  { id: 5, nombre: "Andrea", imagenPerfil: require('../../../assets/images/hanvin-cheong-2VDyy131HWE-unsplash.jpg'), visto: true },
  { id: 6, nombre: "Cesar", imagenPerfil: require('../../../assets/images/harman-sandhu-FpYoDqGGI4A-unsplash.jpg'), visto: false },  
  { id: 7, nombre: "Oliver", imagenPerfil: require('../../../assets/images/krismas-JGLLU1YNxU4-unsplash.jpg'), visto: false },
  { id: 8, nombre: "Carlos", imagenPerfil: require('../../../assets/images/chatgBg.jpg'), visto: false },
];

const mockCanales: Canal[] = [
  {
    id: 1,
    nombre: "PromosTop Mx",
    imagen: "https://source.unsplash.com/3tYZjGSBwbk",
    mensajeReciente: "$58 https://amzn.to/3V9jV23",
    horaActualizacion: "12:53 p.m.",
    mensajesNoLeidos: 16
  },
  {
    id: 1,
    nombre: "FC Barcelona",
    imagen: "https://example.com/imagen-fcbarcelona.jpg",
    mensajeReciente: "🔴🔵 BARÇA XI!",
    horaActualizacion: "12:48 p.m.",
    mensajesNoLeidos: 7
  },
  {
    id: 1,
    nombre: "WhatsApp",
    imagen: "https://example.com/imagen-whatsapp.jpg",
    mensajeReciente: "The Feature Ft. Joe Ando -...",
    horaActualizacion: "Ayer",
    mensajesNoLeidos: 2
  },
];

const mockCanalesSugeridos: CanalSugerido[] = [
  {
    id: 1,
    nombre: "Akshay Kumar",
    imagen: "https://example.com/imagen-akshay.jpg",
    seguidores: "10.1 mill. seguidores",
    seguido: false
  },
  {
    id: 1,
    nombre: "CNET",
    imagen: "https://example.com/imagen-cnet.jpg",
    seguidores: "5.6 mill. seguidores",
    seguido: true
  },
  {
    id: 1,
    nombre: "Tech Insider",
    imagen: "https://example.com/imagen-techinsider.jpg",
    seguidores: "8.3 mill. seguidores",
    seguido: false
  },
];

const Novedades = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Estados */}
      <Text style={styles.sectionTitle}>Estados</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.estadoScroll}>
        {mockEstados.map((estado, index) => (
          <TouchableOpacity key={index} style={styles.estadoItem}>
            <ImageBackground source={estado.imagenPerfil} style={[styles.estadoImagen, estado.visto ? styles.visto : styles.noVisto]} imageSt le={{ borderRadius: 40 }} />
            <Text style={styles.estadoNombre}>{estado.nombre}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Canales */}
      <Text style={styles.sectionTitle}>Canales</Text>
      <FlatList
        data={mockCanales}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.canalItem}>
            <ImageBackground source={{ uri: item.imagen }} style={styles.canalImagen} />

            <View style={styles.canalInfo}>
              <Text style={styles.canalNombre}>{item.nombre}</Text>
              <Text style={styles.canalMensaje}>{item.mensajeReciente}</Text>
            </View>

            <View style={styles.canalExtra}>
              <Text style={styles.canalHora}>{item.horaActualizacion}</Text>
              {item.mensajesNoLeidos > 0 && (
                <View style={styles.canalBadge}>
                  <Text style={styles.canalBadgeText}>{item.mensajesNoLeidos}</Text>
                </View>
              )}
            </View>

          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.nombre}
      />

      {/* Canales sugeridos */}
      <Text style={styles.sectionTitle}>Busca canales para seguir</Text>
      <FlatList
        data={mockCanalesSugeridos}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.canalSugeridoItem}>

            <ImageBackground source={{ uri: item.imagen }} style={styles.canalImagen} />

            <View style={styles.canalInfo}>
              <Text style={styles.canalNombre}>{item.nombre}</Text>
              <Text style={styles.canalSeguidores}>{item.seguidores}</Text>
            </View>

            <TouchableOpacity style={styles.seguirButton}>
              <Text style={styles.seguirButtonText}>{item.seguido ? "Siguiendo" : "Seguir"}</Text>
            </TouchableOpacity>

          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.nombre}
      />
      <TouchableOpacity style={styles.explorarMas}>
        <Text style={styles.explorarMasText}>Explorar más</Text>
      </TouchableOpacity>

      <IconButton
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          backgroundColor: Colors.green.primary,
          borderRadius: 10,
        }}
        onPress={() => {
          router.navigate({
            pathname: "/crearEstado",
          });
        }}
        icon={"plus"}
      />
    </View>
  );
};

export default Novedades;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121B22',
    padding: 16,
  },
  sectionTitle: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  estadoScroll: {
    flexDirection: 'row',
  },
  estadoItem: {
    alignItems: 'center',
    marginRight: 12,
  },
  estadoImagen: {
    width: 70,
    height: 70, 
    borderRadius: 40,
    borderWidth: 2,
    overflow: 'hidden'
  },
  visto: {
    borderColor: Colors.green.primary,
  },
  noVisto: {
    borderColor: Colors.dark.icon,
  },
  estadoNombre: {
    color: Colors.dark.text,
    marginTop: 4,
    fontSize: 12,
  },
  canalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  canalImagen: {
    backgroundColor: Colors.green.textSecondary,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  canalInfo: {
    flex: 1,
    marginLeft: 12,
  },
  canalNombre: {
    color: Colors.dark.text,
    fontWeight: 'bold',
    fontSize: 14,
  },
  canalMensaje: {
    color: Colors.dark.icon,
    fontSize: 13,
  },
  canalExtra: {
    alignItems: 'flex-end',
  },
  canalHora: {
    color: Colors.green.primary,
    fontSize: 12,
  },
  canalBadge: {
    backgroundColor: Colors.green.primary,
    borderRadius: 30,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 4,
  },
  canalBadgeText: {
    color: '#121B22',
    fontSize: 11,
  },
  canalSugeridoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  canalSeguidores: {
    color: Colors.dark.icon,
    fontSize: 12,
  },
  seguirButton: {
    backgroundColor: 'rgba(37, 211, 102, .4)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 25,
  },
  seguirButtonText: {
    color: '#dbead5',
    fontSize: 12,
  },
  explorarMas: {
    display: 'flex',
    alignItems: 'center',
    width: 120,
    borderWidth: 1,
    borderColor: Colors.dark.icon,
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 5
  },
  explorarMasText: {
    fontSize: 14,
    color: Colors.green.primary
  } 
});
