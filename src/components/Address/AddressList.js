import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { map } from 'lodash';

export default function AddressList(props) {
    const { addresses}= props;  

    return(
      <View style={styles.container}>
        {map(addresses, (address) =>(
          <Text key={address._id}> Hola</Text>
        ))}</View>
      
    // <View style={styles.container}>
    //   {map(addresses,(address)=>{
    //     <Text>Hola</Text>
    //   })}
    // </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop:5,
    },
});