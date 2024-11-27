import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  useGlobalSearchParams,
  useLocalSearchParams,
  useNavigation,
  useRouter,
} from "expo-router";
import { Contact, contacts } from "../(tabs)/(chats)";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface Messages {
  id: number;
  message: string;
  time: string;
  isMyMessage: boolean;
}

const messagesByContactId: { [key: number]: Messages[] } = {
  1: [
    {
      id: 1,
      message: "Hi! How are you doing?",
      time: "10:30 AM",
      isMyMessage: false,
    },
    {
      id: 2,
      message: "I'm good, thank you!",
      time: "10:31 AM",
      isMyMessage: true,
    },
    { id: 3, message: "What about you?", time: "10:32 AM", isMyMessage: true },
    {
      id: 4,
      message: "I'm fine, thanks!",
      time: "10:33 AM",
      isMyMessage: false,
    },
    {
      id: 5,
      message: "Hi! How are you doing?",
      time: "10:34 AM",
      isMyMessage: false,
    },
  ],
  2: [
    {
      id: 2,
      message: "Sure, let me check my schedule.",
      time: "9:46 AM",
      isMyMessage: false,
    },
    {
      id: 3,
      message: "Thanks, let me know.",
      time: "9:47 AM",
      isMyMessage: true,
    },
    {
      id: 4,
      message: "I'm free after 3 PM.",
      time: "9:48 AM",
      isMyMessage: false,
    },
    {
      id: 5,
      message: "Great! Let's meet at 4 PM.",
      time: "9:49 AM",
      isMyMessage: true,
    },
    {
      id: 6,
      message: "Can we meet tomorrow?",
      time: "9:50 AM",
      isMyMessage: true,
    },
  ],
  3: [
    {
      id: 2,
      message: "I'll confirm the time.",
      time: "7:56 AM",
      isMyMessage: true,
    },
    { id: 3, message: "Please do.", time: "7:57 AM", isMyMessage: false },
    { id: 4, message: "Sure thing.", time: "7:58 AM", isMyMessage: true },
    {
      id: 5,
      message: "Don't forget the meeting.",
      time: "7:59 AM",
      isMyMessage: false,
    },
  ],
  4: [
    {
      id: 1,
      message: "Perfect. See you then. ",
      time: "Yesterday 11:30 AM",
      isMyMessage: false,
    },
    {
      id: 2,
      message: "Sounds good!",
      time: "Yesterday 11:32 AM",
      isMyMessage: true,
    },
    {
      id: 3,
      message: "What time?",
      time: "Yesterday 11:33 AM",
      isMyMessage: true,
    },
    {
      id: 4,
      message: "12:30 PM?",
      time: "Yesterday 11:34 AM",
      isMyMessage: false,
    },
    {
      id: 5,
      message: "Let's grab lunch!",
      time: "Yesterday 11:35 AM",
      isMyMessage: true,
    },
  ],
  5: [
    { id: 2, message: "Thanks!", time: "9:16 AM", isMyMessage: true },
    {
      id: 3,
      message: "I'll confirm soon.",
      time: "9:17 AM",
      isMyMessage: false,
    },
    {
      id: 4,
      message: "Sure, let me check my schedule.",
      time: "9:18 AM",
      isMyMessage: false,
    },
  ],
  6: [
    {
      id: 1,
      message: "Ejemplo de conversacion",
      time: "8:50 AM",
      isMyMessage: false,
    },
    {
      id: 2,
      message: "Alright, take care!",
      time: "8:51 AM",
      isMyMessage: true,
    },
    {
      id: 3,
      message: "I'll call you later.",
      time: "8:52 AM",
      isMyMessage: false,
    },
  ],
  7: [
    { id: 1, message: "Test.", time: "8:00 AM", isMyMessage: true },
    { id: 2, message: "I won't, thanks!", time: "8:01 AM", isMyMessage: false },
    {
      id: 3,
      message: "Don't forget the meeting.",
      time: "8:02 AM",
      isMyMessage: true,
    },
  ],
  8: [
    {
      id: 1,
      message: "Can you review the document?",
      time: "7:30 PM",
      isMyMessage: true,
    },
    {
      id: 2,
      message: "Sure, I'll do it later.",
      time: "7:31 PM",
      isMyMessage: false,
    },
    {
      id: 3,
      message: "Thanks, let me know your thoughts.",
      time: "7:32 PM",
      isMyMessage: true,
    },
    { id: 4, message: "Will do.", time: "7:33 PM", isMyMessage: false },
    {
      id: 5,
      message: "Please review the document.",
      time: "7:34 PM",
      isMyMessage: true,
    },
  ],
  9: [
    {
      id: 1,
      message: "Let's catch up soon.",
      time: "5:00 PM",
      isMyMessage: true,
    },
    {
      id: 2,
      message: "Absolutely! When are you free?",
      time: "5:01 PM",
      isMyMessage: false,
    },
    {
      id: 3,
      message: "How about this weekend?",
      time: "5:02 PM",
      isMyMessage: true,
    },
    {
      id: 4,
      message: "Perfect! Let me check my schedule.",
      time: "5:03 PM",
      isMyMessage: false,
    },
    {
      id: 5,
      message: "Let's catch up soon.",
      time: "5:04 PM",
      isMyMessage: true,
    },
  ],
  10: [
    {
      id: 1,
      message: "Can you send me the files?",
      time: "2 days ago",
      isMyMessage: true,
    },
    {
      id: 2,
      message: "Sure, I'll share them shortly.",
      time: "2 days ago",
      isMyMessage: false,
    },
    { id: 3, message: "Thanks!", time: "2 days ago", isMyMessage: true },
    {
      id: 4,
      message: "No problem. Let me know if you need anything else.",
      time: "2 days ago",
      isMyMessage: false,
    },
    {
      id: 5,
      message: "Can you send me the files?",
      time: "2 days ago",
      isMyMessage: true,
    },
  ],
  11: [
    {
      id: 1,
      message: "All set for the presentation.",
      time: "2 days ago",
      isMyMessage: true,
    },
    {
      id: 2,
      message: "Great! I'll join in soon.",
      time: "2 days ago",
      isMyMessage: false,
    },
    { id: 3, message: "See you there.", time: "2 days ago", isMyMessage: true },
    {
      id: 4,
      message: "Looking forward to it.",
      time: "2 days ago",
      isMyMessage: false,
    },
    {
      id: 5,
      message: "All set for the presentation.",
      time: "2 days ago",
      isMyMessage: true,
    },
  ],
  12: [
    {
      id: 1,
      message: "I'll be there in 10 mins.",
      time: "3 days ago",
      isMyMessage: true,
    },
    {
      id: 2,
      message: "Alright, see you soon.",
      time: "3 days ago",
      isMyMessage: false,
    },
    { id: 3, message: "Thanks!", time: "3 days ago", isMyMessage: true },
    { id: 4, message: "Drive safe.", time: "3 days ago", isMyMessage: false },
    {
      id: 5,
      message: "I'll be there in 10 mins.",
      time: "3 days ago",
      isMyMessage: true,
    },
  ],
  13: [
    {
      id: 1,
      message: "Let me confirm and get back.",
      time: "4 days ago",
      isMyMessage: true,
    },
    {
      id: 2,
      message: "Sure, no rush.",
      time: "4 days ago",
      isMyMessage: false,
    },
    { id: 3, message: "Thanks!", time: "4 days ago", isMyMessage: true },
    {
      id: 4,
      message: "Let me confirm and get back.",
      time: "4 days ago",
      isMyMessage: true,
    },
  ],
  14: [
    {
      id: 1,
      message: "Thanks for your help!",
      time: "4 days ago",
      isMyMessage: false,
    },
    {
      id: 2,
      message: "You're welcome!",
      time: "4 days ago",
      isMyMessage: true,
    },
    {
      id: 3,
      message: "I really appreciate it.",
      time: "4 days ago",
      isMyMessage: false,
    },
    { id: 4, message: "Happy to help!", time: "4 days ago", isMyMessage: true },
    {
      id: 5,
      message: "Thanks for your help!",
      time: "4 days ago",
      isMyMessage: false,
    },
  ],
  15: [
    {
      id: 1,
      message: "Can you review the contract?",
      time: "5 days ago",
      isMyMessage: true,
    },
    {
      id: 2,
      message: "Sure, I'll take a look.",
      time: "5 days ago",
      isMyMessage: false,
    },
    { id: 3, message: "Thanks!", time: "5 days ago", isMyMessage: true },
    {
      id: 4,
      message: "Can you review the contract?",
      time: "5 days ago",
      isMyMessage: true,
    },
  ],
};

