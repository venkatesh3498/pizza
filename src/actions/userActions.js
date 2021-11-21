import axios from "axios";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const res = await axios.post('http://localhost:5000/api/auth/register',user)
    console.log(res);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: res.status });
    window.location.href='/login';
  } catch (err) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: err });
  }
};
export const loginUser=(user)=> async dispatch=>{
    dispatch({type:USER_LOGIN_REQUEST});
    try {
        const res = await axios.post('http://localhost:5000/api/auth/login',user)
        console.log(res["data"]);
        dispatch({type:"USER_LOGIN_SUCCESS",payload: res.data});
        localStorage.setItem("currentUser",JSON.stringify(res.data));
        window.location.href='/';
    } catch (err) {
        dispatch({type: "USER_LOGIN_FAILED", payload: err})
    }
}


export const logoutUser=()=>dispatch=>{


  localStorage.removeItem('currentUser')
  window.location.href='/login'

}