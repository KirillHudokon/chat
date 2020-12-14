import App from '.'
import {shallowWithRedux} from '../../utils/tests'
import {userReducer} from '../../reducers/user'
import {userReducerInitialState} from '../../utils/initialStates'
describe('testing App container',()=>{
    describe('testing loading' , ()=>{
        it('loading', ()=> {
            const props = {
                userListener: jest.fn(),
                userChecked: false
              }
              console.debug(1)
            const app = shallowWithRedux(<App/>, userReducer, {initialState: userReducerInitialState})
            console.debug(app)
            expect(app.find('div').text()).toEqual('loading...')
        })
    })
})