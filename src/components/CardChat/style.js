import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const Style = StyleSheet.create({
  main: {
    width: "95%",
    height: normalize(90),
    backgroundColor: "#000",
    height: normalize(80),
    borderRadius: normalize(15),
    paddingHorizontal: normalize(20),
    flexDirection: "row",
    marginTop: normalize(20),
  },
  card: {
    width: "75%",
    justifyContent: "center",
  },
  txt: {
    color: "#fff",
    fontSize: normalize(13),
    fontWeight: "bold",
  },
  icnbutton: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  icnbutton1: {
    width: "5%",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: normalize(10),
  },
});
export default Style;
