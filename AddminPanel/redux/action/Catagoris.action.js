import { BASE_URL } from '../../utilts/BaseUrl';
import * as ActionType from '../reducer/ActionType'

export const getcategry = () => (dispatch) => {
    try {
        fetch(BASE_URL + "Catageri/")
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.GET_CATEGORY, payload: data }))
            .catch((error) => console.log(error))
    } catch (e) {
        console.log(e);
    }
}


export const addCategory = (data) => (dispatch) => {
    // console.log(data);
    try {
        fetch( BASE_URL +'Catageri/', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.ADD_CATEGORY, payload: data }))
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


export const deleteCategory = (id) => (dispatch) => {
    // console.log(id);/
    try {
        fetch(BASE_URL +'Catageri/' +id, {
            method: 'DELETE'
        })
            .then(dispatch({type: ActionType.DELETE_CATEGORY, payload:id}))
            .catch((error) => {
                console.error('Error:', error);
            })
    } catch (e) {
        // console.log(e);
    }
}

export const updateCategory = (data) => (dispatch) => {
    console.log(data,"yesssssss");
    try {
        fetch(BASE_URL +'Catageri/'+ data.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => dispatch({ type: ActionType.UPDATE_CATEGORY, payload: data }))
        // {
        //   console.log('Success:', data);
        // })
        .catch((error) => {
            console.error('Error:', error);
        });
    } catch (e) {
        console.log(e);
    }
}

