import { BASE_URL } from "../../utilts/BaseUrl"
import * as ActionType from '../reducer/ActionType'
import firestore from '@react-native-firebase/firestore';



export const getproduct = () => (dispatch) => {
    try {
        let data = [];
        firestore()
            .collection('products')
            .get()
            .then(querySnapshot => {
                // console.log('Total products: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    data.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                });
            });
        dispatch({ type: ActionType.GET_PRODUCT, payload: data })
        // fetch(BASE_URL + 'products/')
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionType.GET_PRODUCT, payload: data }))
        //     .catch((error) => console.log(error))
    } catch (e) {
        console.log(e);
    }
}


export const addProduct = (data) => (dispatch) => {
    //    console.log("yess",data);
    try {
        firestore()
            .collection('products')
            .add(data)
            .then(() => {
                dispatch({ type: ActionType.ADD_PRODUCT, payload: data });
            });
        //   fetch( BASE_URL+'products/', {
        //      method: 'POST', 
        //      headers: {
        //          'Content-Type': 'application/json',
        //      },
        //      body: JSON.stringify(data),
        //  })
        //      .then((response) => response.json())
        //      .then((data) => dispatch({type: ActionType.ADD_PRODUCT, payload:data}))
        //      // {
        //      //   console.log('Success:', data);
        //      // })
        //      .catch((error) => {
        //          console.error('Error:', error);
        //      });
    }
    catch (e) {
        console.log(e);
    }

}

export const deleteProduct = (id) => (dispatch) => {
    // console.log("here" + id);
    try {
        firestore()
            .collection('products')
            .doc(id)
            .delete()
            .then(() => {
                dispatch({ type: ActionType.DELETE_PRODUCT, payload: id })
            });
        // fetch(BASE_URL + 'products/' + id, {
        //     method: 'DELETE',
        // })
        //     .then((response) => response.json())
        //     .then(dispatch({ type: ActionType.DELETE_PRODUCT, payload: id }))
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }
    catch (e) {
        console.log(e);
    }

}



export const EditProduct = (data) => (dispatch) => {
    //    console.log("yessEDIT",data);
    try {
        firestore()
            .collection('products')
            .doc(data.id)
            .update({
                name: data.name,
                description: data.description,
                rating: data.rating
            })
            .then(() => {
                dispatch({ type: ActionType.UPDATE_PRODUCT, payload: data })
            });
        // fetch(BASE_URL + 'products/' + data.id, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionType.UPDATE_PRODUCT, payload: data }))
        //     // {
        //     //   console.log('Success:', data);
        //     // })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }
    catch (e) {
        console.log(e);
    }

}

