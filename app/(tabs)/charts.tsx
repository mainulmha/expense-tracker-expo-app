import { Transaction } from "@/app/types/transaction";
import DropdownComponent from "@/components/DropdownComponent";
import CustomPieChart from "@/components/PieChart";
import TransactionItem from "@/components/TransactionItem";
import { StyleSheet, Text, View } from "react-native";

export default function ChartScreen() {
  const transactions: Transaction[] = [
    {
      id: "1",
      title: "Grocery",
      amount: -50,
      date: "Today",
      icon: "cart-outline",
      color: "#ef4444",
    },
    {
      id: "2",
      title: "Salary",
      amount: 1200,
      date: "Yesterday",
      icon: "cash-outline",
      color: "#16a34a",
    },
    {
      id: "3",
      title: "Shopping",
      amount: -200,
      date: "2 days ago",
      icon: "bag-outline",
      color: "#f59e0b",
    },
    {
      id: "4",
      title: "Grocery",
      amount: -50,
      date: "Today",
      icon: "cart-outline",
      color: "#ef4444",
    },
    {
      id: "5",
      title: "Salary",
      amount: 1200,
      date: "Yesterday",
      icon: "cash-outline",
      color: "#16a34a",
    },
    {
      id: "6",
      title: "Shopping",
      amount: -200,
      date: "2 days ago",
      icon: "bag-outline",
      color: "#f59e0b",
    },
    {
      id: "7",
      title: "Grocery",
      amount: -50,
      date: "Today",
      icon: "cart-outline",
      color: "#ef4444",
    },
    {
      id: "8",
      title: "Salary",
      amount: 1200,
      date: "Yesterday",
      icon: "cash-outline",
      color: "#16a34a",
    },
    {
      id: "9",
      title: "Shopping",
      amount: -200,
      date: "2 days ago",
      icon: "bag-outline",
      color: "#f59e0b",
    },
  ];

  return (
    <View>
      <View style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
        <DropdownComponent />
      </View>
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <CustomPieChart />
      </View>
      {/* Transactions */}
      <View style={styles.cardBox}>
        <Text style={styles.txTitle}>Recent Transactions</Text>
        {transactions.map((item) => (
          <>
            <TransactionItem key={item.id} item={item} />
          </>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    margin: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    padding: 12,
  },

  txTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
});
