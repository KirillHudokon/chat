import AppPagesWrapper from '.'
import {shallow} from 'enzyme'
describe('testing app wrapper',()=>{
 it('appwrapper content is exist', ()=> {
        const appPagesWrapper = shallow(
            <AppPagesWrapper>
                <div className="testingChildren">
                    test
                </div>
            </AppPagesWrapper>
        )
        expect(appPagesWrapper.find('.testingChildren')).toHaveLength(1)
    })
})
