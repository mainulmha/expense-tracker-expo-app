import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  color: string;
  amount: number;
};

export default function CustomCard({ label, icon, color, amount }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.cardLabel}>{label}</Text>
        <Ionicons name={icon} size={28} color={color} />
      </View>
      <Text style={styles.cardAmount}>${amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "space-between",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardLabel: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "500",
  },

  cardAmount: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 10,
  },
});
