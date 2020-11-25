import {db, auth} from "../config/fire";
import { FieldRequiredError, checkIsValid, BadlyFormattedDataError } from "../exceptions";
import * as types from '../types/'

const onSignInRequest = () => ({
    type: types.SIGN_IN_REQUEST,
})

const onSignInSuccess=(cred)=>({
    type: types.SIGN_IN_SUCCESS,
    payload: cred,
})
const onSignInError=(error)=>({
    type: types.SIGN_IN_FAIL,
    payload: error,
})

const onSignUpRequest = () => ({
    type: types.SIGN_UP_REQUEST,
})

const onSignUpSuccess=(cred)=>({
    type: types.SIGN_UP_SUCCESS,
    payload: cred,
})
const onSignUpError=(error)=>({
    type: types.SIGN_UP_FAIL,
    payload: error,
})

const onLogOutRequest = () => ({
    type: types.LOGOUT_REQUEST,
})

const onLogOutSuccess=()=>({
    type: types.LOGOUT_SUCCESS,
    payload: null,
})
const onLogOutError=(error)=>({
    type: types.LOGOUT_FAIL,
    payload: error,
})

const onUserListenerRequest=()=>({
    type: types.USER_LISTENER_REQUEST,
})
const onUserListenerSuccessAuth=(user)=>({
    type: types.USER_LISTENER_SUCCESS_AUTH,
    payload: user,
})
const onUserListenerFailedAuth=()=>({
    type: types.USER_LISTENER_FAILED_AUTH,
})
const onUserListenerError=(error)=>({
    type: types.USER_LISTENER_FAIL,
    payload: error,
})

const resetPasswordRequest=()=>({
    type: types.RESET_PASSWORD_REQUEST,
})
const resetPasswordSuccess=()=>({
    type: types.RESET_PASSWORD_SUCCESS,
    payload:'Email sent'
})
const resetPasswordError=(error)=>({
    type: types.RESET_PASSWORD_FAIL,
    payload:error
})

export const resetUserStore = () => ({
    type: types.RESET_USER_STORE
})
export const resetStoreWithoutCred = ()=> ({
    type: types.RESET_USER_WITHOUT_CRED
})

export const userListener = () => async dispatch => {
    try {
        dispatch(onUserListenerRequest())
        await auth.onAuthStateChanged(async user => {
            if (user) {
                dispatch(onUserListenerSuccessAuth(user));
            } else {
                dispatch(onUserListenerFailedAuth());
            }
        });
    } catch (e) {
        dispatch(onUserListenerError(e.message));
    }
};

export const signIn = (userData) => async dispatch => {
    const {email, password} = userData
    try {
        checkIsValid(userData)
        dispatch(onSignInRequest());
        await auth.signInWithEmailAndPassword(email, password)
        await dispatch(userListener())
        dispatch(onSignInSuccess());
    } catch (e) {
        if (e instanceof FieldRequiredError) {
           dispatch(onSignInError(`${e.message} Please enter your ${e.field} and try again`));
        }else if(e instanceof BadlyFormattedDataError){
            dispatch(onSignInError(`${e.message} Please enter your ${e.field} correctly and try again`));
        }else{
            dispatch(onSignInError(e.message));
        }
    }
};

export const signUp = (userData) => async dispatch => {
    const {email, password} = userData
    try {
        checkIsValid(userData)
        dispatch(onSignUpRequest());
        const signUpUser = await auth.createUserWithEmailAndPassword(email, password);
        await db.collection('users/').doc(signUpUser.user.uid).set({
                            email,
                            uid:signUpUser.user.uid,
                            authStep:2,
                        })              
        await dispatch(userListener())
        dispatch(onSignUpSuccess());
    }catch (e){
        if (e instanceof FieldRequiredError) {
            dispatch(onSignUpError(`${e.message} Please enter your ${e.field} and try again`));
        }else if(e instanceof BadlyFormattedDataError){
             dispatch(onSignUpError(`${e.message} Please enter your ${e.field} correctly and try again`));
        }else{
             dispatch(onSignUpError(e.message));
        }
    }
};
export const logout = () => async dispatch => {
    try{
        dispatch(onLogOutRequest());
        await auth.signOut()
        dispatch(resetUserStore())
        await dispatch(userListener());
        dispatch(onLogOutSuccess());
    }catch (e){
        dispatch(onLogOutError(e.message));
    }
};

export const resetPassword = (userData) => async dispatch => {
    try {
        const {email} = userData;
        dispatch(resetPasswordRequest());
        await auth.sendPasswordResetEmail(email)
        dispatch(resetPasswordSuccess());
    }catch (e){
        if (e instanceof FieldRequiredError) {
            dispatch(resetPasswordError(`${e.message} Please enter your ${e.field} and try again`));
        }else if(e instanceof BadlyFormattedDataError){
             dispatch(resetPasswordError(`${e.message} Please enter your ${e.field} correctly and try again`));
        }else{
             dispatch(resetPasswordError(e.message));
        }
    }
};


