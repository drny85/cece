import ItemList from "@/components/item/ItemList";
import { SIZES } from "@/constants/Sizes";
import { data } from "@/data";
import { Item } from "@/typing";
import { useCallback } from "react";
import { FlatList, ListRenderItem, View } from "react-native";

const Page = () => {
  const renderItems: ListRenderItem<Item> = useCallback(({ item }) => {
    return <ItemList item={item} />;
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        ListFooterComponent={<View style={{ marginBottom: 30, height: 2 }} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{
          gap: SIZES.padding,
          alignSelf: "center",
        }}
        columnWrapperStyle={{
          gap: SIZES.basic,
        }}
        renderItem={renderItems}
      />
    </View>
  );
};

export default Page;
