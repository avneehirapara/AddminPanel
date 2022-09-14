import * as ActionType from '../reducer/ActionType'



 export const getPrice = () => (dispatch) => {
   try{
       fetch('http://192.168.2.171:8000/data2')
       .then((response) => response.json())
       .then((data)=> dispatch ({type:ActionType.GET_PRICE,payload:data}))
       .catch((error) => (console.log(error)))
   } catch(e){
    console.log(e);
   }
} 