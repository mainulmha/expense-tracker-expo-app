import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddScreen() {
  const categoriesData = {
    expense: [
      "food",
      "travel",
      "rent",
      "transport",
      "shopping",
      "medicine",
      "gold",
      "recharge",
      "internet bill",
      "dish bill",
      "other",
    ],
    income: ["salary", "investment", "other"],
    investment: ["investment", "gold", "fdr", "dps", "share", "other"],
  };

  const [amount, setAmount] = useState("");
  const [type, setType] = useState<keyof typeof categoriesData>("expense");
  const [category, setCategory] = useState<string>(categoriesData.expense[0]);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (_event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowPicker(Platform.OS === "ios");
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTypeChange = (newType: keyof typeof categoriesData) => {
    setType(newType);
    setCategory(categoriesData[newType][0]);
  };

  const handleAddExpense = () => {
    const expenseData = {
      amount,
      type,
      category,
      description,
      date: date.toDateString(),
    };
    console.log("Expense Data Saved:", expenseData);
    setAmount("");
    setDescription("");
    setType("expense");
    setCategory(categoriesData.expense[0]);
    setDate(new Date());
    alert("Expense added successfully!");
  };

  return (
    // মূল কন্টেন্টকে SafeAreaView দিয়ে র‍্যাপ করা হলো

    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>

      <View style={styles.form}>
        {/* Amount Input */}
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="0.00"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        {/* Transaction Type - 3 Columns */}
        <Text style={styles.label}>Transaction Type</Text>
        <View style={styles.typeColumnWrapper}>
          {(
            Object.keys(categoriesData) as Array<keyof typeof categoriesData>
          ).map((t) => (
            <Pressable
              key={t}
              style={[
                styles.typeColumnButton,
                type === t && styles.activeTypeColumn,
              ]}
              onPress={() => handleTypeChange(t)}
            >
              <Text
                style={[
                  styles.typeColumnText,
                  type === t && styles.activeTypeColumnText,
                ]}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Category Selection */}
        <Text style={styles.label}>Category</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContentContainer}
          style={styles.categoryScroll}
        >
          {categoriesData[type].map((cat) => (
            <Pressable
              key={cat}
              style={[styles.catItem, category === cat && styles.activeCat]}
              onPress={() => setCategory(cat)}
            >
              <Text
                style={[
                  styles.catText,
                  category === cat && styles.activeCatText,
                ]}
              >
                {cat}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Description Input */}
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="What was this for?"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        {/* Date Selection */}
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.input}
          onPress={() => setShowPicker(true)}
        >
          <Text style={styles.dateText}>
            {date.toLocaleDateString("en-GB")}
          </Text>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.cancelButton,
              { opacity: pressed ? 0.7 : 1 },
            ]}
            onPress={() => console.log("Cancelled")}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.addButton,
              { opacity: pressed ? 0.7 : 1 },
            ]}
            onPress={handleAddExpense}
          >
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 20,
    textAlign: "center",
  },
  form: {
    width: "100%",
    gap: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 2,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "#F8FAFC",
    fontSize: 16,
    justifyContent: "center",
  },
  textArea: {
    height: 80,
    paddingTop: 12,
  },
  dateText: {
    fontSize: 16,
    color: "#0F172A",
  },
  typeColumnWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  typeColumnButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#F8FAFC",
  },
  activeTypeColumn: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },
  typeColumnText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#64748B",
  },
  activeTypeColumnText: {
    color: "#FFFFFF",
  },
  categoryScroll: {
    marginVertical: 4,
  },
  categoryContentContainer: {
    paddingRight: 20,
    paddingVertical: 4,
  },
  catItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    backgroundColor: "#F1F5F9",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  activeCat: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },
  catText: {
    fontSize: 13,
    color: "#64748B",
    textTransform: "capitalize",
  },
  activeCatText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 10,
  },
  button: {
    flex: 1,
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  cancelButton: {
    backgroundColor: "#EF4444",
  },
  addButton: {
    backgroundColor: "#2563EB",
  },
});
