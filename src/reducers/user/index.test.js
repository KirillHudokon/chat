import {userReducer} from '.'
import * as types from '../../types'
import { userReducerInitialState as initialState } from '../../utils/initialStates'
const loadingState = {
    ...initialState,
    cred: null, 
    user_auth: {
      loading: true,
      error: undefined 
    }  
}
const successState = {
    ...initialState, 
    user_auth: initialState.user_auth
}
const failState = action =>({
    ...initialState, 
    user_auth: { 
        loading: false,
        error:  action.payload
    } 
})
describe('testing userReducer', ()=>{
    describe('testing sign in', ()=>{
        it('loading', ()=>{
            const action = {
                type: types.SIGN_IN_REQUEST
            }
            expect(userReducer(initialState, action)).toEqual(loadingState)
        })
        it('success', ()=>{
            const action = {
                type: types.SIGN_IN_SUCCESS
            }
            expect(userReducer(loadingState, action)).toEqual(successState)
        })
        it('fail', ()=>{
            const action = {
                type: types.SIGN_IN_FAIL,
                payload: 'error'
            }
            expect(userReducer(loadingState, action)).toEqual(failState(action))
        })
    }) 
    describe('testing sign up', ()=>{
        it('loading', ()=>{
            const action = {
                type: types.SIGN_UP_REQUEST
            }
            expect(userReducer(initialState, action)).toEqual(loadingState)
        })
        it('success', ()=>{
            const action = {
                type: types.SIGN_UP_SUCCESS
            }
            expect(userReducer(loadingState, action)).toEqual(successState)
        })
        it('fail', ()=>{
            const action = {
                type: types.SIGN_UP_FAIL,
                payload: 'error'
            }
            expect(userReducer(loadingState, action)).toEqual(failState(action))
        })
    })
    describe('testing logout', ()=>{
        it('loading', ()=>{
            const action = {
                type: types.LOGOUT_REQUEST
            }
            expect(userReducer(initialState, action)).toEqual(loadingState)
        })
        it('success', ()=>{
            const action = {
                type: types.LOGOUT_SUCCESS
            }
            expect(userReducer(loadingState, action)).toEqual(successState)
        })
        it('fail', ()=>{
            const action = {
                type: types.LOGOUT_FAIL,
                payload: 'error'
            }
            expect(userReducer(loadingState, action)).toEqual(failState(action))
        })
    })
    describe('testing update', ()=>{
        it('loading', ()=>{
            const action = {
                type: types.UPDATE_USER_DATA_REQUEST
            }
            expect(userReducer(initialState, action)).toEqual(loadingState)
        })
        it('success', ()=>{
            const action = {
                type: types.UPDATE_USER_DATA_SUCCESS
            }
            expect(userReducer(loadingState, action)).toEqual(successState)
        })
        it('fail', ()=>{
            const action = {
                type: types.UPDATE_USER_DATA_FAIL,
                payload: 'error'
            }
            expect(userReducer(loadingState, action)).toEqual(failState(action))
        })
    })
    describe('testing reset password', ()=>{
        const loadingState = {
            ...initialState,
            cred: null, 
            user_auth: {
              loading: true,
              error: undefined, 
              success: false 
            }  
        }
        it('loading', ()=>{
            const action = {
                type: types.RESET_PASSWORD_REQUEST
            }
            expect(userReducer({
                ...initialState,
                cred: null, 
                user_auth: {
                  loading: true,
                  error: undefined, 
                  success: false 
                }  
            }, action)).toEqual(loadingState)
        })
        it('success', ()=>{
            const action = {
                type: types.RESET_PASSWORD_SUCCESS
            }
            expect(userReducer(loadingState, action)).toEqual({
                ...initialState,
                cred: null, 
                user_auth: {
                  loading: false,
                  error: undefined, 
                  success: true 
                }  
            })
        })
        it('fail', ()=>{
            const action = {
                type: types.RESET_PASSWORD_FAIL,
                payload: 'error'
            }
            expect(userReducer(loadingState, action)).toEqual({
                ...initialState,
                cred: null, 
                user_auth: {
                  loading: false,
                  error: action.payload, 
                  success: false 
                }  
            })
        })
    })
    describe('testing user subscribe', ()=>{
        const loadingState = {
            ...initialState,
            cred: null, 
            user_listener: {
              loading: true,
              error: undefined, 
              checked: false  
            }  
        }
        it('loading', ()=>{
            const action = {
                type: types.USER_LISTENER_REQUEST
            }
            expect(userReducer({
                ...initialState,
                user_listener: {
                  loading: true,
                  error: undefined, 
                }  
            }, action)).toEqual(loadingState)
        })
        it('success', ()=>{
            const action = {
                type: types.USER_LISTENER_SUCCESS_AUTH,
                payload: {}
            }
            expect(userReducer(loadingState, action)).toEqual({
                ...initialState,
                cred: action.payload, 
                user_listener: {
                  loading: false,
                  error: undefined, 
                  checked: true 
                }  
            })
        })
        it('subscribe to user snap', ()=>{
            const action = {
                type: types.SUBSCRIBE_TO_USER,
                payload: {}
            }
            expect(userReducer(initialState, action)).toEqual({
                ...initialState,
                data: action.payload
            })
        })
        describe('fail', ()=>{
            it('fail subscribe', ()=>{
                const action = {
                    type: types.USER_LISTENER_FAILED_AUTH,
                }
                expect(userReducer(loadingState, action)).toEqual({
                    ...initialState,
                    cred: null, 
                    user_listener: {
                      ...initialState.user_listener,    
                      loading: false,
                      checked: true
                    }  
                })
            })
            it('failed request', ()=>{
                const action = {
                    type: types.USER_LISTENER_FAIL,
                    payload: 'error'
                }
                expect(userReducer(loadingState, action)).toEqual({
                    ...initialState,
                    cred: null, 
                    user_listener: {
                        loading: false,
                        error: action.payload, 
                        checked: true
                    }  
                })
            })
            
        })
        describe('reset',()=>{
            it('reset without cred',()=>{
                const action = {
                    type:types.RESET_USER_WITHOUT_CRED
                }
                expect(userReducer({
                    ...initialState,
                    cred:{},
                    data:{}
                },action)).toEqual({
                    ...initialState, 
                    cred: {},
                    data: {},
                    user_listener: {
                        ...initialState.user_listener, 
                        error:undefined
                    }
                })
            })
            it('full reset',()=>{
                const action = {
                    type:types.RESET_USER_STORE
                }
                expect(userReducer({cred:{}},action)).toEqual({
                    ...initialState, 
                })
            })
        })
    })
})