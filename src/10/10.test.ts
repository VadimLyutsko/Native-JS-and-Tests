import {UserType} from './10';

const makeHairStyle = (u: UserType, power:number) => {
    return  {
        ...u,
        hair:u.hair/power
    };
    // copy.hair = copy.hair  /power;

};

test('reference type test', ()=>{
    let user:UserType = {
        name:'Vadim',
        hair:24,
        address:{
            title:'Kopyl'
        }
    }
    const awesomeUser = makeHairStyle(user,2)

    expect(user.hair).toBe(24)
    expect(awesomeUser.hair).toBe(12)
    expect(awesomeUser.address).toBe(user.address)

})

test('change address', ()=>{
    let user:UserType = {
        name:'Vadim',
        hair:24,
        address:{
            title:'Kopyl'
        },
        laptop:{
            title:'zenBook'
        }
    }

    const newObg = {
        ...user,
        address:{
            ...user.address
        }
    }

    expect(newObg.address).not.toBe(user.address)
    expect(newObg.laptop).toBe(user.laptop)

})

// etc...