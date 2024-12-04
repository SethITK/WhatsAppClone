import { View, Text } from "react-native";
import React, { useState } from "react";
import { LineChart } from "react-native-chart-kit";

//conectividad en whatsapp de la semana
interface LineChartProps {
  chartConfig: any;
  timeByDay: {
    lunes: number;
    martes: number;
    miercoles: number;
    jueves: number;
    viernes: number;
    sabado: number;
    domingo: number;
  };
}

export default function LineChartComponent({
  chartConfig,
  timeByDay,
}: LineChartProps) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const data = {
    labels: [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ],
    datasets: [
      {
        data: [
          timeByDay["lunes"],
          timeByDay["martes"],
          timeByDay["miercoles"],
          timeByDay["jueves"],
          timeByDay["viernes"],
          timeByDay["sabado"],
          timeByDay["domingo"],
        ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Tiempo usado en whatsapp"], // optional
  };

  const handleLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    setWidth(width);
    setHeight(height);
  };

  return (
    <>
      <View style={{ flex: 1 }} onLayout={handleLayout}>
        <LineChart
          data={data}
          width={350}
          height={220}
          chartConfig={{
            ...chartConfig,
            decimalPlaces: 0,
          }}
          withDots={true}
          withVerticalLabels={true}
          withVerticalLines={true}
        />
      </View>
    </>
  );
}
