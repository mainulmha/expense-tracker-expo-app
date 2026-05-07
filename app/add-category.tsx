import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// সহজ কিছু আইকনের লিস্ট
export const AVAILABLE_ICONS = [
  // --- Finance & Money ---
  "cash",
  "card",
  "wallet",
  "stats-chart",
  "trending-up",
  "trending-down",
  "calculator",
  "receipt",
  "bar-chart",
  "pie-chart",

  // --- Shopping ---
  "cart",
  "basket",
  "gift",
  "pricetag",
  "pricetags",
  "bag-handle",
  "storefront",
  "barcode",
  "cart-sharp",
  "bag-add",

  // --- Food & Drink ---
  "fast-food",
  "pizza",
  "cafe",
  "beer",
  "wine",
  "restaurant",
  "ice-cream",
  "nutrition",
  "fish",
  "flask",

  // --- Home & Utilities ---
  "home",
  "business",
  "construct",
  "key",
  "flash",
  "water",
  "trash",
  "bed",
  "tv",
  "radio",

  // --- Transport & Travel ---
  "bus",
  "car",
  "airplane",
  "bicycle",
  "boat",
  "train",
  "subway",
  "map",
  "location",
  "earth",

  // --- Health & Fitness ---
  "medical",
  "fitness",
  "bandage",
  "heart",
  "pulse",
  "thermometer",
  "body",
  "medkit",
  "walk",
  "barbell",

  // --- Education & Work ---
  "school",
  "book",
  "pencil",
  "library",
  "attach",
  "briefcase",
  "document-text",
  "journal",
  "copy",
  "clipboard",

  // --- Entertainment & Lifestyle ---
  "game-controller",
  "film",
  "musical-notes",
  "camera",
  "shirt",
  "glasses",
  "watch",
  "umbrella",
  "flower",
  "sunny",

  // --- Communication & Tech ---
  "wifi",
  "call",
  "mail",
  "chatbubble",
  "videocam",
  "desktop",
  "laptop",
  "phone-portrait",
  "bluetooth",
  "cloud-upload",

  // --- Misc & Abstract ---
  "apps",
  "layers",
  "grid",
  "list",
  "star",
  "leaf",
  "paw",
  "planet",
  "diamond",
  "trophy",
  "rocket",
  "shield",
  "settings",
  "notifications",
  "search",
  "lock-closed",
  "infinite",
  "happy",
  "sad",
  "bonfire",
];

const INITIAL_CATEGORIES = [
  {
    id: "1",
    name: "Food",
    icon: "fast-food",
    color: "#FF6347",
    type: "expense",
  },
];
export function AddCategoryScreen() {
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [modalVisible, setModalVisible] = useState(false);

  // ফর্ম স্টেট
  const [newName, setNewName] = useState("");
  const [selectedType, setSelectedType] = useState("expense");
  const [selectedIcon, setSelectedIcon] = useState("apps"); // ডিফল্ট

  const addCategory = () => {
    // ১. ইনপুট ক্লিন করা (সব ছোট হাতের করা এবং দুই পাশের স্পেস কমানো)
    const normalizedInput = newName.trim().toLowerCase();

    // ২. শুধুমাত্র অক্ষর এবং সংখ্যা রাখা (বিন্দু, আন্ডারস্কোর বা স্পেস ক্লিন করা)
    const cleanName = normalizedInput.replace(/[^a-zA-Z0-9]/g, "");

    // ৩. চেক করা: এই নামে অলরেডি কোনো ক্যাটাগরি আছে কি না
    const isDuplicate = categories.some((cat) => {
      const existingCatClean = cat.name
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, "");
      return existingCatClean === cleanName;
    });

    if (isDuplicate) {
      alert("এই ক্যাটাগরি অলরেডি আছে! অন্য নাম ট্রাই করুন।");
      return;
    }

    if (newName.trim().length < 2) {
      alert("নামটি খুবই ছোট!");
      return;
    }

    // সব ঠিক থাকলে সেভ হবে
    const newCat = {
      id: Math.random().toString(),
      name: newName.trim(), // ইউজার যেভাবে লিখেছে সেটাই সেভ হবে (যেমন: "Food")
      icon: selectedIcon,
      color: selectedType === "expense" ? "#EF4444" : "#10B981",
      type: selectedType,
    };

    setCategories([newCat, ...categories]);
    setNewName("");
    setModalVisible(false);
  };

  return (
    <View>
      <Text style={styles.title}>New Category</Text>

      <TextInput
        style={styles.input}
        placeholder="Category Name (e.g. Health)"
        value={newName}
        onChangeText={setNewName}
      />

      {/* আইকন সিলেকশন গ্রিড */}
      <Text style={styles.title}>Select Icon</Text>
      <View style={{ height: 250 }}>
        {" "}
        {/* একটি নির্দিষ্ট হাইট দিন */}
        <ScrollView contentContainerStyle={styles.iconGrid}>
          {AVAILABLE_ICONS.map((icon) => (
            <TouchableOpacity
              key={icon}
              style={[
                styles.iconItem,
                selectedIcon === icon && styles.selectedIconItem,
              ]}
              onPress={() => setSelectedIcon(icon)}
            >
              <Ionicons
                name={icon as any}
                size={24}
                color={selectedIcon === icon ? "#3B82F6" : "#64748B"}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Type Switch (Income/Expense) */}
      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[
            styles.typeBtn,
            selectedType === "expense" && styles.activeExpense,
          ]}
          onPress={() => setSelectedType("expense")}
        >
          <Text
            style={
              selectedType === "expense" ? styles.activeText : styles.typeText
            }
          >
            Expense
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeBtn,
            selectedType === "income" && styles.activeIncome,
          ]}
          onPress={() => setSelectedType("income")}
        >
          <Text
            style={
              selectedType === "income" ? styles.activeText : styles.typeText
            }
          >
            Income
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.modalActions}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.cancelBtn}
        >
          <Text style={{ color: "#64748B" }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn} onPress={addCategory}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: { fontSize: 22, fontWeight: "bold" },
  addButton: {
    backgroundColor: "#3B82F6",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: { padding: 16 },
  categoryCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: { flex: 1, marginLeft: 15 },
  categoryName: { fontSize: 16, fontWeight: "bold" },
  categoryType: { fontSize: 12, color: "#64748B" },

  // মডাল স্টাইল
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalView: { backgroundColor: "#fff", borderRadius: 20, padding: 25 },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 10,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  // আইকন গ্রিড স্টাইল
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
    justifyContent: "center",
  },
  iconItem: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  selectedIconItem: { borderColor: "#3B82F6", backgroundColor: "#EFF6FF" },

  typeContainer: { flexDirection: "row", gap: 10, marginBottom: 20 },
  typeBtn: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
  },
  activeExpense: { backgroundColor: "#EF4444", borderColor: "#EF4444" },
  activeIncome: { backgroundColor: "#10B981", borderColor: "#10B981" },
  activeText: { color: "#fff", fontWeight: "bold" },
  typeText: { color: "#64748B" },
  modalActions: { flexDirection: "row", justifyContent: "flex-end", gap: 15 },
  cancelBtn: { padding: 12 },
  saveBtn: {
    backgroundColor: "#3B82F6",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
});