export default function Messages() {
  const { id } = useGlobalSearchParams();
  const [contact, setContact] = useState<Contact | undefined>();
  const [messages, setMessages] = useState(
    messagesByContactId[parseInt(id as string)] || []
  );

  useEffect(() => {
    console.log("id", id);
    const contact = contacts.find(
      (contact) => contact.id === parseInt(id as string)
    );

    setMessages(messagesByContactId[parseInt(id as string)] || []);
    setContact(contact);
  }, [id]);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
        source={require("../../assets/images/chatgBg.jpg")}
      >
        {contact && (
          <View style={{ flex: 1 }}>
            {messages.map((message) => (
              <View
                key={message.id}
                style={{
                  flexDirection: message.isMyMessage ? "row-reverse" : "row",
                  padding: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: message.isMyMessage
                      ? "#056162"
                      : "#121B22",
                    borderRadius: 10,
                    padding: 10,
                  }}
                >
                  <Text style={{ color: "#fff" }}>{message.message}</Text>
                  <Text
                    style={{ color: "#999", fontSize: 10, textAlign: "right" }}
                  >
                    {message.time}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={{ flexDirection: "row", margin: 6 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#1E2A32",
                borderRadius: 10,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                padding: 10,
                borderWidth: 0,
                outlineColor: "transparent",
              }}
            >
              <MaterialIcons name="face" size={20} color={"#999"} />
            </View>
            <TextInput
              placeholder="Mensaje"
              placeholderTextColor={"#999"}
              style={{
                backgroundColor: "#1E2A32",
                flex: 1,
                padding: 10,
                borderWidth: 0,
                outline: 0,
                color: "#fff",
              }}
            />

            <View
              style={{
                flexDirection: "row",
                gap: 16,
                backgroundColor: "#1E2A32",
                borderRadius: 10,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                padding: 10,
              }}
            >
              <TouchableOpacity>
                <MaterialIcons name="attach-file" size={24} color={"#999"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="camera-alt" size={24} color={"#999"} />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              backgroundColor: Colors.green.primary,
              borderRadius: 50,
              padding: 10,
              marginLeft: 6,
            }}
          >
            <MaterialIcons name="mic" size={24} color={"#000"} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
