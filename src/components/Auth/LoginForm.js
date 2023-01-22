import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import Toast from 'react-native-root-toast' 
import  { useFormik, yupToFormErrors } from "formik"
import * as Yup from "yup"
import useAuth from '../../hooks/useAuth'
import {loginApi } from "../../api/user"
import {formStyle} from "../../styles"


export default function LoginForm(props) {
    const {changeForm} = props;
    const [loading, setLoading] = useState(false)
    const {login} = useAuth();


    const formik = useFormik({
            initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
         onSubmit: async(formData) =>{
             setLoading(true);
            try {
               const response= await loginApi(formData)
              // console.log(response)
                if (response.statusCode) throw  "Error, usuario o contraseña fallida!"
                login(response);

            } catch (error) {

                Toast.show(error, {position: Toast.positions.CENTER});
            }           
            setLoading(false);   
         },
        });
    return (
        <View>
            <TextInput
            label="Email o username"
            styles={formStyle.input}
            onChangeText={(text) => formik.setFieldValue("identifier", text)}
            value={formik.values.identifier}
            error={formik.errors.identifier}
            />
              <TextInput
            label="Contraseña"
            styles={formStyle.input}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            value={formik.values.password}
            error={formik.errors.password}
            secureTextEntry
            />
            <Button mode="contained"
            style={formStyle.btnSucces} 
            onPress={formik.handleSubmit}
            loading={loading}
            >
                Entrar
            </Button>
            <Button mode="text"
            style={formStyle.btnText} 
            labelStyle={formStyle.btnTextLabel}
            onPress={changeForm}
            >
                Registrar
            </Button>
        </View>
    )
}

function initialValues(){
    return{
        identifier: "",
        password:""
    }

}
function validationSchema(){
    return{
        identifier: Yup.string().required(true),
        password: Yup.string().required(true)

    }
}