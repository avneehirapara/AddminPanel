import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Pressable, Modal } from 'react-native'
import React, { useEffect } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, getcategry } from './redux/action/Catagoris.action';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';


export default function Categoris() {

  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  // const ADDMINPANELDATA = [
  //   {
  //     id: 1,
  //     image: require('../AddminPanel/assets/imges/saree.jpeg'),
  //     product: 'Women Ethnic',
  //   },
  //   {
  //     id: 2,
  //     image: require('../AddminPanel/assets/imges/womanvwsten.webp'),
  //     product: 'Women cloths'
  //   },
  //   {
  //     id: 3,
  //     image: require('../AddminPanel/assets/imges/men.webp'),
  //     product: 'Men'
  //   },
  //   {
  //     id: 4,
  //     image: require('../AddminPanel/assets/imges/kids.jpeg'),
  //     product: 'Kids'
  //   },
  //   {
  //     id: 5,
  //     image: require('../AddminPanel/assets/imges/kichen.jpeg'),
  //     product: 'Home & Kichen'
  //   },
  //   {
  //     id: 6,
  //     image: require('../AddminPanel/assets/imges/beautyhelth.webp'),
  //     product: 'Beauty & helth'
  //   },
  //   {
  //     id: 7,
  //     image: require('../AddminPanel/assets/imges/accessaris.jpg'),
  //     product: 'Jwallry & Accessaris'
  //   },
  //   {
  //     id: 8,
  //     image: require('../AddminPanel/assets/imges/FootWare.jpg'),
  //     product: 'Bag & FootWare'
  //   },
  //   {
  //     id: 9,
  //     image: require('../AddminPanel/assets/imges/Electronic.webp'),
  //     product: 'Electronic'
  //   },
  //   {
  //     id: 10,
  //     image: require('../AddminPanel/assets/imges/Feetness.jpeg'),
  //     product: 'Sports & Feetness'
  //   },
  //   {
  //     id: 11,
  //     image: require('../AddminPanel/assets/imges/Office.webp'),
  //     product: 'Office Supplies'
  //   },
  //   {
  //     id: 12,
  //     image: require('../AddminPanel/assets/imges/Food.jpeg'),
  //     product: 'Food & Dricks'
  //   },
  //   {
  //     id: 13,
  //     image: require('../AddminPanel/assets/imges/Pet.jpeg'),
  //     product: 'Pet SUpplies'
  //   },
  //   {
  //     id: 14,
  //     image: require('../AddminPanel/assets/imges/Musical.jpeg'),
  //     product: 'Music'
  //   },
  //   {
  //     id: 15,
  //     image: require('../AddminPanel/assets/imges/Books.webp'),
  //     product: 'Books'
  //   },
  // ]

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcategry())
  }, [])

  const cat = useSelector(state => state.Catagaris);

  console.log(cat.Catagaris);

  const handleSubmit = () => {
    dispatch(addCategory({product: name, desc}))
  }
  
  console.log("fffffffff", cat.Catagaris);

  const handleDelete = (id) => {
    dispatch(deleteCategory(id))
    console.log(id);
  }

  const PenalDATA = ({ item }) => {
    console.log("item", item.image);

    return (
      <TouchableOpacity>
        <View style={Styles.card}>
          {/* <Image style={Styles.images1} source={`require( ${item.image}  )`} /> */}

          <Text style={Styles.cardText}>{item.product}</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Entypo name='pencil' style={Styles.pen} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <MaterialCommunityIcons name='delete' style={Styles.delet} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }



  return (
    <ScrollView>
      <View>
        <View style={Styles.CurdBox}>
          <View>
            <Text style={Styles.curdText}>Catagory</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Fontisto name='spinner-refresh' style={Styles.CurdIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            numColumns={2}
            data={cat.Catagaris}
            renderItem={PenalDATA}
            keyExtractor={item => item.id}
          />

        </View>
        {/* <View>
          <TouchableOpacity >
            <AntDesign name='plussquare' style={Styles.PlusIcon} />
          </TouchableOpacity>
        </View> */}

      </View>
      <View style={Styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <TextInput 
                style={Styles.modalText} 
                placeholder='PRODUCT NAME' 
                onChangeText={(text) => setName(text)}
              /> 
              <TextInput 
                style={Styles.modalText} 
                placeholder='PRODUCT DISCRIPTION' 
                onChangeText={(text) => setDesc(text)}
              />
              <Pressable
                style={[Styles.button, Styles.buttonClose]}
                onPress={() => {handleSubmit(); setModalVisible(!modalVisible)}} >
                <Text style={Styles.textStyle}>SUBMIT</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[Styles.button, Styles.buttonOpen, Styles.btn]}
          onPress={() => setModalVisible(true)}>
          <Text style={Styles.textStyle}>ADD PRODUCT</Text>
        </Pressable>
      </View>

    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  images1: {
    height: 250,
    width: 165,
    borderRadius: 5,
    alignSelf: 'center'
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
    left: 20
  },
  CurdIcon: {
    top: 15,
    right: 20,
    color: 'white',
    fontSize: 25,
  },
  card: {
    height: 300,
    width: 165,
    backgroundColor: '#F3F3F3',
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    alignSelf: 'center'

  },
  cardText: {
    top: 15,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    marginHorizontal: 5,
  },
  PlusIcon: {
    fontSize: 35,
    color: "#3498DB",
    alignSelf: 'flex-end',
    right: 20

  },
  pen: {
    color: 'black',
    fontSize: 18,
    left: 120,
    bottom: 5
  },
  delet: {
    color: 'black',
    fontSize: 18,
    left: 120,
    bottom: 5

  },
  btn: {
    bottom: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width:200
  },
  buttonOpen: {
    backgroundColor: "#2196F3",

  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    borderWidth:1,
    width:300
  }


})