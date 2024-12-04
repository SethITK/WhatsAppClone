import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-elements";
import { Colors } from "@/constants/Colors";
import { BarChart } from "react-native-chart-kit";
import { chartConfig } from "..";
import { color } from "react-native-elements/dist/helpers";

const BarChartComponent = () => {
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
        Mensajes enviados por mes
      </Card.Title>
      <View style={{ flex: 1 }} onLayout={handleLayout}>
        <BarChart
          style={graphStyle}
          data={{
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                color(opacity) {
                  return Colors.green.textPrimary;
                },
              },
            ],
          }}
          width={width}
          height={220}
          yLabelsOffset={30}
          chartConfig={{
            ...chartConfig,
            color(opacity, index) {
              return "#999";
            },
          }}
          verticalLabelRotation={30}
        />
      </View>
    </Card>
  );
};

const graphStyle = {
  marginVertical: 8,
  borderRadius: 16,
};

export default BarChartComponent;

const styles = StyleSheet.create({});
