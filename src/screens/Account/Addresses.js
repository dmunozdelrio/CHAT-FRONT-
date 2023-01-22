import { StyleSheet ,
          View, 
          ScrollView,
          Text, 
          TouchableWithoutFeedback,
          ActivityIndicator 

        } from 'react-native';
import React, {useCallback, useState} from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {  IconButton } from 'react-native-paper';
import { getAddressesApi } from '../../api/address';
import { size } from 'lodash';
import useAuth from '../../hooks/useAuth';
import AddressList from '../../components/Address/AddressList';


export default function Addresses() {
  const [addresses,setAddresses] =useState(null);
 // const [reloadAddress, setReloadAddress] = useState(false);
  const {auth} = useAuth();
  const navigation = useNavigation();
  
  useFocusEffect(
    useCallback(() => {
      (async()=>{
        const response = await getAddressesApi(auth);
        setAddresses(response);
      })()
    }, [])
    
  )
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> Mis Direcciones</Text>
      <TouchableWithoutFeedback
        onPress={()=> navigation.navigate("add-address")}
      >
      <View style={styles.addAddress}>
          <Text style={styles.addAddressText}>Anadir una direccion</Text>
          <IconButton icon="arrow-right" color="#000" size={19}/>
      </View>
      </TouchableWithoutFeedback>

      {!addresses ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : size(addresses) === 0 ? (
          <Text style={styles.AddressText}>Crea tu primera dirección</Text>
        ) : (
          <AddressList addresses= {addresses}/> )}
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title:{
        fontSize:20,
    },
    addAddress:{
        borderWidth: 0.9,
        borderRadius:5,
        borderColor:"#ddd",
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    addAddressText:{
        fontSize: 16,
    },
    loading:{
      marginTop:20
    },
    AddressText:{
      fontSize:16,
      marginTop: 10,
      textAlign: "center",
      

    }
})