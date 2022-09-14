import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcategry } from './redux/action/Catagoris.action';
import { getPrice } from './redux/action/Price.action';

export default function Catagari1() {

  // const dispatch = useDispatch();

  // const Catagaris = useSelector(state => state.Catagaris)

  // console.log(Catagaris.Catagaris);

  // useEffect(() => {
  //   dispatch(getcategry());
  // }, [])



  // return (
  //   <>
  //     {
  //       Catagaris.Catagaris.map((c, i) => (
  //         <View>
  //           <Text>{c.product}</Text>
  //         </View>
  //       ))
  //     }
  //   </>
  // )

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrice())
  }, [])

  const Price = useSelector(state => state.Price)

  console.log(Price.Price);
  return (
    <>
      {
        Price.Price.map((p, i) => (
          <View key={i}>
            <Text>{p.Price}</Text>
          </View>
        ))
      }
    </>
  )
}