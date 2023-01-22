import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import Toast from 'react-native-root-toast' 
import  { useFormik, yupToFormErrors } from "formik"
import * as Yup from "yup"
import {registerApi } from "../../api/user"
import {formStyle} from "../../styles"


export default function RegisterForm(props) {
    const {changeForm}= props;
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
         onSubmit: async(formData) =>{
             setLoading(true);
            try {
                await registerApi(formData)
                Toast.show("Cargando datos", {position: Toast.positions.CENTER});
                changeForm();

            } catch (error) {

                setLoading(false);  
                Toast.show("Error al registrar usuario", {position: Toast.positions.CENTER});

            }
         }
    })
    return (
        <View>
            <TextInput 
           label="Nombres"
           style={formStyle.input}
           onChangeText={(Text)=> formik.setFieldValue("name",Text)}
           value={formik.values.name}
           error={formik.errors.name} />
            <TextInput 
           label="Apellidos"
           style={formStyle.input}
           onChangeText={(Text)=> formik.setFieldValue("lastname",Text)}
           value={formik.values.lastname}
           error={formik.errors.lastname} />

            <TextInput 
           label="Nombre De usuario"  
           style={formStyle.input}
           onChangeText={(Text)=> formik.setFieldValue("username",Text)}
           value={formik.values.username}
           error={formik.errors.username}
           />
           <TextInput 
           label="Email"
           style={formStyle.input}
           onChangeText={(Text)=> formik.setFieldValue("email",Text)}
           value={formik.values.email}
           error={formik.errors.email} />
           
          

           <TextInput 
           label="Contraseña"  
           style={formStyle.input} 
           secureTextEntry
           onChangeText={(Text)=> formik.setFieldValue("password",Text)}
           value={formik.values.password}
           error={formik.errors.password}
           />
           <TextInput 
           label="Repetir contraseña"  
           style={formStyle.input} 
           secureTextEntry
           onChangeText={(Text)=> formik.setFieldValue("repeatedPassword",Text)}
           value={formik.values.repeatedPassword}
           error={formik.errors.repeatedPassword}
           />
           <Button 
           mode="contained" 
           style={formStyle.btnSucces} 
           onPress={formik.handleSubmit}
           loading={loading}
           >Registrarse</Button>
           <Button mode="text" style={formStyle.btnText} labelStyle={formStyle.btnTextLabel} onPress={changeForm}>Iniciar sesión</Button>
           </View>
    )
}

function initialValues(){
    return{
        email: "",
        username: "",
        password: "",
        repeatedPassword:"",
        name:"",
        lastname:"",
    }

}
function validationSchema() {
return {
    email: Yup.string().email(true).required(true),
    username: Yup.string().required(true),
    password: Yup.string().required(true),
    repeatedPassword: Yup.string().required(true).oneOf([Yup.ref("password")],true),
    name: Yup.string().required(true),
    lastname: Yup.string().required(true),
}

}