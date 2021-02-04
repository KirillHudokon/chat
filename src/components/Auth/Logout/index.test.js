import Logout from '.'

describe('testing navigation',()=>{
    const logout  = shallow(<Logout logout={jest.fn()}/>)
 it('check Logout is exist', ()=> {
     expect(logout.exists('div')).toEqual(true);
    })
})
