/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  green: {
    primary: "#25D366", // Verde principal de WhatsApp
    secondary: "#128C7E", // Verde oscuro para encabezados o botones activos
    accent: "#FFEB3B", // Amarillo para elementos destacados
    background: "#ECE5DD", // Fondo principal de la aplicación
    chatBackground: "#FFFFFF", // Fondo de los chats
    textPrimary: "#075E54", // Texto principal
    textSecondary: "#434343", // Texto secundario
    border: "#DADADA", // Bordes y separadores
    inputBackground: "#F0F0F0", // Fondo de los campos de entrada
  }
};
