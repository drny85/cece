import ItemsPage from "@/components/item/ItemsPage";
import { data } from "@/data";
import React from "react";

const NewIn = () => {
  const items = data.filter((i) => i.tags.includes("new in"));
  return <ItemsPage items={items} />;
};

export default NewIn;
