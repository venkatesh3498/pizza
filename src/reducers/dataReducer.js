import { GET_ITEMS_SUCCESS,GET_ITEMS_FAILED,GET_ITEMS_REQUEST } from "../actions/dataActions";

export const getAllItemsReducers = (state={items:[]},action)=>{
    console.log(action.payload);

    switch(action.types){
        case GET_ITEMS_REQUEST:
            return{
                laoding:true,
                ...state
            }
        case GET_ITEMS_SUCCESS:
            return{
                ...state,
                items:action.payload,
                laoding:false,
            }
        case GET_ITEMS_FAILED:
            return{
                ...state,
                error:action.payload,
                loading:false,
            }
        default:
            return{
                ...state
            }
    }

}