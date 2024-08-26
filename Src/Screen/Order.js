import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Order = () =>{
  const Navigation = useNavigation();
  const handlegoto = () => {
   Navigation.navigate('Hometab');
  }
  return (
      <View style={styles.container}>
        <Image
              style={styles.image1}
              source={require("../asset/image/green.png")}
            />
            <Text style={styles.eattext}>EatGreen</Text>
            <Text style={styles.thanktext}>Thank you!</Text> 
            <Image style={styles.tickimage}
                  source={require('../asset/image/tick.png')}/>
            <Text style={styles.order}>Order Placed Successfully</Text>
            <Image style={styles.man} source={require('../asset/image/man.png')}/>
            <View>
       <TouchableOpacity onPress={handlegoto} style={styles.Button}>
       <Text style={styles.Buttontext}>Back to home</Text>
      </TouchableOpacity>
      </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image1: {
      width: 62.48,
      height: 64.4,
      top: 50.54,
      left: 158,
      position: "absolute",
      color:'green'
    },
    eattext: {
      fontSize: 14,
      textAlign: "center",
      top: 10,
      left: -1,
      lineHeight: 16.7,
      color:'green'
    },
    thanktext:{
      fontSize:18,
      lineHeight:21.4,
      color:'black',
      textAlign: "center",
      top: 20,
      left: -1,
     },
     tickimage:{
      width: 138,
      height: 130,
      top:35,
      left: 6
     },
     order:{
        width: 268.95,
        height: 27.69,
        top:40,
        left: 30,
        color:'black',
        fontSize:20
     },
     man:{
      width: 239.97,
      height: 239.37,
      top: 42,
      left: 23
     },
    Buttontext:{
      top: 7,
      left: 90,
      color:'white',
      fontSize:22,
    },
    Button:{
      top:60,
      left:20,
      width:300,
      height:50,
      borderWidth:1,
      borderRadius:16,
      backgroundColor:'#05A845'
    }

  })
export default Order;
