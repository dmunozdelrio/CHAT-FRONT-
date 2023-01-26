import { Text, View,SafeAreaView } from 'react-native'
import Style from './style'

const STATES = {
  burguer : 'burguer',
  flecha :'flecha'
}

const HeaderNavigation = ({ Title }) => {


  return (
    <SafeAreaView style={Style.safe}>
      <View style={Style.main}>
        <View style={Style.header}>    
            <Text style={Style.Title}>{Title}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HeaderNavigation
