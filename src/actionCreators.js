const setState = () => {
  return {
    type:"SET_STATE",
    getFlag: false
  }
}

const showModalGetStarted = () => {
  return {
    type:"SHOW_MODAL_GET_STARTED",
    getFlag: true
  }
}

const hideModalGetStarted = () => {
  return {
    type:"SHOW_MODAL_GET_STARTED",
    signFlag: false
  }
}

const showModalSignIn = () => {
  return {
    type:"SHOW_MODAL_SIGN_IN",
    signFlag: true
  }
}

const hideModalSignIn = () => {
  return{
    type:"SHOW_MODAL_SIGN_IN",
    signFlag: false
  }
}

const isLogIn = () => {
  return{
    type:"IS_LOG_IN",
    logInFlag: true
  }
}

const logOut = () =>{
  return{
    type:"IS_LOG_IN",
    logInFlag: false
  }
}

const userInfo = (data) => {
  return{
    type:"USER_INFO",
    userInfo: data
  }
}

const showUserMenu = (flag) =>{
  return{
    type: "SHOW_USER_MENU",
    overFlag: flag
  }
}

const saveStorieId = (value) =>{
  return{
    type: "SAVE_STORIE_ID",
    storieId: value
  }
}

const showModalPublish = (flag) =>{
  return{
    type: "SHOW_MODAL_PUBLISH",
    publishFlag: flag
  }
}

const saveStorieInfo = (data) => {
  return{
    type:"SAVE_STORIE_INFO",
    storieInfo: data
  }
}

export {showModalSignIn,
        showModalGetStarted, 
        setState,
        hideModalGetStarted,
        hideModalSignIn,
        isLogIn,
        logOut,
        userInfo,
        showUserMenu,
        saveStorieId,
        showModalPublish,
        saveStorieInfo}