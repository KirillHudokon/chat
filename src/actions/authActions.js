import {db, auth} from "../config/fire";
import { FieldRequiredError, checkIsValid, BadlyFormattedDataError } from "../exceptions";
import * as types from '../types/'
import {store} from '../store/configureStore'
let unsubscribe;
const signInRequest = () => ({
    type: types.SIGN_IN_REQUEST,
})
const signInSuccess=(cred)=>({
    type: types.SIGN_IN_SUCCESS,
    payload: cred,
})
const signInError=(error)=>({
    type: types.SIGN_IN_FAIL,
    payload: error,
})

const signUpRequest = () => ({
    type: types.SIGN_UP_REQUEST,
})
const signUpSuccess=(cred)=>({
    type: types.SIGN_UP_SUCCESS,
    payload: cred,
})
const signUpError=(error)=>({
    type: types.SIGN_UP_FAIL,
    payload: error,
})

const logOutRequest = () => ({
    type: types.LOGOUT_REQUEST,
})
const logOutSuccess=()=>({
    type: types.LOGOUT_SUCCESS,
    payload: null,
})
const logOutError=(error)=>({
    type: types.LOGOUT_FAIL,
    payload: error,
})

const userListenerRequest=()=>({
    type: types.USER_LISTENER_REQUEST,
})
const userListenerSuccessAuth=(user)=>({
    type: types.USER_LISTENER_SUCCESS_AUTH,
    payload: user,
})
const userListenerFailedAuth=()=>({
    type: types.USER_LISTENER_FAILED_AUTH,
})
const userListenerError=(error)=>({
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

const updateUserDataRequest=()=>({
    type: types.UPDATE_USER_DATA_REQUEST,
})
const updateUserDataSuccess=()=>({
    type: types.UPDATE_USER_DATA_SUCCESS,
    payload:'Email sent'
})
const updateUserDataError=(error)=>({
    type: types.UPDATE_USER_DATA_FAIL,
    payload:error
})

export const resetUserStore = () => ({
    type: types.RESET_USER_STORE
})
export const resetStoreWithoutCred = ()=> ({
    type: types.RESET_USER_WITHOUT_CRED
})
export const subscibeToUserSuccess = (data) => ({
    type: types.SUBSCRIBE_TO_USER,
    payload: data
})
export const subscribeToUser = (uid,cb) => async dispatch => {
    try{
        return new Promise(()=>{
            if(!unsubscribe){
                unsubscribe = db.collection('users/').doc(uid).onSnapshot(snap => {
                    if(snap.exists){
                        dispatch(subscibeToUserSuccess(snap.data()))
                        cb()
                    }
                })
            }
        })
    }catch (e){
        dispatch(userListenerError(e.message));
    }
}
export const userListener = () => async dispatch => {
    try {
        dispatch(userListenerRequest())
        await auth.onAuthStateChanged(async user => {
            if (user) {
                await dispatch(subscribeToUser(user.uid, ()=>dispatch(userListenerSuccessAuth(user))))
            } else {
                dispatch(userListenerFailedAuth());
            }
        });
    } catch (e) {
        dispatch(userListenerError(e.message));
    }
};

export const signIn = (userData) => async dispatch => {
    const {email, password} = userData
    try {
        checkIsValid(userData)
        dispatch(signInRequest());
        await auth.signInWithEmailAndPassword(email, password)
        await dispatch(userListener())
        dispatch(signInSuccess());
    } catch (e) {
        if (e instanceof FieldRequiredError) {
           dispatch(signInError(`${e.message} Please enter your ${e.field} and try again`));
        }else if(e instanceof BadlyFormattedDataError){
            dispatch(signInError(`${e.message} Please enter your ${e.field} correctly and try again`));
        }else{
            dispatch(signInError(e.message));
        }
    }
};

export const signUp = (userData) => async dispatch => {
    const {email, password} = userData
    try {
        checkIsValid(userData)
        dispatch(signUpRequest());
        const signUpUser = await auth.createUserWithEmailAndPassword(email.toLowerCase(), password);
        await db.collection('users/').doc(signUpUser.user.uid).set({
                            email,
                            uid:signUpUser.user.uid,
                            authStep:1,
                        })              
        await dispatch(userListener())
        dispatch(signUpSuccess());
    }catch (e){
        if (e instanceof FieldRequiredError) {
            dispatch(signUpError(`${e.message} Please enter your ${e.field} and try again`));
        }else if(e instanceof BadlyFormattedDataError){
             dispatch(signUpError(`${e.message} Please enter your ${e.field} correctly and try again`));
        }else{
             dispatch(signUpError(e.message));
        }
    }
};
export const logout = () => async dispatch => {
    try{
        dispatch(logOutRequest());
        unsubscribe()
        unsubscribe = undefined
        await auth.signOut()
        dispatch(resetUserStore())
        await dispatch(userListener());
        dispatch(logOutSuccess());
    }catch (e){
        dispatch(logOutError(e.message));
    }
};

export const resetPassword = (userData) => async dispatch => {
    const {email} = userData
    try {
        dispatch(resetPasswordRequest())
        checkIsValid(userData)
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

export const updateUserData = (userData) => async dispatch => {
   const {data} = store.getState().user.data
   try {
        dispatch(updateUserDataRequest());
        await db.collection('users/').doc(data.uid).update({...userData, authStep: data.authStep+1})      
        dispatch(updateUserDataSuccess());
    }catch (e){
        dispatch(updateUserDataError(e.message))
    }
}
