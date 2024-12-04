import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PieChartComponent from "./_components/PieChart";
import BarChartComponent from "./_components/BarChart";

export const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const Charts = () => {
  return (
    <View style={{ backgroundColor: "#121B22", flex: 1 }}>
      <PieChartComponent />
      <BarChartComponent />
    </View>
  );
};

export default Charts;

const styles = StyleSheet.create({});

// crea una const data que contenga informacion acerca de las peresonas con las que mas chateo
