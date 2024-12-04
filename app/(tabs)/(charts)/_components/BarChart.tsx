import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-elements";
import { Colors } from "@/constants/Colors";
import { BarChart } from "react-native-chart-kit";
import { color } from "react-native-elements/dist/helpers";

const BarChartComponent = ({
  chartConfig,
  messagesByMonth,
}: {
  chartConfig: any;
  messagesByMonth: {
    enero: number;
    febrero: number;
    marzo: number;
    abril: number;
    mayo: number;
    junio: number;
  };
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

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
        Mensajes Enviados por Mes
      </Text>
      <View style={{ flex: 1 }} onLayout={handleLayout}>
        <BarChart
          yAxisLabel=""
          yAxisSuffix="M"
          style={graphStyle}
          data={{
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
            datasets: [
              {
                data: [
                  messagesByMonth["enero"],
                  messagesByMonth["febrero"],
                  messagesByMonth["marzo"],
                  messagesByMonth["abril"],
                  messagesByMonth["mayo"],
                  messagesByMonth["junio"],
                ],
                color(opacity) {
                  return Colors.green.textPrimary;
                },
              },
            ],
          }}
          height={height}
          width={width}
          yLabelsOffset={30}
          chartConfig={{
            ...chartConfig,
            color(opacity, index) {
              return "#999";
            },
            barPercentage: 1,
            decimalPlaces: 0,
          }}
          verticalLabelRotation={30}
        />
      </View>
    </>
  );
};

const graphStyle = {
  marginVertical: 8,
  borderRadius: 16,
};

export default BarChartComponent;

const styles = StyleSheet.create({});
