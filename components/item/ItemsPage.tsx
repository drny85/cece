import ItemList from "@/components/item/ItemList";
import { SIZES } from "@/constants/Sizes";

import { Item } from "@/typing";
import { useCallback } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

type Props = {
  items: Item[];
};
const ItemsPage = ({ items }: Props) => {
  const renderItems: ListRenderItem<Item> = useCallback(({ item, index }) => {
    return <ItemList item={item} index={index} />;
  }, []);
  return (
    <FlatList
      data={items}
      ListFooterComponent={<View style={{ marginBottom: 30, height: 2 }} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Animated.Text
            entering={FadeInUp.duration(600)}
            style={{ fontSize: 20, fontWeight: "600" }}
          >
            No Items Found
          </Animated.Text>
        </View>
      }
      numColumns={2}
      contentContainerStyle={{
        gap: SIZES.padding,
        alignSelf: "center",
        paddingTop: SIZES.padding,
      }}
      columnWrapperStyle={{
        gap: SIZES.basic,
      }}
      renderItem={renderItems}
    />
  );
};

export default ItemsPage;
