import React, {useState,useCallback} from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useFormik } from "formik";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import { getMeApi, updateUserApi } from "../../api/user";
import useAuth from '../../hooks/useAuth';
import {formStyle} from "../../styles"

export default function ChangePassword() {

    const [loading, setloading] = useState(false);

    const { auth } = useAuth();

    const navigation = useNavigation();



    // useFocusEffect(
    //     useCallback(() => {
    //       (async () => {
    //         const response = await getMeApi(auth.token);
    //        // console.log(response);
    //         await formik.setFieldValue("password", response.password);
    //       })();
    //     }, [])
    //   );

    const formik= useFormik({ 
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setloading(true);
      try {
       const response = await updateUserApi(auth, formData);
      if (response.statusCode) throw "Error al cambiar la clave"
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
                label="Cambiar clave"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                value={formik.values.password}
                error={formik.errors.password}
            ></TextInput>
             <TextInput
                label="Repetir clave"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                value={formik.values.repeatPassword}
                error={formik.errors.repeatPassword}
            ></TextInput>
            <Button
                mode="contained"
                style={formStyle.btnSucces}
                onPress={formik.handleSubmit}
                loading={loading}
            >
                Cambiar clave
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
        password: "",
        repeatPassword:"",
      };
  }
  
  function validationSchema() {
    return {
        password: Yup.string().min(4, true).required(true),
        repeatPassword: Yup.string().min(4, true).required(true).oneOf([Yup.ref("password")], true),
    };
  }  