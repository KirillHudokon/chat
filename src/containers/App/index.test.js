import App from '.'
import {mountWithRedux} from '../../utils/tests'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
describe('testing App container',()=>{
it('testing user is checked', ()=> {
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
        const app = mountWithRedux(App, store).find('AppPagesWrapper');
        expect(app.find('.appPagesWrapper').exists()).toBeTruthy()
    })
  it('testing user is not checked', ()=> {
        const store = mockStore({
            user:{
                user_listener: {
                    checked:false,
                }
            }
        })
        const app = mountWithRedux(App, store).find(App.WrappedComponent.name)
        expect(app.find('div').text()).toEqual('loading...')
    })
})
