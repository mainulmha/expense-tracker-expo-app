import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ComponentProps } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type RowProps = {
  icon: ComponentProps<typeof Ionicons>["name"];
  label: string;
  onPress?: () => void;
};

const Row = ({ icon, label, onPress }: RowProps) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <View style={styles.rowLabel}>
      <Ionicons name={icon} size={22} color="#475569" />
      <Text style={styles.rowText}>{label}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#94a3b8" />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile  */}
        <TouchableOpacity
          style={styles.profileSection}
          onPress={() => router.push("/edit-profile")}
        >
          <View style={styles.profileLeft}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>M</Text>
            </View>

            <View>
              <Text style={styles.name}>Mainul Hasan</Text>
              <Text style={styles.email}>mainul@email.com</Text>
            </View>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#94a3b8" />
        </TouchableOpacity>

        {/* Wallet Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wallet</Text>
          <Row icon="wallet-outline" label="My Wallets" />
          <Row
            onPress={() => router.push("/cateogry")}
            icon="grid-outline"
            label="Categories"
          />
          <Row icon="pricetags-outline" label="Labels" />
          <Row icon="cash-outline" label="Main Currency" />
        </View>

        {/* Security Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          <Row
            icon="lock-closed-outline"
            label="Change Password"
            onPress={() => router.push("/change-password")}
          />
          <Row icon="finger-print-outline" label="Touch / Face ID" />
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <Row icon="help-circle-outline" label="Help Center" />
          <Row icon="mail-outline" label="Contact Support" />
          <Row icon="document-text-outline" label="Terms & Policies" />
        </View>

        {/* Upgrade */}
        <View style={styles.section}>
          <Row icon="rocket-outline" label="Upgrade Now" />
        </View>

        {/* About */}
        <View style={styles.section}>
          <Row icon="information-circle-outline" label="About" />
        </View>

        {/* Version */}
        <Text style={styles.version}>Version 1.0.0</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  section: {
    marginTop: 20,
    backgroundColor: "#fff",
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 13,
    color: "#64748b",
    marginBottom: 6,
    marginLeft: 16,
  },
  row: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rowText: {
    fontSize: 15,
    color: "#0f172a",
  },
  version: {
    textAlign: "center",
    marginVertical: 30,
    color: "#94a3b8",
    fontSize: 13,
  },

  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 10,
  },

  profileLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#6366f1",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#fff",
    fontWeight: "600",
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
  },

  email: {
    fontSize: 13,
    color: "#64748b",
  },
});
