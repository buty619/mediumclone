import {createStore} from "redux";

const reducer = (state,action) =>{
    if(action.type === "TOOGLE_SIGN_FLAG"){
        return{
            ...state,
            signFlag: action.signFlag
        }
    }
}
export default createStore(reducer, {signFlag: false});