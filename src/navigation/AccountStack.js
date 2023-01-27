import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import ChangeName from "../screens/Account/ChangeName";
import ChangeEmail from "../screens/Account/ChangeEmail";
import colors from "../styles/colors";
import Addresses from "../screens/Account/Addresses";
import ChangeUsername from "../screens/Account/ChangeUsername";
import ChangePassword from "../screens/Account/ChangePassword";
import AddAddress from "../screens/Account/AddAddress";
import Favorites from "../screens/Favorites";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.fontLight,
        headerStyle: { backgroundColor: colors.bgDark },
        cardStyle: { background: colors.bgLight },
      }}
    >
      <Stack.Screen
        name="accountStack" //Se cambio por no repetir account para dos screens
        component={Account}
        options={{ title: "Cuenta", headerShown: false }}
      />
      <Stack.Screen
        name="change-name" //Se cambio por no repetir account para dos screens
        component={ChangeName}
        options={{
          title: "Cambiar nombre y apellido" /*, headerShown:false*/,
        }}
      />
      <Stack.Screen
        name="New-chat" //Se cambio por no repetir account para dos screens
        component={Favorites}
        options={{
          title: "Nuevo mensaje",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="change-Email" //Se cambio por no repetir account para dos screens
        component={ChangeEmail}
        options={{ title: "Cambiar email" /*, headerShown:false*/ }}
      />
      <Stack.Screen
        name="change-username" //Se cambio por no repetir account para dos screens
        component={ChangeUsername}
        options={{ title: "Cambiar usuario" /*, headerShown:false*/ }}
      />
      <Stack.Screen
        name="change-password" //Se cambio por no repetir account para dos screens
        component={ChangePassword}
        options={{ title: "Cambiar clave de acceso" /*, headerShown:false*/ }}
      />
      <Stack.Screen
        name="addresses" //Se cambio por no repetir account para dos screens
        component={Addresses}
        options={{ title: "Cambiar mis direcciones" /*, headerShown:false*/ }}
      />
      <Stack.Screen
        name="add-address" //Se cambio por no repetir account para dos screens
        component={AddAddress}
        options={{ title: "Nueva Direccion" /*, headerShown:false*/ }}
      />
    </Stack.Navigator>
  );
}
