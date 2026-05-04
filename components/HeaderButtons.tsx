import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";

// Right Side Buttons (Notifications, Settings)
export const HeaderRight = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 15,
        marginRight: 16,
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => router.push("/notifications")}>
        <Ionicons name="notifications-outline" size={24} color="#0F172A" />
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => router.push("/settings")}>
        <Ionicons name="settings-outline" size={24} color="#0F172A" />
      </TouchableOpacity> */}
    </View>
  );
};

// Common Back Button
export const HeaderLeftBack = () => {
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={{ marginLeft: 16, padding: 5 }}
    >
      <Ionicons name="arrow-back" size={24} color="#0F172A" />
    </TouchableOpacity>
  );
};

// Dashboard Menu Button
export const HeaderLeftMenu = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log("Open Drawer/Menu")}
      style={{ marginLeft: 16, padding: 5 }}
    >
      <Ionicons name="menu-outline" size={24} color="#0F172A" />
    </TouchableOpacity>
  );
};
