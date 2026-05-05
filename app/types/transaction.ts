import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  date: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  color: string;
};
