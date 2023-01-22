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

export default function ChangeEmail() {

    const [loading, setloading] = useState(false);

    const { auth } = useAuth();

    const navigation = useNavigation();



    useFocusEffect(
        useCallback(() => {
          (async () => {
            const response = await getMeApi(auth.token);
           // console.log(response);
            await formik.setFieldValue("email", response.email);
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
      if (response.statusCode) throw "El mail ya existe"
        navigation.goBack();
      } catch (error) {
        Toast.show(error, {
          position: Toast.positions.CENTER,
        })
        formik.setFieldError("email".true);
        setloading(false)
      }
    }
    });




    return (
        <View style={styles.container}>
            <TextInput
                label="Email"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("email", text)}
                value={formik.values.email}
                error={formik.errors.email}
            ></TextInput>
            <Button
                mode="contained"
                style={formStyle.btnSucces}
                onPress={formik.handleSubmit}
                loading={loading}
            >
                Cambiar email
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
      email: "",
    };
  }
  
  function validationSchema() {
    return {
      email: Yup.string().email(true).required(true),
    };
  }  