import { BASE_URL } from '../../utilts/BaseUrl';
import * as ActionType from '../reducer/ActionType'
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';



export const getcategry = () => async (dispatch) => {
    try {
        let data = [];

        await firestore()
            .collection('Category')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    data.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                });
            });
        dispatch({ type: ActionType.GET_CATEGORY, payload: data })
        // fetch(BASE_URL + "Catageri/")
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionType.GET_CATEGORY, payload: data }))
        //     .catch((error) => console.log(error))
    } catch (e) {
        console.log(e);
    }
}

export const addCategory = (data) => async (dispatch) => {
    // console.log("ttttttt",data);
    try {
        let ranNum = Math.floor(Math.random() * 1000).toString();

        const reference = storage().ref('/Category/' + ranNum);

        await reference.putFile(data.pro_image);

        const url = await storage().ref('/Category/' + ranNum).getDownloadURL();

        console.log(url);
        firestore()
            .collection('Category')
            .add({name: data.name, description: data.description, fileName: ranNum, pro_img: url})
            .then(() => {
                dispatch({ type: ActionType.ADD_CATEGORY, payload: { name: data.name, description: data.description, fileName: ranNum, pro_img: url }})
            });
        // fetch( BASE_URL +'Catageri/', {
        //     method: 'POST', 
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionType.ADD_CATEGORY, payload: data }))
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


export const deleteCategory = (id,fileName) => (dispatch) => {
    console.log("fileNamefileNamefileNamefileNamefileName", id,fileName);
    try {
        const delReference = storage().ref('/Category/' + fileName);

        delReference
            .delete()
            .then(function () {
                firestore()
                    .collection('Category')
                    .doc(id)
                    .delete()
                    .then(() => {
                        dispatch({ type: ActionType.DELETE_CATEGORY, payload: id })
                    });
            }).catch(function (error) {
                // Uh-oh, an error occurred!
            });
        // fetch(BASE_URL + 'Catageri/' + id, {
        //     method: 'DELETE'
        // })
        //     .then(dispatch({ type: ActionType.DELETE_CATEGORY, payload: id }))
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     })
    } catch (e) {
        // console.log(e);
    }
}

export const updateCategory = (data) => (dispatch) => {
    console.log(data, "yesssssss");
    try {
        firestore()
            .collection('Category')
            .doc(data.id)
            .update({
                name: data.name,
                description: data.description
            })
            .then(() => {
                dispatch({ type: ActionType.UPDATE_CATEGORY, payload: data })
            });
        // fetch(BASE_URL + 'Catageri/' + data.id, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => response.json())
        //     .then((data) => dispatch({ type: ActionType.UPDATE_CATEGORY, payload: data }))
        //     // {
        //     //   console.log('Success:', data);
        //     // })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    } catch (e) {
        console.log(e);
    }
}

