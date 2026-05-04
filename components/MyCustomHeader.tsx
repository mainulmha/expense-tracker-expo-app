import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface CustomHeaderProps {
  title: string;
}
export const MyCustomHeader = ({ title }: CustomHeaderProps) => {
  return (
    <View
      style={{
        height: 70,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#F1F5F9",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
      }}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          position: "absolute",
          left: 16,
          zIndex: 10,
          padding: 5,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#0F172A" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#0F172A",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </View>
  );
};
