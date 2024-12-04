import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PieChartComponent from "./_components/PieChart";
import BarChartComponent from "./_components/BarChart";
import { TextInput } from "react-native-paper";
import { Input } from "react-native-elements";
import LineChartComponent from "./_components/LineChart";

const Charts = () => {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const [messages, setMessages] = useState<{
    juan: number;
    pedro: number;
    maria: number;
    jose: number;
    otros: number;
  }>({
    juan: 232,
    pedro: 120,
    maria: 80,
    jose: 30,
    otros: 20,
  });

  const [messagesByMonth, setMessagesByMonth] = useState({
    enero: 20,
    febrero: 45,
    marzo: 28,
    abril: 80,
    mayo: 99,
    junio: 43,
  });

  const [timeByDay, setTimeByDay] = useState({
    lunes: 20,
    martes: 45,
    miercoles: 28,
    jueves: 80,
    viernes: 99,
    sabado: 43,
    domingo: 20,
  });

  return (
    <ScrollView
      style={{ backgroundColor: "#121B22", padding: 16, paddingVertical: 30 }}
    >
      <View style={{ gap: 20, marginBottom: 60 }}>
        <View
          style={{
            borderRadius: 16,
            backgroundColor: "#1E2923",
            borderColor: "#1E2923",
            padding: 10,
          }}
        >
          <View
            style={{
              height: 250,
            }}
          >
            <PieChartComponent messages={messages} chartConfig={chartConfig} />
          </View>
          <View style={{ gap: 8 }}>
            <Input
              inputStyle={{ color: "#fff" }}
              label="Juan"
              value={messages.juan.toString()}
              onChangeText={(text) =>
                setMessages({ ...messages, juan: text ? parseInt(text) : 0 })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Pedro"
              value={messages.pedro.toString()}
              onChangeText={(text) =>
                setMessages({ ...messages, pedro: text ? parseInt(text) : 0 })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Maria"
              value={messages.maria.toString()}
              onChangeText={(text) =>
                setMessages({ ...messages, maria: text ? parseInt(text) : 0 })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Jose"
              value={messages.jose.toString()}
              onChangeText={(text) =>
                setMessages({ ...messages, jose: text ? parseInt(text) : 0 })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Otros"
              value={messages.otros.toString()}
              onChangeText={(text) =>
                setMessages({ ...messages, otros: text ? parseInt(text) : 0 })
              }
            />
          </View>
        </View>
        <View
          style={{
            borderRadius: 16,
            backgroundColor: "#1E2923",
            borderColor: "#1E2923",
            padding: 10,
          }}
        >
          <View
            style={{
              height: 250,
            }}
          >
            <BarChartComponent
              messagesByMonth={messagesByMonth}
              chartConfig={chartConfig}
            />
          </View>
          <View style={{ marginTop: 40, gap: 8 }}>
            <Input
              inputStyle={{ color: "#fff" }}
              label="Enero"
              value={messagesByMonth.enero.toString()}
              onChangeText={(text) =>
                setMessagesByMonth({
                  ...messagesByMonth,
                  enero: text ? parseInt(text) : 0,
                })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Febrero"
              value={messagesByMonth.febrero.toString()}
              onChangeText={(text) =>
                setMessagesByMonth({
                  ...messagesByMonth,
                  febrero: text ? parseInt(text) : 0,
                })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Marzo"
              value={messagesByMonth.marzo.toString()}
              onChangeText={(text) =>
                setMessagesByMonth({
                  ...messagesByMonth,
                  marzo: text ? parseInt(text) : 0,
                })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Abril"
              value={messagesByMonth.abril.toString()}
              onChangeText={(text) =>
                setMessagesByMonth({
                  ...messagesByMonth,
                  abril: text ? parseInt(text) : 0,
                })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Mayo"
              value={messagesByMonth.mayo.toString()}
              onChangeText={(text) =>
                setMessagesByMonth({
                  ...messagesByMonth,
                  mayo: text ? parseInt(text) : 0,
                })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Junio"
              value={messagesByMonth.junio.toString()}
              onChangeText={(text) =>
                setMessagesByMonth({
                  ...messagesByMonth,
                  junio: text ? parseInt(text) : 0,
                })
              }
            />
          </View>
        </View>

        {/* Line Chart */}
        <View
          style={{
            borderRadius: 16,
            backgroundColor: "#1E2923",
            borderColor: "#1E2923",
            padding: 10,
          }}
        >
          <View
            style={{
              height: 250,
            }}
          >
            <LineChartComponent
              chartConfig={chartConfig}
              timeByDay={timeByDay}
            />
          </View>

          <View>
            <Input
              inputStyle={{ color: "#fff" }}
              label="Lunes"
              value={timeByDay.lunes.toString()}
              onChangeText={(text) =>
                setTimeByDay({
                  ...timeByDay,
                  lunes: text ? parseInt(text) : 0,
                })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Martes"
              value={timeByDay.martes.toString()}
              onChangeText={(text) =>
                setTimeByDay({
                  ...timeByDay,
                  martes: text ? parseInt(text) : 0,
                })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Miercoles"
              value={timeByDay.miercoles.toString()}
              onChangeText={(text) =>
                setTimeByDay({
                  ...timeByDay,
                  miercoles: text ? parseInt(text) : 0,
                })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Jueves"
              value={timeByDay.jueves.toString()}
              onChangeText={(text) =>
                setTimeByDay({
                  ...timeByDay,
                  jueves: text ? parseInt(text) : 0,
                })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Viernes"
              value={timeByDay.viernes.toString()}
              onChangeText={(text) =>
                setTimeByDay({
                  ...timeByDay,
                  viernes: text ? parseInt(text) : 0,
                })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Sabado"
              value={timeByDay.sabado.toString()}
              onChangeText={(text) =>
                setTimeByDay({
                  ...timeByDay,
                  sabado: text ? parseInt(text) : 0,
                })
              }
            />
            <Input
              inputStyle={{ color: "#fff" }}
              label="Domingo"
              value={timeByDay.domingo.toString()}
              onChangeText={(text) =>
                setTimeByDay({
                  ...timeByDay,
                  domingo: text ? parseInt(text) : 0,
                })
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Charts;

const styles = StyleSheet.create({});

// crea una const data que contenga informacion acerca de las peresonas con las que mas chateo
