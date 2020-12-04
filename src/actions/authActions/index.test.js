import * as ac from '.'
import * as types from '../../types/'
describe('testing auth actions',() =>{
    describe('testing sign in', () => {
        it('loading', ()=>{
            const action = {
                type: types.SIGN_IN_REQUEST
            }
            expect(ac.signInRequest()).toEqual(action)
        })
        it('success', () => {
            const action = {
                type: types.SIGN_IN_SUCCESS
            }
            expect(ac.signInSuccess()).toEqual(action)
        })
        it('fail', () => {
            const action = {
                type: types.SIGN_IN_FAIL,
                payload: 'error'
            }
            expect(ac.signInError(action.payload)).toEqual(action)
        })
    })
    describe('testing sign up', () => {
        it('loading', ()=>{
            const action = {
                type: types.SIGN_UP_REQUEST
            }
            expect(ac.signUpRequest()).toEqual(action)
        })
        it('success', () => {
            const action = {
                type: types.SIGN_UP_SUCCESS
            }
            expect(ac.signUpSuccess()).toEqual(action)
        })
        it('fail', () => {
            const action = {
                type: types.SIGN_UP_FAIL,
                payload: 'error'
            }
            expect(ac.signUpError(action.payload)).toEqual(action)
        })
    })
    describe('testing logout', () => {
        it('loading', ()=>{
            const action = {
                type: types.LOGOUT_REQUEST
            }
            expect(ac.logOutRequest()).toEqual(action)
        })
        it('success', () => {
            const action = {
                type: types.LOGOUT_SUCCESS
            }
            expect(ac.logOutSuccess()).toEqual(action)
        })
        it('fail', () => {
            const action = {
                type: types.LOGOUT_FAIL,
                payload: 'error'
            }
            expect(ac.logOutError(action.payload)).toEqual(action)
        })
    })
    describe('testing user subscribe', () => {
        it('subscribe to user snap', ()=>{
            const action = {
                type: types.SUBSCRIBE_TO_USER,
                payload: {}
            }
            expect(ac.subscibeToUserSuccess(action.payload)).toEqual(action)
        })
        it('loading', ()=>{
            const action = {
                type: types.USER_LISTENER_REQUEST
            }
            expect(ac.userListenerRequest()).toEqual(action)
        })
        it('success', () => {
            const action = {
                type: types.USER_LISTENER_SUCCESS_AUTH,
                payload: {}
            }
            expect(ac.userListenerSuccessAuth(action.payload)).toEqual(action)
        })
        describe('fail', ()=>{
            it('fail subscribe', ()=>{
                const action = {
                    type: types.USER_LISTENER_FAILED_AUTH,
                }
                expect(ac.userListenerFailedAuth()).toEqual(action)
            })
            it('failed request', ()=>{
                const action = {
                    type: types.USER_LISTENER_FAIL,
                    payload: 'error'
                }
                expect(ac.userListenerError(action.payload)).toEqual(action)
            })
            
        })
    })
    describe('testing update', () => {
        it('loading', ()=>{
            const action = {
                type: types.UPDATE_USER_DATA_REQUEST
            }
            expect(ac.updateUserDataRequest()).toEqual(action)
        })
        it('success', () => {
            const action = {
                type: types.UPDATE_USER_DATA_SUCCESS
            }
            expect(ac.updateUserDataSuccess()).toEqual(action)
        })
        it('fail', () => {
            const action = {
                type: types.UPDATE_USER_DATA_FAIL,
                payload: 'error'
            }
            expect(ac.updateUserDataError(action.payload)).toEqual(action)
        })
    })
    describe('testing reset password', () => {
        it('loading', ()=>{
            const action = {
                type: types.RESET_PASSWORD_REQUEST
            }
            expect(ac.resetPasswordRequest()).toEqual(action)
        })
        it('success', () => {
            const action = {
                type: types.RESET_PASSWORD_SUCCESS
            }
            expect(ac.resetPasswordSuccess()).toEqual(action)
        })
        it('fail', () => {
            const action = {
                type: types.RESET_PASSWORD_FAIL,
                payload: 'error'
            }
            expect(ac.resetPasswordError(action.payload)).toEqual(action)
        })
    })
    describe('reset',()=>{
        it('reset without cred',()=>{
            const action = {
                type:types.RESET_USER_WITHOUT_CRED
            }
            expect(ac.resetStoreWithoutCred()).toEqual(action)
        })
        it('full reset',()=>{
            const action = {
                type:types.RESET_USER_STORE
            }
            expect(ac.resetUserStore()).toEqual(action)
        })
    })
 
})