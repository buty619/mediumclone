import {createStore} from "redux";

const reducer = (state,action) =>{
  if(action.type === "SET_STATE"){
    return{
      signFlag: false,
      getFlag:false,
      overFlag:false,
      logInFlag:false,
      userInfo:{},
      newStorieFlag:false,
      storieId:"",
      publishFlag:false,
      storieInfo:{}
    }
  }
  if(action.type === "SHOW_MODAL_SIGN_IN"){
    return{
      ...state,
      signFlag: action.signFlag
    }
  }
  if(action.type === "SHOW_MODAL_GET_STARTED"){
    return{
      ...state,
      getFlag: action.getFlag
    }
  }
  if(action.type === "SHOW_USER_MENU"){
    return{
      ...state,
      overFlag: action.overFlag
    }
  }
  if(action.type === "IS_LOG_IN"){
    return{
      ...state,
      logInFlag: action.logInFlag
    }
  }
  if(action.type === "USER_INFO"){
    return{
      ...state,
      userInfo: action.userInfo
    }
  }
  if(action.type === "SAVE_STORIE_ID"){
    return{
      ...state,
      storieId: action.storieId
    }
  }
  if(action.type === "SHOW_MODAL_PUBLISH"){
    return{
      ...state,
      publishFlag: action.publishFlag
    }
  }
  if(action.type === "SAVE_STORIE_INFO"){
    return{
      ...state,
      storieInfo: action.storieInfo
    }
  }
}
export default createStore(reducer, {signFlag: false,
                                     getFlag:false,
                                     overFlag:false,
                                     logInFlag:false,
                                     userInfo:{},
                                     storieId:"",
                                     publishFlag:false,
                                     storieInfo:{}});