import {createStore} from "redux";

const reducer = (state,action) =>{
  if(action.type === "TOOGLE_SIGN_FLAG"){
    return{
      ...state,
      signFlag: action.signFlag
    }
  }
  if(action.type === "TOOGLE_GET_FLAG"){
    return{
      ...state,
      getFlag: action.getFlag
    }
  }
}
export default createStore(reducer, {signFlag: false,
                                     getFlag:false});