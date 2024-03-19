import { View } from "react-native";
import React from "react";
import ItemsPage from "@/components/item/ItemsPage";
import { data } from "@/data";

const Sales = () => {
  const items = data.filter((i) => i.tags.includes("sales"));
  return (
    <View>
      <ItemsPage items={items} />
    </View>
  );
};

export default Sales;
