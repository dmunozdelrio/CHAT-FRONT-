import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import colors from "../styles/colors";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Cart from "../screens/Cart";
import Chat from "../screens/Chat";
import Account from "../screens/Account/Account";
import AccountStack from "./AccountStack";
export default function AppNavigation() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={styles.navigation}
        screenOptions={({ route }) => ({
          tabBarIcon: (routeStatus) => {
            return setIcon(route, routeStatus);
          },
        })}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            title: "Inicio",
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            title: "Chat",
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            title: "Carrito",
          }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{
            title: "Mi cuenta",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  navigation: {
    backgroundColor: colors.bgDark,
  },
  icon: {
    fontSize: 24,
    color: colors.fontLight,
  },
});

function setIcon(route, routeStatus) {
  let iconName = "";
  switch (route.name) {
    case "home":
      iconName = "home";
      break;
    case "Chat":
      iconName = "comment";
      break;
    case "cart":
      iconName = "shopping-cart";
      break;
    case "account":
      iconName = "bars";
      break;
    default:
      break;
  }
  return <AwesomeIcon name={iconName} style={styles.icon} />;
}
