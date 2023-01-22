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

export default function ChangeUsername() {

    const [loading, setloading] = useState(false);

    const { auth } = useAuth();

    const navigation = useNavigation();



    useFocusEffect(
        useCallback(() => {
          (async () => {
            const response = await getMeApi(auth.token);
           // console.log(response);
            await formik.setFieldValue("username", response.username);
          })();
        }, [])
      );

    const formik= useFormik({ 
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setloading(true);
      try {
      const response=  await updateUserApi(auth, formData);
      if (response.statusCode) throw "El nombre de usuario ya existe"
        navigation.goBack();
      } catch (error) {
        Toast.show(error, {
          position: Toast.positions.CENTER,
        })
        formik.setFieldError("username".true);
        setloading(false)
      }
    }
    });




    return (
        <View style={styles.container}>
            <TextInput
                label="Cambiar nombre de usuario"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("username", text)}
                value={formik.values.username}
                error={formik.errors.username}
            ></TextInput>
            <Button
                mode="contained"
                style={formStyle.btnSucces}
                onPress={formik.handleSubmit}
                loading={loading}
            >
                Cambiar nombre de usuario
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
        username: "",
    };
  }
  
  function validationSchema() {
    return {
        username: Yup.string().min(4, true).required(true),
    };
  }  