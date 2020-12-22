import FieldsUserDataContainer from '.'
import { 
    signInInitialState,
    signUpInitialState,
    resetFormInitialState, 
    userInfoInitialState
} from '../../../utils/initialStates'
describe('testing FieldsUserDataContainer', ()=>{
    describe('testing signin fields', ()=> {
        const fieldsUserDataContainer = mount(<FieldsUserDataContainer userData = {signInInitialState} changeUserData={()=>jest.fn()}/>)
     it('testing length match with signin initialstate', ()=> {
           const formFields = fieldsUserDataContainer.find('.formFieldContainer')
           expect(formFields).toHaveLength(Object.keys(signInInitialState).length);
        })
    })
    describe('testing signup fields', ()=> {
        const fieldsUserDataContainer = mount(<FieldsUserDataContainer userData = {signUpInitialState} changeUserData={()=>jest.fn()}/>)
     it('testing length match with signup initialstate', ()=> {
           const formFields = fieldsUserDataContainer.find('.formFieldContainer')
           expect(formFields).toHaveLength(Object.keys(signUpInitialState).length);
        })
    })
    describe('testing reset fields', ()=> {
        const fieldsUserDataContainer = mount(<FieldsUserDataContainer userData = {resetFormInitialState} changeUserData={()=>jest.fn()}/>)
     it('testing length match with reset initialstate', ()=> {
           const formFields = fieldsUserDataContainer.find('.formFieldContainer')
           expect(formFields).toHaveLength(Object.keys(resetFormInitialState).length);
        })
    })
    describe('testing user info fields', ()=> {
        const fieldsUserDataContainer = mount(<FieldsUserDataContainer userData = {userInfoInitialState} changeUserData={()=>jest.fn()}/>)
     it('testing length match with user info initialstate', ()=> {
           const formFields = fieldsUserDataContainer.find('.formFieldContainer')
           expect(formFields).toHaveLength(Object.keys(userInfoInitialState).length);
        })
    })
    
})
