import { BASE_URL } from '../../utilts/BaseUrl';
import * as ActionType from '../reducer/ActionType'

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

export const addCategory = (data) => (dispatch) => {
    // console.log(data);
    try {
        firestore()
            .collection('Category')
            .add(data)
            .then(() => {
                dispatch({ type: ActionType.ADD_CATEGORY, payload: data })
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


export const deleteCategory = (id) => (dispatch) => {
    console.log(id);
    try {
        firestore()
            .collection('Category')
            .doc(id)
            .delete()
            .then(() => {
                dispatch({ type: ActionType.DELETE_CATEGORY, payload: id })
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

