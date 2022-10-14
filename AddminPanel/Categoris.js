import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Pressable, Modal, Image } from 'react-native'
import React, { useEffect } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, getcategry, updateCategory } from './redux/action/Catagoris.action';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';



export default function Categoris({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [update, setUpdate] = useState(false);
  const [fileName, setFileName] = useState('')
  const [image, setImage] = useState('');
  const [uid, setUId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcategry())

  }, [])

  const cat = useSelector(state => state.Catagaris);

  // console.log("final", cat.Catagaris);

  const resetdata = () => {
    setName('')
    setDescription('')
  }


  const handelAddData = () => {
    dispatch(addCategory({ name: name, description, pro_image: image }))
  }

  const handeldelet = (id, fileName) => {
    // console.log('first yess', id, fileName);
    dispatch(deleteCategory(id, fileName))
  }

  const handleUpdate = (data) => {
    setUId(data.id)
    setName(data.name)
    setDescription(data.description)
    setImage(data.pro_img)
    setFileName(data.fileName)
    setModalVisible(true)
    setUpdate(true)
  }

  const handelUpdateData = () => {
    dispatch(updateCategory({ id: uid, name, description }))
  }

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setImage(image.path)
      console.log("img done", image);
    });
  }

  // const ADDMINPANELDATA = [
  //   {
  //     id: 1,
  //     image: require('../AddminPanel/assets/imges/saree.jpeg'),
  //     name: 'Women Ethnic',
  //   },
  //   {
  //     id: 2,
  //     image: require('../AddminPanel/assets/imges/womanvwsten.webp'),
  //     name: 'Women cloths'
  //   },
  //   {
  //     id: 3,
  //     image: require('../AddminPanel/assets/imges/men.webp'),
  //     name: 'Men'
  //   },
  //   {
  //     id: 4,
  //     image: require('../AddminPanel/assets/imges/kids.jpeg'),
  //     name: 'Kids'
  //   },
  //   {
  //     id: 5,
  //     image: require('../AddminPanel/assets/imges/kichen.jpeg'),
  //     name: 'Home & Kichen'
  //   },
  //   {
  //     id: 6,
  //     image: require('../AddminPanel/assets/imges/beautyhelth.webp'),
  //     name: 'Beauty & helth'
  //   },
  //   {
  //     id: 7,
  //     image: require('../AddminPanel/assets/imges/accessaris.jpg'),
  //     name: 'Jwallry & Accessaris'
  //   },
  //   {
  //     id: 8,
  //     image: require('../AddminPanel/assets/imges/FootWare.jpg'),
  //     name: 'Bag & FootWare'
  //   },
  //   {
  //     id: 9,
  //     image: require('../AddminPanel/assets/imges/Electronic.webp'),
  //     name: 'Electronic'
  //   },
  //   {
  //     id: 10,
  //     image: require('../AddminPanel/assets/imges/Feetness.jpeg'),
  //     name: 'Sports & Feetness'
  //   },
  //   {
  //     id: 11,
  //     image: require('../AddminPanel/assets/imges/Office.webp'),
  //     name: 'Office Supplies'
  //   },
  //   {
  //     id: 12,
  //     image: require('../AddminPanel/assets/imges/Food.jpeg'),
  //     name: 'Food & Dricks'
  //   },
  //   {
  //     id: 13,
  //     image: require('../AddminPanel/assets/imges/Pet.jpeg'),
  //     name: 'Pet SUpplies'
  //   },
  //   {
  //     id: 14,
  //     image: require('../AddminPanel/assets/imges/Musical.jpeg'),
  //     name: 'Music'
  //   },
  //   {
  //     id: 15,
  //     image: require('../AddminPanel/assets/imges/Books.webp'),
  //     name: 'Books'
  //   },
  // ]




  const PenalDATA = ({ item }) => {

    return (
      <View style={Styles.card}>
        <View>
          <Image source={{ uri: item.pro_img }} style={Styles.img}></Image>
        </View>
        <View>
          <Text style={Styles.cardText}>{item.name}</Text>
        </View>
        <View>
          <Text style={Styles.cardText}>{item.description}</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => handleUpdate(item)}>
            <Entypo name='pencil' style={Styles.pen} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handeldelet(item.id, item.fileName)}>
            <MaterialCommunityIcons name='delete' style={Styles.delet} />
          </TouchableOpacity>

        </View>
      </View>

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
      </View>
      <View style={Styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            resetdata()
          }}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <TextInput
                style={Styles.modalText}
                placeholder='PRODUCT NAME'
                onChangeText={(text) => setName(text)}
                value={name}
              />
              <TextInput
                style={Styles.modalText}
                placeholder='PRODUCT DISCRIPTION'
                onChangeText={(text) => setDescription(text)}
                value={description}
              />
              <TouchableOpacity
                onPress={() => handleImagePicker()}
              >
                <Text>Upload Image</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                {
                  update ?
                    <Pressable
                      style={[Styles.button, Styles.buttonClose, Styles.btn2]}
                      onPress={() => { handelUpdateData(); setModalVisible(!modalVisible) }} >
                      <Text style={Styles.textStyle}>UPDATE</Text>
                    </Pressable>
                    :
                    <Pressable
                      style={[Styles.button, Styles.buttonClose, Styles.btn2]}
                      onPress={() => { handelAddData(); setModalVisible(!modalVisible) }} >
                      <Text style={Styles.textStyle}>ADD</Text>
                    </Pressable>
                }
                <Pressable
                  style={[Styles.button, Styles.buttonClose, Styles.btn2]}
                  onPress={() => { setModalVisible(!modalVisible) }} >
                  <Text style={Styles.textStyle}>CANCEL</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[Styles.button, Styles.buttonOpen, Styles.btn]}
          onPress={() => { setModalVisible(true); setUpdate(false) }}>
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
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F3F3F3',
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#E5E7E9'

  },
  img: {
    height: 250,
    width: 162,
    borderRadius: 10,
  },
  cardText: {
    top: 9,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    marginHorizontal: 5,
    bottom: 20,
  },
  PlusIcon: {
    fontSize: 35,
    color: "#3498DB",
    alignSelf: 'flex-end',
    right: 20,


  },
  pen: {
    color: 'black',
    fontSize: 18,
    left: 120,
    bottom: 20,
  },
  delet: {
    color: 'black',
    fontSize: 18,
    left: 120,
    bottom: 20,

  },
  btn: {
    bottom: 20
  },
  btn2: {
    width: 150,
    margin: 5
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
    width: 200
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
    borderWidth: 1,
    width: 300
  }


})