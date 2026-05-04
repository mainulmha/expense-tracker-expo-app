import CustomCard from "@/components/CustomCard";
import CustomPieChart from "@/components/PieChart";
import { ScrollView, StyleSheet, View } from "react-native";

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardGrid}>
        {/* Balance */}
        <CustomCard
          label="Balance"
          icon="wallet-outline"
          color="#6366f1"
          amount={3200}
        />

        {/* Income */}
        <CustomCard
          label="Income"
          icon="arrow-up-circle-outline"
          color="#16a34a"
          amount={3200}
        />

        {/* Expense */}
        <CustomCard
          label="Expense"
          icon="arrow-down-circle-outline"
          color="#dc2626"
          amount={1450}
        />

        {/* Invest */}

        <CustomCard
          label="Invest"
          icon="trending-up-outline"
          color="#0ea5e9"
          amount={890}
        />
      </View>

      {/* Pie Chart */}
      <CustomPieChart />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
