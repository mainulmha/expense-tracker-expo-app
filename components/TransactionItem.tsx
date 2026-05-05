import { Transaction } from "@/app/types/transaction";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  item: Transaction;
};

export default function TransactionItem({ item }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <View style={[styles.iconBox, { backgroundColor: item.color + "20" }]}>
          <Ionicons name={item.icon} size={20} color={item.color} />
        </View>

        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>

      <Text
        style={[
          styles.amount,
          { color: item.amount > 0 ? "#16a34a" : "#dc2626" },
        ]}
      >
        {item.amount > 0 ? "+" : "-"}${Math.abs(item.amount)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E7EB",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 14,
    fontWeight: "500",
  },

  date: {
    fontSize: 12,
    color: "#64748B",
  },

  amount: {
    fontSize: 14,
    fontWeight: "600",
  },
});
