import axios from 'axios'

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

export const getAllItems =()=> async dispatch=>{
    dispatch({
        type:GET_ITEMS_REQUEST
    })
    try {
        const response = await axios.get('http://localhost:5000/api/getpizzas');
        console.log(response);
        dispatch({type:GET_ITEMS_SUCCESS,payload: response.data})

        
    } catch (error) {
        dispatch({type:GET_ITEMS_FAILED,payload: error})
    }

}