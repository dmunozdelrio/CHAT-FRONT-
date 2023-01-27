import React from 'react'
import { View, Text } from 'react-native'
import Style from './style'

//componentes


export default function cardChat() {
  return (
    <View style={Style.main}>
    <View style={Style.card}>   
        <Text style={Style.txt}>Ultimo mensaje de el chatbox Ultimo mensaje de el chatbox 
        Ultimo mensaje de el chatbox </Text>
    </View>
    <View style={Style.icnbutton}>
        <Text style={Style.txt}>{">"}</Text>
    </View>

    </View>
  )
}
