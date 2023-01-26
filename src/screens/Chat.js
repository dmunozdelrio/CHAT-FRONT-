import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import normalize from "react-native-normalize";

//components
import HeaderNavigation from "../Layout/Header";
import CardChat from "../components/CardChat/cardChat";

export default function Chat() {
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
    height: normalize(600),
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  scrollv: {
    width: "100%",
    justifyContent: "center",
  },
});
