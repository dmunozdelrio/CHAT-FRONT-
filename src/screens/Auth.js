import React, {useState} from "react";
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from "../components/Auth/LoginForm";
import { layoutStyle } from "../styles";
import logo from "../../assets/logo.png"
import RegisterForm from "../components/Auth/RegisterForm";

export default function Auth() {
    const [showLogin, setShowlogin] = useState(true)

    const changeForm= ()=> setShowlogin(!showLogin);
    return (
        <View style={layoutStyle.container}>
             <Image style={styles.logo} source={logo}/>
        <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding":"height"}>
           
            {showLogin ? <LoginForm changeForm={changeForm}/>: <RegisterForm changeForm={changeForm}/>}
 
        </KeyboardAvoidingView>
     </View>
    )
}
const styles = StyleSheet.create({
    logo:{
        width:"100%" ,
        height:50,
        resizeMode:"contain",
        marginBottom:20,


    },
});
