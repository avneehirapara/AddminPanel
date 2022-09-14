import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AddSreen() {
  return (
    <View>

      <View style={Styles.CurdBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          < Ionicons name='ios-chevron-back' style={Styles.backIcon} />
        </TouchableOpacity>
        <View>
          <Text style={Styles.curdText}>kotlin Crud</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Fontisto name='spinner-refresh' style={Styles.CurdIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <View style={Styles.Name}>
          <TextInput placeholder='Full Name' style={{ fontSize: 20, color: 'black' }}></TextInput>
        </View>
        <View style={Styles.discription}>
          <TextInput placeholder='discription' style={{ fontSize: 20 }}></TextInput>
        </View>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  backIcon: {
    fontSize: 30,
    color: 'black',
    color: 'white',
    top: 15,
    left: 5

  },
  Name: {
    borderWidth: 1,
    top: 20,
    fontSize: 25,
    marginBottom: 20
  },
  discription: {
    borderWidth: 1,
    marginTop: 20,
    fontSize: 25,
  },
  CurdBox: {
    flexDirection: 'row',
    backgroundColor: '#3498DB',
    height: 60,
    justifyContent: 'space-between',
  },
  curdText: {
    color: 'white',
    fontSize: 25,
    top: 10,
  },
  CurdIcon: {
    top: 15,
    right: 20,
    color: 'white',
    fontSize: 25,
  },
})