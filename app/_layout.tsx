import { MyCustomHeader } from "@/components/MyCustomHeader";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="change-password"
            options={{
              header: () => <MyCustomHeader title="Change Password" />,
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="edit-profile"
            options={{
              header: () => <MyCustomHeader title="Edit Profile" />,
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="notifications"
            options={{
              header: () => <MyCustomHeader title="Notifications" />,
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="category"
            options={{
              header: () => <MyCustomHeader title="Category" />,
              headerShown: true,
            }}
          />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // gray বদলে সাদা দিন
  },
});
