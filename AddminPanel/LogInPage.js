import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';



export default function LogInPage({navigation}) {
  return (
    <View style={styles.container}>
    
      {/* ----------------------WELCOME BOX --------------------- */}
      <View style={styles.wellComeBOX}>
        <Text style={styles.welcome}>Welcome! </Text>
        <Text style={styles.EnterData}>Enter your data to continue</Text>
      </View>
      {/* ----------------------MOBILE INPUT --------------------- */}
      <View style={styles.MobileBox}>
        <Feather name='phone' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder='Mobile number'
        />
      </View>
      {/* ----------------------LOCK INPUT --------------------- */}
      <View style={styles.LockBox}>
        <Feather name='lock' style={styles.InputIcon} />
        <TextInput style={styles.TextInput}
          placeholder='Password'
        />
        <TouchableOpacity>
          <AntDesign name='eyeo' style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>
      {/* ----------------------FORGIT PASS--------------------- */}
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity>
          <MaterialIcons name='crop-square' style={styles.squarIcon}></MaterialIcons>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Remeberme}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Forgotpass}>Forgot password ?</Text>
        </TouchableOpacity>
      </View>
      {/* ----------------------NINE BOX  --------------------- */}
      <View style={styles.ORbox}>
        <View style={styles.FirstBorder}></View>
        <Text style={styles.OR}>OR</Text>
        <View style={styles.SecondBorder}></View>
      </View>
      {/* ----------------------IMAGESSS --------------------- */}
      <View style={styles.IconsBox}>
        {/* ----------------------FACE BOOK ICON --------------------- */}
        <View>
          <TouchableOpacity>
            <Fontisto name='facebook' style={[styles.IconsBoxes, { color: '#5587EB' }]} />
          </TouchableOpacity>
        </View>
        {/* ----------------------APPLE ICON --------------------- */}
        <View>
          <TouchableOpacity>
            <AntDesign name='apple1' style={[styles.IconsBoxes, { color: '#2B2B2B' },{marginTop:59}]} />
          </TouchableOpacity>
        </View>
        {/* ----------------------TWITER ICON --------------------- */}
        <View>
          <TouchableOpacity>
            <AntDesign name='twitter' style={[styles.IconsBoxes, { color: '#1DA1F2' },{marginTop:59}]} />
          </TouchableOpacity>
        </View>

      </View>

      {/* ----------------------SIGN IN BUTTON --------------------- */}
      <TouchableOpacity>
        <View style={styles.SignInButton}>

          <Text style={styles.SignInText}>sign in</Text>
        </View>
      </TouchableOpacity>

      {/* ----------------------SIGN up line --------------------- */}
      <View style={{ flexDirection: 'row' ,marginTop:10,alignSelf:'center'}}>
          <Text style={styles.SingUPText}>Didn’t have any account?</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Categoris')}>
          <Text style={[styles.SingUPText , {color:'#3498DB'}]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft:15,
    // marginRight:15   
  },

  wellComeBOX: {
    height: 53,
    width: 200,
    alignSelf: 'center',
    marginTop: 15,

  },
  welcome: {
    width: 125,
    height: 29,
    fontFamily: 'Montserrat-SemiBold',
    color:'#3498DB',
    fontSize: 24,
    marginBottom: 6,
    alignSelf: 'center'

  },
  EnterData: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },


  MobileBox: {
    flexDirection: 'row',
    backgroundColor:'#F3F3F3',
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 57,
    alignSelf: 'center'

  },

  InputIcon: {
    marginRight: 9,
    marginLeft: 20,
    marginTop: 16,
    marginBottom: 11,
    fontSize: 20,
  },
  TextInput: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    alignSelf: 'center',
    width: 300,
  },
  LockBox: {
    flexDirection: 'row',
    backgroundColor:'#F3F3F3',
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 57,
    alignSelf: 'center',
    marginTop: 20,
  },
  eyeIcon: {
    marginTop: 15,
    marginLeft: -30,
    marginBottom: 11,
    fontSize: 20,
    justifyContent: 'flex-end'
  },
  squarIcon: {
    marginLeft: 25,
    marginTop: 12,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 'bold'       //=========font weight ===========//
  },
  Remeberme: {
    marginRight: 61,
    marginTop: 12,
    fontFamily: 'Montserrat-Regular',
  },
  Forgotpass: {
    marginLeft: 11,
    marginTop: 12,
    fontFamily: 'Montserrat-Regular',
  },
  ORbox: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 61
  },
  FirstBorder: {
    borderWidth:1,
    width:'30%',
    borderColor:'gray'
  },
  OR: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    marginRight:10,
    marginLeft:10,
  },
  SecondBorder: {
    borderWidth:1,
     width:'30%',
     borderColor:'gray'
  },
  IconsBox: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  IconsBoxes: {
    fontSize: 30,
    marginTop: 60,
    marginRight: 20,
  },

  SignInButton: {
    height: 50,
    width: 325,
    backgroundColor:'#3498DB',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 61
  },
  SignInText: {
    color:'white',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
    marginTop: 15,
  },
  SingUPText:{
    fontFamily: 'Montserrat-Regular',
    marginRight:6
  }
})