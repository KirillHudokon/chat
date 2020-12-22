import Submit from '.'
describe('testing Submit', ()=>{
  it('testing submit when loading is true', ()=> {
        const submit = shallow(<Submit loading={true} handleAction={jest.fn()} />)
        const sumbitIcon = submit.find('Icon').props()
        expect(sumbitIcon.icon).toEqual('spinner');
    })
    it('testing submit when loading is false', ()=> {
        const submit = shallow(<Submit loading={false} handleAction={jest.fn()} />)
        const sumbitIcon = submit.find('Icon').props()
        expect(sumbitIcon.icon).toEqual('play');

    })           
})
