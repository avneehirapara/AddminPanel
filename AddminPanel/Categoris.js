import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Image, Button } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Categoris({navigation}) {

  const ADDMINPANELDATA = [
    {
      id: 1,
      image: require('../AddminPanel/assets/imges/saree.jpeg'),
      product: 'Women Ethnic',
    },
    {
      id: 2,
      image: require('../AddminPanel/assets/imges/womanvwsten.webp'),
      product: 'Women cloths'
    },
    {
      id: 3,
      image: require('../AddminPanel/assets/imges/men.webp'),
      product: 'Men'
    },
    {
      id: 4,
      image: require('../AddminPanel/assets/imges/kids.jpeg'),
      product: 'Kids'
    },
    {
      id: 5,
      image: require('../AddminPanel/assets/imges/kichen.jpeg'),
      product: 'Home & Kichen'
    },
    {
      id: 6,
      image: require('../AddminPanel/assets/imges/beautyhelth.webp'),
      product: 'Beauty & helth'
    },
    {
      id: 7,
      image: require('../AddminPanel/assets/imges/accessaris.jpg'),
      product: 'Jwallry & Accessaris'
    },
    {
      id: 8,
      image: require('../AddminPanel/assets/imges/FootWare.jpg'),
      product: 'Bag & FootWare'
    },
    {
      id: 9,
      image: require('../AddminPanel/assets/imges/Electronic.webp'),
      product: 'Electronic'
    },
    {
      id: 10,
      image: require('../AddminPanel/assets/imges/Feetness.jpeg'),
      product: 'Sports & Feetness'
    },
    {
      id: 11,
      image: require('../AddminPanel/assets/imges/Office.webp'),
      product: 'Office Supplies'
    },
    {
      id: 12,
      image: require('../AddminPanel/assets/imges/Food.jpeg'),
      product: 'Food & Dricks'
    },
    {
      id: 13,
      image: require('../AddminPanel/assets/imges/Pet.jpeg'),
      product: 'Pet SUpplies'
    },
    {
      id: 14,
      image: require('../AddminPanel/assets/imges/Musical.jpeg'),
      product: 'Music'
    },
    {
      id: 15,
      image: require('../AddminPanel/assets/imges/Books.webp'),
      product: 'Books'
    },
  ]

  const PenalDATA = ({ item }) => {
    console.log("item");
    return (
      <TouchableOpacity  onPress={() => navigation.navigate('AddSreen')}>
        <View style={Styles.card}>
          <Image style={Styles.images1} source={item.image} />

          <Text style={Styles.cardText}>{item.product}</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Entypo name='pencil' style={Styles.pen} />
            </TouchableOpacity>
            <TouchableOpacity>
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
            <Text style={Styles.curdText}>kotlin Crud</Text>
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
            data={ADDMINPANELDATA}
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
      <TouchableOpacity  onPress={() => navigation.navigate('AddSreen')}>
        <View style={{ flex: 1 }}>
          <View style={Styles.btn} >
            <Text style={{fontSize:25,height:50,width:80,textAlign:'center',textAlignVertical:'center',color:'white'}}>Add</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    position: 'absolute',
    bottom: 10,
    alignSelf: 'flex-end',
    right: 10,
    backgroundColor: '#3498DB'
  }

})