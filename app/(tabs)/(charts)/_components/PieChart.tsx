import { View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Card } from "react-native-elements";
import { chartConfig } from "..";
import { Colors } from "@/constants/Colors";
import { useState } from "react";

const data = [
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

export default function PieChartComponent() {
  const [width, setWidth] = useState(0);

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setWidth(width);
  };

  return (
    <Card
      wrapperStyle={{
        padding: 12,
      }}
      containerStyle={{
        borderRadius: 16,
        backgroundColor: "#1E2923",
        borderColor: "#1E2923",
      }}
    >
      <Card.Title
        style={{
          color: Colors.green.primary,
        }}
      >
        Mensajes por persona al dia
      </Card.Title>
      <View style={{ flex: 1 }} onLayout={handleLayout}>
        <PieChart
          data={data}
          width={width}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          absolute
        />
      </View>
    </Card>
  );
}
