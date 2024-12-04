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
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Button, IconButton } from "react-native-paper";

//make whatsapp messages image, name, status, messasge, time, unread messages
export interface Contact {
  id: number;
  name: string;
  image: string;
  status: "send" | "send-receiving" | "readed";
  message: string;
  time: string;
  unreadMessage: number;
}

export const contacts: Contact[] = [
  {
    id: 1,
    name: "Alice Johnson",
    image: "https://source.unsplash.com/random/200x200?person-1",
    status: "readed",
    message: "Hi! How are you doing?",
    time: "10:30 AM",
    unreadMessage: 0,
  },
  {
    id: 2,
    name: "Bob Smith",
    image: "https://source.unsplash.com/random/200x200?person-2",
    status: "send",
    message: "Can we meet tomorrow?",
    time: "9:45 AM",
    unreadMessage: 1,
  },
  {
    id: 3,
    name: "Carla Perez",
    image: "https://source.unsplash.com/random/200x200?person-3",
    status: "send-receiving",
    message: "Don't forget the meeting.",
    time: "8:00 AM",
    unreadMessage: 3,
  },
  {
    id: 4,
    name: "Daniel Lee",
    image: "https://source.unsplash.com/random/200x200?person-4",
    status: "readed",
    message: "Let's grab lunch!",
    time: "Yesterday",
    unreadMessage: 0,
  },
  {
    id: 5,
    name: "Charlie Davis",
    image: "https://source.unsplash.com/random/200x200?person-3",
    status: "send-receiving",
    message: "Sure, let me check my schedule.",
    time: "9:15 AM",
    unreadMessage: 1,
  },
  {
    id: 6,
    name: "Diana Wilson",
    image: "https://source.unsplash.com/random/200x200?person-4",
    status: "readed",
    message: "I'll call you later.",
    time: "8:50 AM",
    unreadMessage: 0,
  },
  {
    id: 7,
    name: "Edward Brown",
    image: "https://source.unsplash.com/random/200x200?person-5",
    status: "send",
    message: "Don't forget the meeting.",
    time: "8:00 AM",
    unreadMessage: 2,
  },
  {
    id: 8,
    name: "Fiona Garcia",
    image: "https://source.unsplash.com/random/200x200?person-6",
    status: "readed",
    message: "Thanks for the update!",
    time: "Yesterday",
    unreadMessage: 0,
  },
  {
    id: 9,
    name: "George Miller",
    image: "https://source.unsplash.com/random/200x200?person-7",
    status: "send-receiving",
    message: "Please review the document.",
    time: "Yesterday",
    unreadMessage: 3,
  },
  {
    id: 10,
    name: "Hannah Martinez",
    image: "https://source.unsplash.com/random/200x200?person-8",
    status: "readed",
    message: "Good morning!",
    time: "Yesterday",
    unreadMessage: 0,
  },
  {
    id: 11,
    name: "Ian Thomas",
    image: "https://source.unsplash.com/random/200x200?person-9",
    status: "send",
    message: "Let's catch up soon.",
    time: "Yesterday",
    unreadMessage: 1,
  },
  {
    id: 12,
    name: "Julia White",
    image: "https://source.unsplash.com/random/200x200?person-10",
    status: "send-receiving",
    message: "Can you send me the files?",
    time: "2 days ago",
    unreadMessage: 2,
  },
  {
    id: 13,
    name: "Kevin Taylor",
    image: "https://source.unsplash.com/random/200x200?person-11",
    status: "readed",
    message: "All set for the presentation.",
    time: "2 days ago",
    unreadMessage: 0,
  },
  {
    id: 14,
    name: "Laura Anderson",
    image: "https://source.unsplash.com/random/200x200?person-12",
    status: "send",
    message: "I'll be there in 10 mins.",
    time: "3 days ago",
    unreadMessage: 0,
  },
  {
    id: 15,
    name: "Michael Lee",
    image: "https://source.unsplash.com/random/200x200?person-13",
    status: "send-receiving",
    message: "Let me confirm and get back.",
    time: "4 days ago",
    unreadMessage: 1,
  },
  {
    id: 16,
    name: "Nina Harris",
    image: "https://source.unsplash.com/random/200x200?person-14",
    status: "readed",
    message: "Thanks for your help!",
    time: "4 days ago",
    unreadMessage: 0,
  },
  {
    id: 17,
    name: "Oscar Clark",
    image: "https://source.unsplash.com/random/200x200?person-15",
    status: "send",
    message: "Can you review the contract?",
    time: "5 days ago",
    unreadMessage: 1,
  },
];

export default function Chats() {
  const router = useRouter();

  return (
    <View style={{ backgroundColor: "#121B22", flex: 1, position: "relative" }}>
      <ScrollView>
        {contacts.map((contact, index) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ScrollView>

      <IconButton
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          backgroundColor: Colors.green.primary,
          borderRadius: 10,
        }}
        onPress={() => {
          router.navigate({
            pathname: "/crearContacto",
          });
        }}
        icon={"plus"}
      />
    </View>
  );
}

function ContactItem({ contact }: { contact: Contact }) {
  const router = useRouter();

  return (
    <Button
      onPress={(e) =>
        router.navigate({
          pathname: "/[id]",
          params: { id: contact.id, title: contact.name },
        })
      }
      style={{
        padding: 0,
        margin: 0,
        width: "100%",
      }}
      labelStyle={{
        padding: 0,
        margin: 0,
        flex: 1,
      }}
    >
      <View
        style={[
          styles.contactContainer,
          {
            flex: 1,
            width: "100%",
            paddingHorizontal: 8,
            paddingVertical: 16,
          },
        ]}
      >
        <View style={{ backgroundColor: "#999", borderRadius: 40 }}>
          <Image
            source={{ uri: contact.image }}
            style={{ width: 48, height: 48, borderRadius: 24 }}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 16, alignItems: "flex-start" }}>
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
      </View>
    </Button>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
});
