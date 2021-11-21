import { USER_REGISTER_REQUEST,USER_LOGIN_REQUEST } from "../actions/userActions";

export const userRegisterReducer=(state={},action)=>{

    switch(action.type){
        case USER_REGISTER_REQUEST:
            return{
                loading:true
            };
        case 'USER_REGISTER_SUCCESS':
            return{
                loading:false,
                response:action.payload
            };
        case 'USER_REGISTER_FAILED':
            return{
                loading:false,
                error:action.payload
            };
        default:
            return state;
    }
};
export const userLoginReducer=(state={},action)=>{

    switch(action.type){
        case USER_LOGIN_REQUEST:
            return{
                loading:true
            };
        case 'USER_LOGIN_SUCCESS':
            return{
                loading:false,
                success:true,
                currentUser:action.payload,
            };
        case 'USER_LOGIN_FAILED':
            return{
                loading:false,
                error:action.payload
            };
        default:
            return {
                state,
                success:false
            };
    }
}