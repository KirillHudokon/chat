import {db, auth} from "../config/fire";
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
    error: true,
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
    error: true,
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
    error: true,
    payload: error,
})

const onUserListenerRequest=()=>({
    type: types.USER_LISTENER_REQUEST,
})
const onUserListenerSuccessAuth=(cred)=>({
    type: types.USER_LISTENER_SUCCESS_AUTH,
    payload: cred,
})
const onUserListenerFailedAuth=(cred)=>({
    type: types.USER_LISTENER_FAILED_AUTH,
    payload: cred,
})
const onUserListenerError=(error)=>({
    type: types.USER_LISTENER_FAIL,
    error: true,
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
export const signIn = (userData) => async dispatch => {
    const {email, password} = userData
    try {
        dispatch(onSignInRequest());
        await auth.signInWithEmailAndPassword(email, password)
            .then(async userData => {
                dispatch(onSignInSuccess(userData));
            })
            .catch(e => {
                console.log(e)
                dispatch(onSignInError(e.message));
            });
    } catch (e) {
       // if (e instanceof FieldRequiredError) {
        //    dispatch(onLogError(`Not valid: ${e.message}`));
       // }else{
         //   dispatch(onLogError(e.message));
        //}
    }
};

export const signUp = (email, password1, password2) => async dispatch => {
    try {
        dispatch(onSignUpRequest());
        await auth.createUserWithEmailAndPassword(email, password1)
            .then(async userCredentials => {
                if (userCredentials.user) {
                    await db.collection('users/')
                        .doc(userCredentials.user.uid).set({
                            email,
                            uid:userCredentials.user.uid,
                        })
                    let userData = await auth.currentUser;
                    dispatch(onSignUpSuccess(userData));
                }
        })
    }catch (e){
       // if (e instanceof FieldRequiredError) {
       //     dispatch(onSignUpError(`Not valid: ${e.message}`));
       // }else{
        //    dispatch(onSignUpError(e.message));
       // }
    }
};
export const logout = () => dispatch => {
    dispatch(onLogOutRequest());
    auth.signOut().then(() => {
        dispatch(onLogOutSuccess());
    }).catch(e => {
        dispatch(onLogOutError(e.message));
    });
};
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

export const resetPassword = (cred) => dispatch => {
    try {
        const {email} = cred;
        dispatch(resetPasswordRequest());
        auth.sendPasswordResetEmail(email).then(() => {
            dispatch(resetPasswordSuccess());
        }).catch(e => {
            dispatch(resetPasswordError(e.message));
        });
    }catch (e){
        dispatch(resetPasswordError(`Not valid: ${e.message}`))
    }
};

;

