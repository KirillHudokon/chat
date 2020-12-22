import FormTitleWrapper from '.'
describe('testing FormTitleWrapper', ()=>{
    const formTitleWrapper = shallow(
        <FormTitleWrapper title='title'>
            <p>some text</p>
        </FormTitleWrapper>
    )
  it('testing title text', ()=> {
        expect(formTitleWrapper.find('.formTitle').text()).toEqual('title')
    })
  it('testing title children', ()=> {
        expect(formTitleWrapper.find('.formUiWrapper').text()).toEqual('some text')
    })
     
})
