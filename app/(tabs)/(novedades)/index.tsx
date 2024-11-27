import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { Colors } from "@/constants/Colors";

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
  { id: 1, nombre: "Erika", imagenPerfil: "https://source.unsplash.com/random/100x100", visto: true },
  { id: 2, nombre: "Osvaldo", imagenPerfil: "https://example.com/imagen-osvaldo.jpg", visto: true },
  { id: 3, nombre: "Javier", imagenPerfil: "https://example.com/imagen-javier.jpg", visto: true },
  { id: 4, nombre: "Ana", imagenPerfil: "https://example.com/imagen-ana.jpg", visto: true },
  { id: 5, nombre: "Andrea", imagenPerfil: "https://example.com/imagen-ana.jpg", visto: true },
  { id: 6, nombre: "Cesar", imagenPerfil: "https://example.com/imagen-ana.jpg", visto: false },
  { id: 7, nombre: "Oliver", imagenPerfil: "https://example.com/imagen-ana.jpg", visto: false },
  { id: 8, nombre: "Carlos", imagenPerfil: "https://example.com/imagen-ana.jpg", visto: false },
  { id: 9, nombre: "Vanessa", imagenPerfil: "https://example.com/imagen-ana.jpg", visto: false },
  { id: 10, nombre: "Talmantes", imagenPerfil: "https://example.com/imagen-ana.jpg", visto: false },
  { id: 11, nombre: "Gavi", imagenPerfil: "https://example.com/imagen-ana.jpg", visto: false },
  { id: 12, nombre: "Tavo", imagenPerfil: "https://example.com/imagen-ana.jpg", visto: false },
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
  return (
    <View style={styles.container}>
      {/* Estados */}
      <Text style={styles.sectionTitle}>Estados</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.estadoScroll}>
        {mockEstados.map((estado, index) => (
          <View key={index} style={styles.estadoItem}>
            <Image source={{ uri: estado.imagenPerfil }} style={[styles.estadoImagen, estado.visto ? styles.visto : styles.noVisto]} />
            <Text style={styles.estadoNombre}>{estado.nombre}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Canales */}
      <Text style={styles.sectionTitle}>Canales</Text>
      <FlatList
        data={mockCanales}
        renderItem={({ item }) => (
          <View style={styles.canalItem}>
            <Image source={{ uri: item.imagen }} style={styles.canalImagen} />

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

          </View>
        )}
        keyExtractor={(item) => item.nombre}
      />

      {/* Canales sugeridos */}
      <Text style={styles.sectionTitle}>Busca canales para seguir</Text>
      <FlatList
        data={mockCanalesSugeridos}
        renderItem={({ item }) => (
          <View style={styles.canalSugeridoItem}>

            <Image source={{ uri: item.imagen }} style={styles.canalImagen} />

            <View style={styles.canalInfo}>
              <Text style={styles.canalNombre}>{item.nombre}</Text>
              <Text style={styles.canalSeguidores}>{item.seguidores}</Text>
            </View>

            <TouchableOpacity style={styles.seguirButton}>
              <Text style={styles.seguirButtonText}>{item.seguido ? "Siguiendo" : "Seguir"}</Text>
            </TouchableOpacity>

          </View>
        )}
        keyExtractor={(item) => item.nombre}
      />
      <TouchableOpacity style={styles.explorarMas}>
        <Text style={styles.explorarMasText}>Explorar más</Text>
      </TouchableOpacity>
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
    borderBottomColor: Colors.dark.icon,
    borderBottomWidth: 1,
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
