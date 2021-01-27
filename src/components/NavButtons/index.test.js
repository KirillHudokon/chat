import NavButtons from '.'
import {shallow} from 'enzyme'
describe('testing navigation buttons',()=>{
 it('NavButtons content is exist', ()=> {
        const appPagesWrapper = shallow(
            <NavButtons/>
        )
        expect(appPagesWrapper.find('div')).toHaveLength(1)
    })
})
