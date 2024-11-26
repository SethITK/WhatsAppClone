import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  Touchable,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

//make whatsapp messages image, name, status, messasge, time, unread messages
interface Contact {
  name: string;
  image: string;
  status: "send" | "send-receiving" | "readed";
  message: string;
  time: string;
  unreadMessage: number;
}

const contacts: Contact[] = [
  {
    name: "Alice Johnson",
    image: "https://source.unsplash.com/random/200x200?person-1",
    status: "readed",
    message: "Hi! How are you doing?",
    time: "10:30 AM",
    unreadMessage: 0,
  },
  {
    name: "Bob Smith",
    image: "https://source.unsplash.com/random/200x200?person-2",
    status: "send",
    message: "Can we meet tomorrow?",
    time: "9:45 AM",
    unreadMessage: 1,
  },
  {
    name: "Carla Perez",
    image: "https://source.unsplash.com/random/200x200?person-3",
    status: "send-receiving",
    message: "Don't forget the meeting.",
    time: "8:00 AM",
    unreadMessage: 3,
  },
  {
    name: "Daniel Lee",
    image: "https://source.unsplash.com/random/200x200?person-4",
    status: "readed",
    message: "Let's grab lunch!",
    time: "Yesterday",
    unreadMessage: 0,
  },
  {
    name: "Charlie Davis",
    image: "https://source.unsplash.com/random/200x200?person-3",
    status: "send-receiving",
    message: "Sure, let me check my schedule.",
    time: "9:15 AM",
    unreadMessage: 1,
  },
  {
    name: "Diana Wilson",
    image: "https://source.unsplash.com/random/200x200?person-4",
    status: "readed",
    message: "I'll call you later.",
    time: "8:50 AM",
    unreadMessage: 0,
  },
  {
    name: "Edward Brown",
    image: "https://source.unsplash.com/random/200x200?person-5",
    status: "send",
    message: "Don't forget the meeting.",
    time: "8:00 AM",
    unreadMessage: 2,
  },
  {
    name: "Fiona Garcia",
    image: "https://source.unsplash.com/random/200x200?person-6",
    status: "readed",
    message: "Thanks for the update!",
    time: "Yesterday",
    unreadMessage: 0,
  },
  {
    name: "George Miller",
    image: "https://source.unsplash.com/random/200x200?person-7",
    status: "send-receiving",
    message: "Please review the document.",
    time: "Yesterday",
    unreadMessage: 3,
  },
  {
    name: "Hannah Martinez",
    image: "https://source.unsplash.com/random/200x200?person-8",
    status: "readed",
    message: "Good morning!",
    time: "Yesterday",
    unreadMessage: 0,
  },
  {
    name: "Ian Thomas",
    image: "https://source.unsplash.com/random/200x200?person-9",
    status: "send",
    message: "Let's catch up soon.",
    time: "Yesterday",
    unreadMessage: 1,
  },
  {
    name: "Julia White",
    image: "https://source.unsplash.com/random/200x200?person-10",
    status: "send-receiving",
    message: "Can you send me the files?",
    time: "2 days ago",
    unreadMessage: 2,
  },
  {
    name: "Kevin Taylor",
    image: "https://source.unsplash.com/random/200x200?person-11",
    status: "readed",
    message: "All set for the presentation.",
    time: "2 days ago",
    unreadMessage: 0,
  },
  {
    name: "Laura Anderson",
    image: "https://source.unsplash.com/random/200x200?person-12",
    status: "send",
    message: "I'll be there in 10 mins.",
    time: "3 days ago",
    unreadMessage: 0,
  },
  {
    name: "Michael Lee",
    image: "https://source.unsplash.com/random/200x200?person-13",
    status: "send-receiving",
    message: "Let me confirm and get back.",
    time: "4 days ago",
    unreadMessage: 1,
  },
  {
    name: "Nina Harris",
    image: "https://source.unsplash.com/random/200x200?person-14",
    status: "readed",
    message: "Thanks for your help!",
    time: "4 days ago",
    unreadMessage: 0,
  },
  {
    name: "Oscar Clark",
    image: "https://source.unsplash.com/random/200x200?person-15",
    status: "send",
    message: "Can you review the contract?",
    time: "5 days ago",
    unreadMessage: 1,
  },
];

export default function Chats() {
  return (
    <View style={{ backgroundColor: "#121B22" }}>
      <ScrollView>
        <View>
          {contacts.map((contact, index) => (
            <View>
              <ContactItem key={index} contact={contact} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function ContactItem({ contact }: { contact: Contact }) {
  return (
    <TouchableOpacity style={styles.contactContainer}>
      <View style={{ backgroundColor: "#999", borderRadius: 40 }}>
        <Image
          source={{ uri: contact.image }}
          style={{ width: 48, height: 48, borderRadius: 24 }}
        />
      </View>
      <View style={{ flex: 1, marginLeft: 16 }}>
        <Text style={{ fontWeight: "bold", color: "#fff" }}>
          {contact.name}
        </Text>
        <Text
          style={{
            color: "#999",
          }}
        >
          {contact.message}
        </Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text
          style={{
            color: contact.unreadMessage ? Colors.green.primary : "#fff",
          }}
        >
          {contact.time}
        </Text>
        {contact.unreadMessage > 0 && (
          <View
            style={{
              backgroundColor: Colors.green.primary,
              borderRadius: 20,
              padding: 4,
              aspectRatio: 1,
              paddingHorizontal: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{}}>{contact.unreadMessage}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
});
