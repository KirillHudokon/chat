import NavButtons from '.'
import {shallow} from 'enzyme'
import {navButtons} from '../../utils/navButtons'
describe('testing navigation buttons',()=>{
    const navButtonsComponent = shallow(<NavButtons/>)
 it('NavButtons content is exist', ()=> {
        expect(navButtonsComponent.find('.navButtons')).toHaveLength(1)
    })
 it('check NavButtons length', ()=> {
        expect(navButtonsComponent.find('.navButton')).toHaveLength(navButtons.length)
    })
})
