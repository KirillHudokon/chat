import Navigation from '.'
import {shallow,mount} from 'enzyme'
describe('testing navigation',()=>{
    const nav = mount(<Navigation/>)
 it('check Navigation is exist', ()=> {
     //console.log(nav.find('nav').exists().to.equal(true))
     expect(nav.exists('nav')).toEqual(true);
    })
})
