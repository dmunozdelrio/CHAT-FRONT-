import React from 'react'
import { View, Text } from 'react-native'
import Style from './style'

//componentes
import IconButton from '../IconButton'
import { faChevronRight, faTrash, faArchive } from '@fortawesome/free-solid-svg-icons'


export default function cardChat() {
  function log(){
    console.log("presionando button");
  }
  return (
    <View style={Style.main}>
      <View style={Style.icnbutton1}>
        <IconButton icon={faTrash} size={30} onPress={log} color={"#ff0000"}/>
        <IconButton icon={faArchive} size={30} onPress={log} color={"#fff"}/>
    </View>
    <View style={Style.card}>   
         <Text style={Style.txt}> Titulo</Text>
        <Text style={Style.txt}>Ultimo mensaje de el chatbox Ultimo mensaje de el chatbox 
        Ultimo mensaje de el chatbox </Text>
    </View>
    <View style={Style.icnbutton}>
        <IconButton icon={faChevronRight} size={40} onPress={log} color={"#fff"}/>
    </View>

    </View>
  )
}
