import {
  HeaderLeftBack,
  HeaderLeftMenu,
  HeaderRight,
} from "@/components/HeaderButtons";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#50eb25",
        tabBarInactiveTintColor: "#9e9fa0",
        tabBarStyle: {
          height: 85,
          paddingBottom: 12,
          paddingTop: 8,
        },
        headerStatusBarHeight: 0,
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          height: 70,
          backgroundColor: "#fff",
          elevation: 2,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
        },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
          color: "#0F172A",
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerTitle: "Expense Tracker",
          headerLeft: () => <HeaderLeftMenu />,
          headerRight: () => <HeaderRight />,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />

      {["charts", "add", "reports", "profile",].map((name) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: name.charAt(0).toUpperCase() + name.slice(1),
            headerTitle:
              name === "add"
                ? "Add Expense"
                : name === "charts"
                  ? "Chart"
                  : undefined,
            headerLeft: () => <HeaderLeftBack />,
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name={
                  name === "charts"
                    ? "wallet-outline"
                    : name === "add"
                      ? "add-circle-outline"
                      : name === "reports"
                        ? "bar-chart-outline"
                        : "person-circle-outline"
                }
                size={size}
                color={color}
              />
            ),
            headerRight: () => <HeaderRight />,
          }}
        />
      ))}
    </Tabs>
  );
}
