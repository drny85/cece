import Constants from "expo-constants";
import { Dimensions } from "react-native";

export const SIZES = {
  radius: 16,
  padding: 12,
  margin: 10,
  basic: 8,
  statusBarHeight: Constants.statusBarHeight,
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};
