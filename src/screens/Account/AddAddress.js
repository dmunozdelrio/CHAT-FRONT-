import { StyleSheet, View, Text } from 'react-native';
import React, {useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {formStyle} from "../../styles"
import {useNavigation} from "@react-navigation/native"
import { Button, TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import { addAddressApi } from '../../api/address';
import useAuth from '../../hooks/useAuth'
import * as Yup from "yup";

export default function AddAddress() {
  const [loading, setloading] = useState(false);
  const {auth}= useAuth();
  const navigation= useNavigation()
  const formik= useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setloading(true);
      
      try {
        await addAddressApi(auth, formData);
        navigation.goBack();
      } catch (error) {
        console.log(error)
        setloading(false);
      }

}
});
  

  return (
    <KeyboardAwareScrollView extraScrollHeight={25}>
      <View style={styles.container}> 
        <Text style={styles.title}> Nueva direccion </Text>
        <TextInput label="Titulo" style={formStyle.input} 
        onChangeText={(text) => formik.setFieldValue("title",text)}
        value={formik.values.title}
        error={formik.errors.title}
        >

        </TextInput>
        <TextInput label="Nombre y apellidos" style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("name_lastname",text)}
        value={formik.values.name_lastname}
        error={formik.errors.name_lastname}
        ></TextInput>
        <TextInput label="Direccion" style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("address",text)}
        value={formik.values.address}
        error={formik.errors.address  }
        ></TextInput>
        <TextInput label="Codigo Postal" style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("postal_code",text)}
        value={formik.values.postal_code}
        error={formik.errors.postal_code}
        ></TextInput>
        <TextInput label="Ciudad"  style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("city",text)}
        value={formik.values.city}
        error={formik.errors.city}
        ></TextInput>
        <TextInput label="Departamento" style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("state",text)}
        value={formik.values.state}
        error={formik.errors.state}
        ></TextInput>
        <TextInput label="Pais" style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("country",text)}
        value={formik.values.country}
        error={formik.errors.country}
        ></TextInput>
        <TextInput label="Telefono" style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("phone",text)}
        value={formik.values.phone}
        error={formik.errors.phone}
        keyboardType="number-pad"
        ></TextInput>
        <Button mode='contained' style={[formStyle.btnSucces, styles.btnSucces]}
        onPress={formik.handleSubmit}
        loading={loading}
        >
            Crear direccion
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
}

function initialValues(){

  return {
    title:"",
    name_lastname: "",
    address: "",
    postal_code:"",
    city:"",
    state:"",
    country:"",
    phone:"",
  };

}
function validationSchema(){
  return {
    title: Yup.string().required(true),
    name_lastname: Yup.string().required(true),
    address: Yup.string().required(true),
    postal_code: Yup.string().required(true),
    city: Yup.string().required(true),
    state: Yup.string().required(true),
    country: Yup.string().required(true),
    phone: Yup.string().required(true),

  }
}


const styles = StyleSheet.create({
container:{
  paddingHorizontal:20,
},
title:{
  fontSize:20,
  paddingVertical:20,

},
btnSucces:{
  marginBottom:20,

}

})
