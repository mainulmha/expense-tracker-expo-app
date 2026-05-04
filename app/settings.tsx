import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* ১. প্রোফাইল সেকশন */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // এখানে প্রোফাইল পিকচার হবে
          style={styles.profilePic}
        />
        <Text style={styles.userName}>Abir Hasan</Text>
        <Text style={styles.userPhone}>+880 1234 567890</Text>
        <TouchableOpacity style={styles.editButton} onPress= {() => router.push("/edit-profile")}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* ২. জেনারেল সেটিংস */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>

        <View style={styles.row}>
          <View style={styles.rowLabel}>
            <Ionicons name="moon-outline" size={22} color="#475569" />
            <Text style={styles.rowText}>Dark Mode</Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={(value) => setIsDarkMode(value)}
          />
        </View>

        <TouchableOpacity style={styles.row}>
          <View style={styles.rowLabel}>
            <Ionicons name="language-outline" size={22} color="#475569" />
            <Text style={styles.rowText}>Language</Text>
          </View>
          <View style={styles.rowRight}>
            <Text style={styles.rightText}>English</Text>
            <Ionicons name="chevron-forward" size={18} color="#94a3b8" />
          </View>
        </TouchableOpacity>
      </View>

      {/* ৩. সিকিউরিটি সেকশন */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security</Text>

        <TouchableOpacity
          style={styles.row}
          onPress={() => router.push("/change-password")}
        >
          <View style={styles.rowLabel}>
            <Ionicons name="lock-closed-outline" size={22} color="#475569" />
            <Text style={styles.rowText}>Change Password</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      {/* ৪. অ্যাকাউন্ট সেকশন */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <TouchableOpacity style={styles.row}>
          <View style={styles.rowLabel}>
            <Ionicons name="log-out-outline" size={22} color="#EF4444" />
            <Text style={[styles.rowText, { color: "#EF4444" }]}>Sign Out</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.row, { borderBottomWidth: 0 }]}>
          <View style={styles.rowLabel}>
            <Ionicons name="trash-outline" size={22} color="#EF4444" />
            <Text style={[styles.rowText, { color: "#EF4444" }]}>
              Delete Account
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  profileSection: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingVertical: 20,
  },

  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#E2E8F0",
  },

  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F172A",
  },

  userPhone: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 5,
  },

  editButton: {
    marginTop: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#F1F5F9",
  },

  editButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
  },

  section: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    marginBottom: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E2E8F0",
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#94a3b8",
    textTransform: "uppercase",
    marginVertical: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  rowLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  rowText: {
    fontSize: 16,
    color: "#334155",
  },

  rowRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  rightText: {
    color: "#94a3b8",
  },
});
