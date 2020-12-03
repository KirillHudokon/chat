import * as types from '../../types'
import { userReducerInitialState as initialState} from '../../utils/initialStates'

export function userReducer(state=initialState, action) {
    switch (action.type) {
        case types.SIGN_IN_REQUEST:
        case types.SIGN_UP_REQUEST:
        case types.UPDATE_USER_DATA_REQUEST:
        case types.LOGOUT_REQUEST:
            return { ...state, cred: null, user_auth: { loading: true, error: undefined } }
        case types.SIGN_IN_SUCCESS:
        case types.SIGN_UP_SUCCESS:
        case types.UPDATE_USER_DATA_SUCCESS:       
        case types.LOGOUT_SUCCESS: 
            return { ...state, user_auth: initialState.user_auth }
        case types.SIGN_IN_FAIL:
        case types.SIGN_UP_FAIL:
        case types.UPDATE_USER_DATA_FAIL:
        case types.LOGOUT_FAIL:
            return { ...state, user_auth: { loading: false, error:  action.payload } }

        case types.USER_LISTENER_REQUEST:
            return { ...state, user_listener: { loading: true, checked: false, error: undefined } }
        case types.USER_LISTENER_SUCCESS_AUTH:
            return { ...state, cred:action.payload, user_listener: {...initialState.user_listener, checked: true} }
        case types.USER_LISTENER_FAILED_AUTH:
            return { ...state, cred: null, user_listener: { ...state.user_listener, loading: false, checked: true } }
        case types.USER_LISTENER_FAIL:
            return { ...state, cred: null, user_listener: { loading: false, checked: true, error: action.payload } }

        case types.SUBSCRIBE_TO_USER:
            return {...state, data:action.payload};

        case types.RESET_PASSWORD_REQUEST:
            return { ...state, user_auth: { success: false, loading: true, error: undefined } }
        case types.RESET_PASSWORD_SUCCESS:
            return { ...state, user_auth: { success: true, loading: false, error: undefined } }
        case types.RESET_PASSWORD_FAIL:
            return { ...state, user_auth: { success: false, loading: false, error: action.payload } }

        case types.RESET_USER_WITHOUT_CRED:
            return {...initialState, cred: state.cred, data: state.data, user_listener: {...state.user_listener, error:undefined}}

        case types.RESET_USER_STORE:
            return {...initialState}
        default:
            return state
    }
}
