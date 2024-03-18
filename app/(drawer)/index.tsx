import ColorSelector from "@/components/item/ColorSelector";
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { PIC } from "@/constants/pics";
import { SIZES } from "@/constants/Sizes";
import { data } from "@/data";
import { Link } from "expo-router";
import { FlatList, Image, TouchableOpacity } from "react-native";

const Page = () => {
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
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: Colors.light.background,
              borderRadius: SIZES.radius,
              shadowOffset: { width: 2, height: 3 },
              elevation: 4,
              shadowOpacity: 0.4,
              shadowColor: "grey",
              width: SIZES.width * 0.48,
            }}
          >
            <Link
              asChild
              href={{ pathname: "/modal", params: { id: item.id! } }}
            >
              <TouchableOpacity>
                <Image
                  source={PIC}
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: SIZES.height * 0.25,
                    overflow: "hidden",
                    borderTopLeftRadius: SIZES.radius,
                    borderTopRightRadius: SIZES.radius,
                  }}
                />
              </TouchableOpacity>
            </Link>
            <View style={{ padding: SIZES.padding, gap: SIZES.padding }}>
              <Text>{item.name}</Text>
              <Text fontSize={18} bold>
                ${item.price}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Page;
