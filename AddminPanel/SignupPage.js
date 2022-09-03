import React, { useState } from "react";
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,} from "react-native";
import { color } from "react-native-reanimated";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.head}>Create An Account</Text>
      </View>
      <View style={styles.InputBox}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.InputBox}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.InputBox}>
        <TextInput
          style={styles.TextInput}
          placeholder="Adrees"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />
    </View>
      <View style={styles.InputBox}>
        <TextInput
          style={[styles.TextInput]}
          placeholder="State"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />  
      </View>
      <View style={styles.InputBox}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email Id"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.InputBox}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#000000"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.InputBox}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      margin:16
    },
    head:{
        color:'#3498DB',
        fontSize:20,
        letterSpacing:2,
        fontWeight:"700",
        marginBottom:30
    },
    InputBox: {
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        width: 300,
        height: 45,
        marginBottom: 30,
        // alignItems: "center",
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        // marginLeft: 20,
        color:"black"
      },
      loginBtn: {
        width: "80%",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor:'#3498DB',
      },
      loginText:{
        fontWeight:"700",
        letterSpacing:2,
        color:'white'
      }
})