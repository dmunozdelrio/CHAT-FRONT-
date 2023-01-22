import React, {useState,useCallback} from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useFormik } from "formik";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import { getMeApi, updateUserApi } from "../../api/user";
import useAuth from '../../hooks/useAuth';
import {formStyle} from "../../styles/"

export default function ChangeName() {

    const [loading, setloading] = useState(false);

    const { auth } = useAuth();

    const navigation = useNavigation();



    useFocusEffect(
        useCallback(() => {
          (async () => {
            const response = await getMeApi(auth.token);
           // console.log(response);
            await formik.setFieldValue("name", response.name);
            await formik.setFieldValue("lastname", response.lastname);
          })();
        }, [])
      );

    const formik= useFormik({
      
        initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setloading(true);
      try {
        await updateUserApi(auth, formData)
        navigation.goBack();
      } catch (error) {
        Toast.show("Error al actualizar datos", {
          position: Toast.position.CENTER,
        })
      }

      setloading(false)

    }
    });




    return (
        <View style={styles.container}>
            <TextInput
                label="Nombre"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("name", text)}
                value={formik.values.name}
                error={formik.errors.name}
            ></TextInput>
            <TextInput
                label="Apellidos"
                 style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("lastname", text)}
                value={formik.values.lastname}
                error={formik.errors.lastname}
            ></TextInput>
            <Button
                mode="contained"
                style={formStyle.btnSucces}
                onPress={formik.handleSubmit}
                loading={loading}
            >
                Cambiar Nombres y Apellidos
            </Button>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})

function initialValues() {
    return {
      name: "",
      lastname: "",
    };
  }
  
  function validationSchema() {
    return {
      name: Yup.string().required(true),
      lastname: Yup.string().required(true),
    };
  }