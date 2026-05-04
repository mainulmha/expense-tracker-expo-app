import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";

export default function CustomPieChart() {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={styles.chartBox}>
      <Text style={styles.chartTitle}>Expense Breakdown</Text>

      <PieChart
        data={[
          {
            name: "Food",
            population: 40,
            color: "#ef4444",
            legendFontColor: "#64748b",
            legendFontSize: 12,
          },
          {
            name: "Rent",
            population: 25,
            color: "#3b82f6",
            legendFontColor: "#64748b",
            legendFontSize: 12,
          },
          {
            name: "Shopping",
            population: 20,
            color: "#f59e0b",
            legendFontColor: "#64748b",
            legendFontSize: 12,
          },
          {
            name: "Other",
            population: 15,
            color: "#10b981",
            legendFontColor: "#64748b",
            legendFontSize: 12,
          },
        ]}
        width={screenWidth - 40}
        height={200}
        chartConfig={{
          color: () => "#000",
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chartBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  chartTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
    color: "#64748B",
  },
});
