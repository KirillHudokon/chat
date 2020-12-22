import FormAccountSupportLink from '.'
describe('testing FormAccountSupportLink', ()=>{
  it('testing text link with action', ()=> {
        const formAccountSupportLink = shallow(<FormAccountSupportLink text='text' action={jest.fn()} />)
        const linkText = formAccountSupportLink.find('.formAccountSupportLinkRedirect')
        expect(linkText.text().trim()).toEqual('text')
       // (formAccountSupportLink).toHaveLength(Object.keys(signInInitialState).length);
    })
  it('testing simple form link text', ()=> {
        const formAccountSupportLink = shallow(<FormAccountSupportLink simple={true} text='text' />)
        const linkText = formAccountSupportLink.find('.formAccountSupportLinkRedirect')
        expect(linkText.text().trim()).toEqual('text')
    })
  it('testing link only with text', ()=> {
        const formAccountSupportLink = shallow(<FormAccountSupportLink text='text' />)
        expect(formAccountSupportLink.getElements()[0].props.children[0]).toEqual('text')
    })    
     
})
