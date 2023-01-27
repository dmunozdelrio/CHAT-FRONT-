import React from "react";
import { Alert } from "react-native";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";

export default function Menu() {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const logoutAccount = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estas seguro de que quieres salir de tu cuenta?",
      [
        {
          text: "NO",
        },
        { text: "SI", onPress: logout },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <List.Section>
        <List.Subheader>Mi cuenta </List.Subheader>
        <List.Item
          title="Cambiar nombre"
          description="Cambia tu nombre aqui"
          left={(props) => <List.Icon {...props} icon="at" />}
          onPress={() => navigation.navigate("change-name")}
        />
        <List.Item
          title="Cambiar de correo"
          description="Cambia tu correo aqui"
          left={(props) => <List.Icon {...props} icon="at" />}
          onPress={() => navigation.navigate("change-Email")}
        />
        <List.Item
          title="Cambiar nombre de Usuario"
          description="Cambia tu correo aqui"
          left={(props) => <List.Icon {...props} icon="sim" />}
          onPress={() => navigation.navigate("change-username")}
        />
        <List.Item
          title="Cambiar contraseña"
          description="Cambia tu contraseña aqui"
          left={(props) => <List.Icon {...props} icon="key" />}
          onPress={() => navigation.navigate("change-password")}
        />
        <List.Item
          title="Añadir direccion de envio"
          description="Añade direcciones para recibir tus servicios aqui"
          left={(props) => <List.Icon {...props} icon="map" />}
          onPress={() => {
            navigation.navigate("addresses");
          }}
        />
      </List.Section>
      <List.Section>
        <List.Subheader>App</List.Subheader>
        <List.Item
          title="Pedidos"
          description="Listado de todos los pedidos"
          left={(props) => <List.Icon {...props} icon="clipboard-list" />}
          onPress={() => {
            console.log("tu no mete cabra");
          }}
        />
        <List.Item
          title="Lista de deseos"
          description="Listado de servicios que deseas adquirir"
          left={(props) => <List.Icon {...props} icon="heart" />}
          onPress={() => {
            navigation.navigate("favorites");
          }}
        />
        <List.Item
          title="Cerrar Sesión"
          description="Cierra esta sesión"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={logoutAccount}
        />
      </List.Section>
    </>
  );
}
