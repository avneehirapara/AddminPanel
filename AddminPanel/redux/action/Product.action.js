import { BASE_URL } from "../../utilts/BaseUrl"
import * as ActionType from '../reducer/ActionType'


export const getproduct = () => (dispatch) => {
   try {
      fetch(BASE_URL + 'products/')
         .then((response) => response.json())
         .then((data) => dispatch({type:ActionType.GET_PRODUCT , payload:data}))
         .catch((error) => console.log(error))
   } catch (e) {
      console.log(e);
   }
}


export const addProduct = (data) => (dispatch) => {
//    console.log("yess",data);
     try{
      fetch( BASE_URL+'products/', {
         method: 'POST', 
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
     })
         .then((response) => response.json())
         .then((data) => dispatch({type: ActionType.ADD_PRODUCT, payload:data}))
         // {
         //   console.log('Success:', data);
         // })
         .catch((error) => {
             console.error('Error:', error);
         });
 }
 catch (e) {
     console.log(e);
 }

}

export const deleteProduct  = (id) => (dispatch) => {
    // console.log("here" + id);
    try{
        fetch( BASE_URL+'products/' + id, {
           method: 'DELETE', 
       })
           .then((response) => response.json())
           .then(dispatch({type:ActionType.DELETE_PRODUCT,payload:id}))
           .catch((error) => {
               console.error('Error:', error);
           });
   }
   catch (e) {
       console.log(e);
   }
  
  }


  
export const EditProduct = (data) => (dispatch) => {
    //    console.log("yessEDIT",data);
         try{
          fetch( BASE_URL+'products/' + data.id, {
             method: 'PUT', 
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(data),
         })
             .then((response) => response.json())
             .then((data) => dispatch({type:ActionType.UPDATE_PRODUCT,payload:data}))
             // {
             //   console.log('Success:', data);
             // })
             .catch((error) => {
                 console.error('Error:', error);
             });
     }
     catch (e) {
         console.log(e);
     }
    
    }
    
