import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const Style = StyleSheet.create({
  main: {
    backgroundColor: "#000",
    width: "95%",
    height: normalize(80),
    borderRadius: normalize(15),
    justifyContent: "center",
    alignItems: "center",
    marginTop: normalize(30),
  },
  txt: {
    color: "#fff",
    fontSize: normalize(25),
  },
});
export default Style;
