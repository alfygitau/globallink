import { Platform } from "react-native";

export const shadowStyle = Platform.select({
  ios: {
    shadowColor: "rgba(0, 0, 0, 0.10)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  android: {
    elevation: 4,
  },
  default: {},
});
