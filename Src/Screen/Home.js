import React from "react";
import { Text ,View,StyleSheet,Image} from "react-native";
import { ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () =>{
    return (
      <SafeAreaView style={{flex:1}}>
  <ScrollView contentContainerStyle={styles.content}>
    <View style={styles.container}>
      <View style={styles.nameview}>
        <Text style={styles.nametext}> Angel Christinal </Text>
      </View>
      
       <Image source={require('../asset/image/sign.png')} style={styles.image}/>
       <Text style={styles.imagename}>Peelamedu</Text>
           
      <View style={styles.bell}>
        <Image source={require('../asset/image/bell.png')} style={styles.bellimage}/>
        <Image source={require('../asset/image/yellow.png')} style={styles.yellowimage}/>
        <Image source={require('../asset/image/profilepic.png')} style={styles.profile}/>
      </View>
      <View >
          <TextInput placeholder="Search products" placeholderTextColor={"#7D7B86"} 
            style={styles.search}/>
            <Image source={require('../asset/image/search.png')} style={styles.searchimage}/>
      </View>
      <View>
        <Image source={require('../asset/image/onionpic.png')}
         style={styles.onion}/>
         <Image source={require('../asset/image/word1.png')}
         style={styles.word1}/>
         <Image source={require('../asset/image/leafpic.png')}
         style={styles.leaf}/>
         <Image source={require('../asset/image/word2.png')}
         style={styles.word2}/>
        <Image source={require('../asset/image/circle.png')}
         style={styles.circle}/>
      </View>
      
      <View >
        <Text style={styles.explore}>Explore By Categories</Text>
        <Image source={require('../asset/image/Arrow1.png')}
          style={styles.arrow}/>
      </View>
      <View >
        <Image source={require('../asset/image/veg.png')}
        style={styles.veg}/>
        <Text style={{left:18,top:-249,color:'black',fontsize:14,lineHeight:18}}>Vegetables</Text>
        
        <Image source={require('../asset/image/greenleef.png')}
        style={styles.greenleaf}/>
        <Text style={{left:126,top:-350,color:'black',fontsize:14,lineHeight:18}}>Spinach</Text>
         <Image source={require('../asset/image/grains.png')}
        style={styles.grains}/>
        <Text style={{left:236,top:-470,color:'black',fontsize:14,lineHeight:18}}>Grains</Text>
         <Image source={require('../asset/image/masala.png')}
        style={styles.masala}/>
        <Text style={{left:330,top:-590,color:'black',fontsize:14,lineHeight:18}}>Masala</Text>
      </View>
    
      
        <Text style={styles.deals}>Trending Deals</Text>
        <Image source={require('../asset/image/Arrow1.png')}
          style={styles.arrow1}/>
      <View style={{borderWidth:1,height:112.54, width:125.38,borderradius:16,borderColor:'green',top:-570,left:19}}>
        <Image source={require('../asset/image/fortune.png')}
        style={styles.fortune}/>
        <Text style={{left:2,top:-1,color:'black',fontsize:14,lineHeight:18}}>fortune oil</Text>
        <Text style={{left:89,top:-20,color:'black',fontsize:14,lineHeight:18,color:'green'}}>Rs.25</Text>
        <Text style={{left:3,top:-15,color:'black',fontsize:14,lineHeight:18,color:'green'}}>250g</Text>
        <Image source={require('../asset/image/star.png')} style={{width: 35,height: 15,top:-35,left:225,}}/>
        <Image source={require('../asset/image/quantity.png')} style={{width:85,height: 15,top:-28,left:5,}}/>
        <Image source={require('../asset/image/cart.png')} style={{width:20,height: 25,top:-65,left:280,}}/>
      </View>
        
      <View style={{borderWidth:1,height:112.54, width:125.38,borderradius:16,borderColor:'green',top:-680,left:200}}>
        <Image source={require('../asset/image/almond.png')}
        style={styles.almond}/>
        <Text style={{left:5,top:-1,color:'black',fontsize:14,lineHeight:18}}>Almonds</Text>
        <Text style={{left:89,top:-15,color:'black',fontsize:14,lineHeight:18,color:'green'}}>Rs.35</Text>
        <Text style={{left:3,top:-15,color:'black',fontsize:14,lineHeight:18,color:'green'}}>250g</Text>
        <Image source={require('../asset/image/star.png')} style={{width: 35,height: 15,top:-26,left:-140,}}/>
        <Image source={require('../asset/image/quantity.png')} style={{width:85,height: 15,top:-25,left:5,}}/>
        <Image source={require('../asset/image/cart.png')} style={{width:20,height: 25,top:-55,left:-80,}}/>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    content:{
       flexGrow:1,
    },
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    nameview:{
      width: 196,
      height: 30,
      top: 24,
      left: 10,
    },
    nametext:{
      fontSize: 22,
      lineHeight: 28.86,
      textalign: 'center',
      color:'#191919'
    },
    image:{

      width: 12.83,
      height: 18.33,
      top: 60,
      left: 16,
    },
    imagename:{
    fontSize: 12,
    lineHeight: 13.58,
     textalign: 'left',
     color:'black',
     top:43,
     left:38.83
    },
    bellimage:{
      width: 20.52,
      height: 19.29,
      top: 5,
      left: 271,
     },
     yellowimage:{
      width: 6.89,
      height: 6.61,
      top: -15,
      left: 284.11,
     },
     profile:{
      width: 64,
      height: 63,
      top: -45,
      left: 307,
     },
     search:{
      width: 343,
      height: 52,
      top: 5,
      left: 16,
      borderradius: 5,
      borderWidth: 1,
      borderColor:"green",
      fontSize: 12,
      lineHeight: 18.37,
      textAlign:'center'
     },
     searchimage:{
       width: 53,
        height: 52,
        top: -48,
        left: 308,
        borderradius: 15
       },
       onion:{
        width: 270,
        height: 158,
        top: 1.67,
        left: 8,
        borderRadius:16
       },
       word1:{
        width: 116,
        height: 80,
        top:-80,
        left: 25,
       },
       leaf:{
        width: 270,
        height: 158,
        top:-235,
        left: 285,
        borderRadius:16

       },
       word2:{
        width: 106,
        height: 80,
        top:-310,
        left: 290,
       },
       circle:{
        width: 16,
        height: 16,
        top: -300,
        left: 180
    },
    explore:{
      fontSize: 22,
      lineHeight: 28.86,
      textAlign:'center',
      color:'black',
      top:-290,
      left:-60
    },
    arrow:{
      width: 22,
      height: 10,
      top: -310,
      left: 340,
      border: 2
    },
    veg:
      {
        top:-270,
        width: 94,
        height: 80,
        left: 16,
        },
    greenleaf:{
      width: 94,
      height: 80,
      top: -370,
      left: 118,
      },
      grains:{
        width: 94,
        height: 100,
        top: -470,
        left: 220,
      },
      masala:{
        width: 94,
        height: 100,
        top: -590,
        left: 324,
      },
      deals:{
        width: 188,
        height: 49,
        top: -565,
        left: 18,
        fontSize: 22,
        lineHeight: 28.86,
        textAlign: 'left',
        color:'black'
      },
      arrow1:{
        width: 19,
        height: 10,
        top:-599,
        left: 335,
        border: 2
      },
      fortune:{
        width: 72,
        height: 115,
        top: -1,
        left: 32.62,

      },
      almond:{
        width: 144,
        height: 108,
        top: -1,
        left: -10,
       // border: 1,
      }
  })
export default Home;