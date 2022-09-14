import * as ActionType from '../reducer/ActionType'

export const getcategry = () => (dispatch) => {
    try {
        fetch("http://192.168.2.239:8000/Catageri")
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.GET_Categary, payload: data }))
            .catch((error) => console.log(error))
    } catch (e) {
        console.log(e);
    }
}

export const addCategory = (data) => (dispatch) => {
    console.log(data);
    try {
        fetch('http://192.168.2.239:8000/Catageri', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({type: ActionType.ADD_CATEGORY, payload: data}))
            .catch((error) => {
                console.error('Error:', error);
            });
    } catch (e) {

    }
}

export const deleteCategory = (id) => (dispatch) => {
    try {
        fetch('http://192.168.2.239:8000/Catageri/'+id, {
            method: 'DELETE'
        })
            .then(dispatch({type: ActionType.DELETE_CATEGORY, payload: id}))
            .catch((error) => {
                console.error('Error:', error);
            })
    } catch (e) {

    }
}