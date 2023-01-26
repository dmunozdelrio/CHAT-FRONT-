import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const Style = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    width: "100%",
    height: normalize(105),
  },
  ctntitle: {
    width: normalize(210),
    height: normalize(90),
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    fontSize: normalize(30),
    color: "#fff",
    fontWeight: "700",
  },
  header: {
    backgroundColor: "#000",
    width: "100%",
    height: normalize(92),
    flexDirection: "row",
    borderBottomLeftRadius: normalize(30),
    borderBottomRightRadius: normalize(30),
    justifyContent: "center",
    alignItems: "center",
  },
  ctnimg: {
    width: normalize(53),
    height: normalize(90),
    justifyContent: "center",
    alignItems: "center",
    marginRight: normalize(5),
  },
  safe: {
    width: "100%",
    backgroundColor: "#000",
  },
});
export default Style;
