import { View, Text, ScrollView, StyleSheet, Modal, TouchableOpacity, FlatList, Pressable, TextInput } from 'react-native'
import React, { useState } from "react"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, EditProduct, getproduct } from './redux/action/Product.action'
import { useEffect } from 'react'
import { longPressHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/LongPressGestureHandler'

export default function ProductSreen() {

    const [modalVisible, setModalVisible] = useState(false);
    const [Name , setName] = useState();
    const [Description , setDescription] = useState();
    const [Rate , setRate] = useState();
    const [Update , setUpdate] = useState();
    const [Id , setId ] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getproduct())
    }, [])

    const pro = useSelector(state => state.Product);

    // console.log("finally", pro.product);

    const AddData = () => {
        // console.log(data);
        dispatch(addProduct({ name: Name, description:Description,rating:Rate }))
      }

      const handeldelet = (id) => {
        // console.log(id);
        dispatch(deleteProduct(id))
      }

   const  handeleditdata = (data) => {
       setId(data.id)
       setName(data.name)
       setDescription(data.description)
       setRate(data.rating)
       setModalVisible(true)
       setUpdate(true)
   }

      const handeledit = () => {
        // console.log("update"+ data);
        dispatch(EditProduct({id:Id , name:Name , description:Description ,rating:Rate}))
      }


    const Clothsdata = ({ item }) => {

        return (

            <TouchableOpacity  >
                <View style={styles.ProductCard}>
                    <View >
                        {/* <Image source={item.image} style={styles.foodimg}></Image> */}
                    </View>
                    <View >
                        <View style={{ marginLeft: 10 }}>
                            <View>
                                <Text style={styles.Hname}>{item.name}</Text>
                            </View>
                            <View>
                                {/* <Text style={styles.pricepizza}>{item.price}</Text> */}
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                            <View style={styles.Prate}>
                                <Text style={styles.rate}>{item.rating}</Text>
                                <FontAwesome name={'star'} style={styles.star} />
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: 'flex-end', }}>
                        <TouchableOpacity onPress={()=>handeleditdata(item)}>
                            <MaterialIcons name={'edit'} style={styles.edit} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>handeldelet(item.id)} >
                            <MaterialCommunityIcons name={'delete'} style={styles.dlt} />
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableOpacity>

        )
    }

    return (

        <ScrollView style={styles.screen}>
            <View style={styles.container}>

                <View>
                    <FlatList
                        numColumns={2}
                        data={pro.product}
                        renderItem={Clothsdata}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </View>

                {/* <View >
                    <TouchableOpacity style={styles.all}>
                        <View style={styles.seemore}>
                            <Text>See More</Text>
                            <Entypo name={'chevron-thin-down'} style={styles.arrow1} />
                        </View>
                    </TouchableOpacity>
                </View> */}

            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <TextInput
                                style={styles.modalText}
                                placeholder='PRODUCT NAME'
                                onChangeText={(text) => setName(text)}
                                value={Name}
                            />
                            <TextInput
                                style={styles.modalText}
                                placeholder='PRODUCT DISCRIPTION'
                                onChangeText={(text) => setDescription(text)}
                                value={Description}
                            />
                             <TextInput
                                style={styles.modalText}
                                placeholder='PRODUCT RATE'
                                onChangeText={(text) => setRate(text)}
                                value={Rate}
                            />
                             <View style={{ flexDirection: 'row' }}>
                                {
                                    Update ?
                                    <Pressable
                                    style={[styles.button, styles.buttonClose ,styles.btn2]}
                                    onPress={() => {handeledit(); setModalVisible(!modalVisible) }} >
                                    <Text style={styles.textStyle}>UPDATE</Text>
                                </Pressable>
                                :
                                <Pressable
                                style={[styles.button, styles.buttonClose ,styles.btn2]}
                                onPress={() => {AddData(); setModalVisible(!modalVisible) }} >
                                <Text style={styles.textStyle}>ADD</Text>
                            </Pressable>
                                }
                           
                            <Pressable
                                style={[styles.button, styles.buttonClose, styles.btn2]}
                                onPress={() => { setModalVisible(!modalVisible) }}
                            >
                                <Text style={styles.textStyle}>CANCEL</Text>
                            </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen, styles.btn]}
                    onPress={() => {setModalVisible(true);setUpdate(false)} }
                >
                    <Text style={styles.textStyle}>ADD PRODUCT</Text>
                </Pressable>

            </View>

        </ScrollView>
    )
}

let styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F3F3F3",
        // margin:10
    },
    container: {
        margin: 18,
        position: "relative",
    },
    ProductCard: {
        height: 300,
        width: 165,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#F3F3F3',
        marginBottom: 15,
        marginRight: 20,
        marginTop: 10,
        alignSelf: 'center'

    },
    foodimg: {
        height: 150,
        width: 150,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 20
    },
    Hname: {
        color: 'black',
        fontWeight: "500",
        fontSize: 18,
        marginTop: 10,
        textTransform:'capitalize',
        top:200
    },
    pricepizza: {
        color: 'black',
        // fontWeight: "500",
        fontSize: 16,
        marginTop: 20
    },
    description: {
        color: 'black',
        fontSize: 12,
        marginTop: 5,
        top:200,
        // flexWrap: "wrap"

    },
    rate: {
        height: 25,
        width: 50,
        borderRadius: 5,
        backgroundColor: '#3498DB',
        color: "white",
        alignItems: "center",
        paddingLeft: 5,
        paddingTop: 2,
        fontSize: 14,
        top: 200
    },
    Prate: {
        marginTop: 10
    },
    star: {
        color: "white",
        fontSize: 13,
        position: "absolute",
        top: 5,
        left: 25,
        marginLeft: 4
    },
    edit: {
        fontSize: 20,
        color: "black",
        right: 20,
        top: 175
    },
    dlt: {
        fontSize: 20,
        color: "black",
        right: 20,
        top: 175
    },
    all: {
        flexDirection: "row",
    },
    seemore: {
        color: 'red',
        marginTop: 8,
        marginRight: 3,
        height: 30,
        width: "100%",
        borderWidth: 1,
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
    },
    arrow1: {
        color: 'red',
        marginTop: 5,
        fontSize: 12,
        marginLeft: 5
    },
    btn: {
        bottom: 20
    },
    btn2: {
        width: 150,
        margin: 5,
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