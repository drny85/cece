import { data } from "@/data";
import { Item } from "@/typing";
import { useEffect, useState } from "react";

export const useItem = (itemId: string) => {
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const item = data.find((item) => item.id === itemId);
    if (item) {
      setItem(item);
    }
    setLoading(false);
  }, [itemId]);

  return { item, loading };
};
