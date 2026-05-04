import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function EditProfileScreen() {
  const [name, setName] = useState("Mainul Hasan");
  const [email, setEmail] = useState("mainul@email.com");

  const handleSave = () => {
    if (!name || !email) {
      return Alert.alert("Error", "All fields are required");
    }

    // 👉 এখানে API call দিবে
    console.log("Updated profile:", { name, email });

    Alert.alert("Success", "Profile updated successfully");
  };

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarBox}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.avatar}
        />
        <Text style={styles.changePhoto}>Change Photo</Text>
      </View>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f1f5f9",
  },
  avatarBox: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  changePhoto: {
    marginTop: 8,
    color: "#6366f1",
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  button: {
    backgroundColor: "#4f46e5",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});
