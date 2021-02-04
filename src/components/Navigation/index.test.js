import Navigation from '.'
import {mountWithRedux} from '../../utils/tests/'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
describe('testing navigation',()=>{
    const store = mockStore({
        user:{
            cred: {},
            data: {},
            user_auth: {
               loading:false,
               error: undefined,
               success: false, 
            },
            user_listener: {
               loading:false,
               checked:true,
               error:undefined,
            }
        }
    })
    const nav = mountWithRedux(Navigation, store).find('nav');
 it('check Navigation is exist', ()=> {
     expect(nav.exists('nav')).toEqual(true);
    })
})
