type UsersType ={ [key:string]:{city:string,numberHouse:number}}

 let users:UsersType ;

beforeEach(()=>{
    users  = {
        '0': {city: 'Kopyl', numberHouse: 44,},
        '1': {city: '33', numberHouse: 55,},
        '2': {city: '22', numberHouse: 66,},
        '3': {city: '11', numberHouse: 77,}
    };
})


test('Obj should be update', ()=>{


    const user = {city: 'Slytsk',numberHouse:22}
    // users[user.numberHouse]=users

    users['1'].city='Soligorsk'

    // expect(users[0].city).toBe('Kopyl')
    expect(users['1'].city).toBe('Soligorsk')
    expect(users['1']).toEqual({city: 'Soligorsk', numberHouse: 55,})



})


test('Obj should be delete', ()=>{


    delete users['1']

    expect(users['1']).toBeUndefined()
})