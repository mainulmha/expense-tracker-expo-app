import { Transaction } from "@/app/types/transaction";
import CustomCard from "@/components/CustomCard";
import CustomPieChart from "@/components/PieChart";
import TransactionItem from "@/components/TransactionItem";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Cards */}
      <View style={styles.cardGrid}>
        <CustomCard
          label="Balance"
          icon="wallet-outline"
          color="#6366f1"
          amount={3200}
        />
        <CustomCard
          label="Income"
          icon="arrow-up-circle-outline"
          color="#16a34a"
          amount={3200}
        />
        <CustomCard
          label="Expense"
          icon="arrow-down-circle-outline"
          color="#dc2626"
          amount={1450}
        />
        <CustomCard
          label="Invest"
          icon="trending-up-outline"
          color="#0ea5e9"
          amount={890}
        />
      </View>

      {/* Pie Chart */}
      <View style={{ padding: 12 }}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

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
