import { View } from "react-native";
import React from "react";
import ItemsPage from "@/components/item/ItemsPage";
import { data } from "@/data";

const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <ItemsPage items={data} />
    </View>
  );
};

export default Page;
