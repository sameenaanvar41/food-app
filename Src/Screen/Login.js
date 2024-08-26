import React, { useState } from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import {  useNavigation } from "@react-navigation/native";

const Login = () => {
  const Navigation= useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
    
    const handlebutton = () => {
      if (!email || !password) {
        Alert.alert("Error", "Please enter both email and password.");
      } else if (!validateEmail(email)) {
        Alert.alert("Error", "Please enter a valid email address.");
      } else if (password.length < 6) {
        Alert.alert("Error", "Password must be at least 6 characters long.");
      } else {
        Navigation.navigate('Home');
      }
    };

  return (
    <View style={styles.container}>
        <View>
          <ImageBackground
            source={require("../asset/image/rect.png")}
            style={styles.imageback}
          >
            <Image
            style={styles.image1}
              source={require("../asset/image/Subtract.png")}
            />
            <Image
              style={styles.image2}
              source={require("../asset/image/Vector.png")}
            />
            <Text style={styles.eattext}>EatGreen</Text>
          </ImageBackground>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.login}>
          <Text style={styles.logintext}>Log In</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="lightgray"
            color='black'
            style={styles.email}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="lightgray"
            color='black'
            style={styles.password}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={handlebutton}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.forgetview}>
          <Text style={styles.forget}>Forget password?</Text>
        </View>

        <View style={styles.orview}>
          <Text style={styles.ortext}>Or</Text>
        </View>

        <View style={styles.googleview}>
          <Image source={require('../asset/image/google.png')}
            style={styles.googleimage} />
        </View>

        <View style={styles.facebookview}>
          <Image source={require('../asset/image/facebook.png')}
            style={styles.facebookimage} />
        </View>

        <View style={styles.signupview}>
          <Text style={styles.signuptext}>Don’t have an account? Sign Up</Text>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  imageback: {
    width: 384,
    height: 215,
    opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden'
  },
  image1: {
    width: 59.48,
    height: 40.46,
    top: 84.54,
    left: 158,
    position: "absolute",
  },
  image2: {
    width: 25.81,
    height: 25.16,
    top: 65,
    left: 174.91,
    position: "absolute",
  },
  eattext: {
    fontSize: 14,
    textAlign: "center",
    top: 40,
    left: -10,
    lineHeight: 16.7
  },
  login: {
    marginTop: 30,
    alignItems: 'center',
  },
  logintext: {
    fontSize: 23,
    lineHeight: 34.11,
    color: "#000000",
  },
  inputContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  email: {
    width: 343,
    height: 43,
    borderRadius: 16,
    backgroundColor: "#F6FFFA",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  password: {
    width: 343,
    height: 43,
    borderRadius: 16,
    backgroundColor: "#F6FFFA",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 30,
    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: 1,
    height: 43,
    width: 343,
    backgroundColor: '#05A845',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: 'center',
    color: '#fff',
  },
  forgetview: {
    marginTop: 20,
    alignItems: 'center',
  },
  forget: {
    fontSize: 12,
    color: '#C4C4C4',
  },
  orview: {
    marginTop: 30,
    alignItems: 'center',
  },
  ortext: {
    fontSize: 26,
    color: 'black',
  },
  googleview: {
    marginTop: 20,
    alignSelf: 'center',
    width: 320,
    height: 43,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#05A845',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleimage: {
    width: 189,
    height: 21.05,
  },
  facebookview: {
    marginTop: 20,
    alignSelf: 'center',
    width: 320,
    height: 43,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#05A845',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookimage: {
    width: 189,
    height: 21.05,
  },
  signupview: {
    marginTop: 30,
    alignItems: 'center',
  },
  signuptext: {
    fontSize: 14,
    color: '#05A845',
  }
});

export default Login;
