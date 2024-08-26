import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Productscreen = () =>{
    return (
      <View style={style.container}>
        <Text style={{color:'white'}}> text  </Text>
      </View>
    )
  }

  const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
  })
export default Productscreen;
