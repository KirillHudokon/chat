import Field from '.'
import {shallow} from 'enzyme'
describe('testing field', ()=>{
    let changeUserData = jest.fn();
    let field = shallow(<Field type='text' value="value" name="name" changeUserData={changeUserData} />)
 it('testing field type', ()=> {
        expect(field.find('input').props().type).toEqual('text')
    })
 it('testing field value', ()=> {
        expect(field.find('input').props().value).toEqual('value')
    })
 it('testing field name', ()=> {
        expect(field.find('input').props().name).toEqual('name')
    })
 it('testing field name', ()=> {
        expect(field.find('input').props().name).toEqual('name')
    })
 it('testing field change', ()=> {
        const event = 'change value'
        field.find('input').simulate('change', event)
        expect(changeUserData).toBeCalledWith('change value');
    })
    
})
