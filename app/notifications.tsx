import { FlatList, StyleSheet, Text, View } from "react-native";

export default function NotificationsScreen() {
  const notifications = [
    {
      id: "1",
      title: "Payment Received",
      desc: "You received $50 from John",
      time: "2 min ago",
    },
    {
      id: "2",
      title: "New Login",
      desc: "Your account was logged in from new device",
      time: "1 hour ago",
    },
    {
      id: "3",
      title: "Reminder",
      desc: "Your subscription is expiring soon",
      time: "1 day ago",
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Notifications</Text> */}

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  desc: {
    fontSize: 13,
    color: "#475569",
    marginTop: 4,
  },
  time: {
    fontSize: 11,
    color: "#94a3b8",
    marginTop: 6,
  },
});
