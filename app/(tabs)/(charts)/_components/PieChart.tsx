import { View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Card, Input, Text } from "react-native-elements";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Button, IconButton, TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const MESSAGES_DATA = [
  {
    name: "Juan",
    population: 232,
    color: Colors.green.secondary,
    legendFontColor: "#fff",
    legendFontSize: 15,
  },
  {
    name: "Pedro",
    population: 120,
    color: Colors.green.textPrimary,
    legendFontColor: "#fff",
    legendFontSize: 15,
  },
  {
    name: "Maria",
    population: 80,
    color: Colors.green.accent,
    legendFontColor: "#fff",
    legendFontSize: 15,
  },
  {
    name: "Jose",
    population: 30,
    color: Colors.green.textSecondary,
    legendFontColor: "#fff",
    legendFontSize: 15,
  },
  {
    name: "Otros",
    population: 20,
    color: Colors.green.border,
    legendFontColor: "#fff",
    legendFontSize: 15,
  },
];

const colors = [
  Colors.orange[100],
  Colors.orange[200],
  Colors.orange[300],
  Colors.orange[400],
  Colors.orange[500],
  Colors.orange[600],
  Colors.orange[700],
  Colors.orange[800],
  Colors.orange[900],
];

export default function PieChartComponent({
  chartConfig,
  messages,
}: {
  chartConfig: any;
  messages: {
    juan: number;
    pedro: number;
    maria: number;
    jose: number;
    otros: number;
  };
}) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const data = [
    {
      name: "Juan",
      population: messages["juan"],
      color: Colors.green.secondary,
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "Pedro",
      population: messages["pedro"],
      color: Colors.green.textPrimary,
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "Maria",
      population: messages["maria"],
      color: Colors.green.accent,
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "Jose",
      population: messages["jose"],
      color: Colors.green.textSecondary,
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "Otros",
      population: messages["otros"],
      color: Colors.green.border,
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
  ];

  const handleLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    setWidth(width);
    setHeight(height);
  };

  return (
    <>
      <Text
        style={{
          color: Colors.green.primary,
          textAlign: "center",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        Mensajes por persona al dia
      </Text>
      <View style={{ flex: 1 }} onLayout={handleLayout}>
        <PieChart
          data={data}
          width={width}
          height={height}
          chartConfig={{
            ...chartConfig,
            barPercentage: 0.2,
          }}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          style={{
            backgroundColor: "transparent",
          }}
        />
      </View>
    </>
  );
}
