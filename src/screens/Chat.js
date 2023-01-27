import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import normalize from "react-native-normalize";

//components
import HeaderNavigation from "../Layout/Header";
import CardChat from "../components/CardChat/cardChat";
import IconButton from "../components/IconButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export default function Chat() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderNavigation Title={"Chats"} />
      <View>
        <ScrollView contentContainerStyle={styles.card}>
          <CardChat />
          <CardChat />
          <CardChat />
          <CardChat />
        </ScrollView>
      </View>
      <View style={styles.ctnbtn}>
        <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
          <View style={styles.btn}>
            <IconButton
              icon={faPlus}
              size={60}
              onPress={() => navigation.navigate("ChatScreen")}
              color={"#fff"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  card: {
    width: "100%",
    height: normalize(500),
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  scrollv: {
    width: "100%",
    justifyContent: "center",
  },
  ctnbtn: {
    height: normalize(60),
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: normalize(20),
  },
  btn: {
    width: normalize(60),
    height: normalize(60),
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      android: {
        borderRadius: normalize(30),
      },
      ios: {
        borderRadius: normalize(30),
        overflow: "hidden",
      },
    }),
  },
});
