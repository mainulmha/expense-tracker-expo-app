import { Transaction } from "@/app/types/transaction";
import TransactionItem from "@/components/TransactionItem";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
];

export default function ReportsScreen() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <View style={styles.container}>
      {/* FILTER CARD */}
      <View style={styles.filterCard}>
        {/* Date Filter */}
        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>From Date</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={fromDate}
              onChangeText={setFromDate}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>To Date</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={toDate}
              onChangeText={setToDate}
            />
          </View>
        </View>

        {/* Category + Type */}
        <View style={styles.row}>
          <View style={styles.dropdown}>
            <Text>Category</Text>
          </View>

          <View style={styles.dropdown}>
            <Text>Type</Text>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.btn, styles.btnSearch]}>
            <Ionicons name="search" size={18} color="#fff" />
            <Text style={styles.btnText}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.btnReset]}>
            <Text style={[styles.btnText, { color: "#64748B" }]}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* EXPORT SECTION */}
      <View style={styles.exportRow}>
        <TouchableOpacity style={styles.exportBtn}>
          <Ionicons name="document-text" size={18} color="#EA4335" />
          <Text style={styles.exportText}>PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.exportBtn}>
          <Ionicons name="stats-chart" size={18} color="#34A853" />
          <Text style={styles.exportText}>Excel</Text>
        </TouchableOpacity>
      </View>

      {/* TRANSACTIONS */}
      {transactions.map((item) => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 16,
  },

  filterCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },

  inputGroup: {
    flex: 1,
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    padding: 8,
  },

  dropdown: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#F1F5F9",
  },

  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },

  btn: {
    flex: 1,
    height: 45,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  btnSearch: {
    backgroundColor: "#0F172A",
  },

  btnReset: {
    backgroundColor: "#E2E8F0",
  },

  btnText: {
    fontWeight: "600",
    color: "#fff",
  },

  exportRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginBottom: 15,
  },

  exportBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    gap: 5,
  },

  exportText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
  },
});
