//hash ma p set
export const userReducerInitialState = {
    cred: null,
    data: null,
    user_auth: {
       loading:false,
       error: undefined,
       success: false 
    },
    user_listener: {
       loading:false,
       checked:false,
       error:undefined,
    }
}
export const signInInitialState = {
    'email': '',
    'password': ''
}
export const signUpInitialState = {
    'email': '',
    'password': '',
    'repeat password': ''
}
export const resetFormInitialState = {
    'email': '',
}
export const userInfoInitialState = {
    'username' : '',
    'phone' : '',
    'city': '',
}