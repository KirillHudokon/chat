import * as types from '../types/'

const initial_state = {
    cred: null,
    signin: {
        loading:false,
        error: undefined,
    },
    signup: {
      loading:false,    
      error:undefined
    },
    logout:{
       loading:false,
       error:undefined
    },
    user_listener: {
       loading:false,
       error:undefined
    },
    reset_password:{
        loading:false,
        error:undefined,
        email_link_message:undefined,
    },
    patient_signup: {
        loading:false,
        error:undefined
    },
}
export function userReducer(state=initial_state, action) {
    switch (action.type) {
        case types.SIGN_IN_REQUEST:
            return { ...state, cred: null, signin: { loading: true, error: undefined } }
        case types.SIGN_IN_SUCCESS:
            return { ...state, cred: action.payload, signin: initial_state.signin }
        case types.SIGN_IN_FAIL:
            return { ...state, cred: null, signin: { loading: false, error:  action.payload } }

        case types.SIGN_UP_REQUEST:
            return { ...state, cred: null, signup: { loading: true, error: undefined } }
        case types.SIGN_UP_SUCCESS:
            return { ...state, cred: action.payload, signup: initial_state.signup }
        case types.SIGN_UP_FAIL:
            return { ...state, cred: null, signup: { loading: false, error: action.payload } }

        case types.LOGOUT_REQUEST:
            return { ...state, logout: { loading: true, error: undefined } }
        case types.LOGOUT_SUCCESS:
            return { ...state, cred: null, logout: initial_state.logout }
        case types.LOGOUT_FAIL:
            return { ...state, cred: null, logout: { loading: false, error: action.payload } }

        case types.USER_LISTENER_REQUEST:
            return { ...state, user_listener: { loading: true, error: undefined } }
        case types.USER_LISTENER_SUCCESS_AUTH:
            return { ...state, cred:action.payload, user_listener: initial_state.user_listener }
        case types.USER_LISTENER_FAILED_AUTH:
            return { ...state, user_listener: initial_state.user_listener }
        case types.USER_LISTENER_FAIL:
            return { ...state, cred: null, user_listener: { loading: false, error: action.payload } }

        case types.RESET_PASSWORD_REQUEST:
            return { ...state, reset_password: { email_link_message: undefined, loading: true, error: undefined } }
        case types.RESET_PASSWORD_SUCCESS:
            return { ...state, reset_password: { email_link_message:action.payload, loading: false, error: undefined } }
        case types.RESET_PASSWORD_FAIL:
            return { ...state, reset_password: { email_link_message:undefined, loading: false, error: action.payload } }
        case types.RESET_USER_WITHOUT_CRED:
            return {...initial_state, cred: state.cred}
        case types.RESET_USER_STORE:
            return {...initial_state}
        default:
            return state
    }
}
