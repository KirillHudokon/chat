import { act } from 'react-dom/test-utils'
import * as types from '../types/'

const initial_state = {
    cred: null,
    data: null,
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
       checked:false,
       error:undefined,
    },
    reset_password:{
        loading:false,
        error:undefined,
        success:false
    },
    update_user_data:{
        loading:false,
        error:undefined,
        success:false
    }
}
export function userReducer(state=initial_state, action) {
    switch (action.type) {
        case types.SIGN_IN_REQUEST:
            return { ...state, cred: null, signin: { loading: true, error: undefined } }
        case types.SIGN_IN_SUCCESS:
            return { ...state, signin: initial_state.signin }
        case types.SIGN_IN_FAIL:
            return { ...state, signin: { loading: false, error:  action.payload } }

        case types.SIGN_UP_REQUEST:
            return { ...state, cred: null, signup: { loading: true, error: undefined } }
        case types.SIGN_UP_SUCCESS:
            return { ...state, signup: initial_state.signup }
        case types.SIGN_UP_FAIL:
            return { ...state, signup: { loading: false, error: action.payload } }

        case types.LOGOUT_REQUEST:
            return { ...state, logout: { loading: true, error: undefined } }
        case types.LOGOUT_SUCCESS:
            return { ...state, cred: null, logout: initial_state.logout }
        case types.LOGOUT_FAIL:
            return { ...state, logout: { loading: false, error: action.payload } }

        case types.USER_LISTENER_REQUEST:
            return { ...state, user_listener: { loading: true, checked: false, error: undefined } }
        case types.USER_LISTENER_SUCCESS_AUTH:
            return { ...state, cred:action.payload, user_listener: {...initial_state.user_listener, checked: true} }
        case types.USER_LISTENER_FAILED_AUTH:
            return { ...state, user_listener: {...initial_state.user_listener, checked: true} }
        case types.USER_LISTENER_FAIL:
            return { ...state, cred: null, user_listener: { loading: false, checked: true, error: action.payload } }

        case types.UPDATE_USER_DATA_REQUEST:
            return { ...state, update_user_data: { loading: true, error: undefined } }
        case types.UPDATE_USER_DATA_SUCCESS:
            return { ...state, update_user_data: initial_state.update_user_data }
        case types.UPDATE_USER_DATA_FAIL:
            return { ...state, update_user_data: { loading: false, error: action.payload } }

        case types.SUBSCRIBE_TO_USER:
            return {...state, data:action.payload};

        case types.RESET_PASSWORD_REQUEST:
            return { ...state, reset_password: { success: false, loading: true, error: undefined } }
        case types.RESET_PASSWORD_SUCCESS:
            return { ...state, reset_password: { success: true, loading: false, error: undefined } }
        case types.RESET_PASSWORD_FAIL:
            return { ...state, reset_password: { sucess: false, loading: false, error: action.payload } }

        case types.RESET_USER_WITHOUT_CRED:
            return {...initial_state, cred: state.cred, data: state.data, user_listener: {...state.user_listener, error:undefined}}

        case types.RESET_USER_STORE:
            return {...initial_state}
        default:
            return state
    }
}
