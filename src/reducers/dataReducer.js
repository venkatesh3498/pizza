import { GET_ITEMS_SUCCESS,GET_ITEMS_FAILED,GET_ITEMS_REQUEST } from "../actions/dataActions";

export const getAllItemsReducers=(state={items : [] } , action)=>{

    switch(action.type)
    {
        case GET_ITEMS_REQUEST : return{
            loading : true,
            ...state
        }
        case GET_ITEMS_SUCCESS : return{
            loading : false ,
            items : action.payload
        }
        case GET_ITEMS_FAILED : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}
