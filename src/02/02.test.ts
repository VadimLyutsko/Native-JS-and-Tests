import {menType} from './02'

let men:menType;

beforeEach(()=>{
     men = [
        {
            name: 'Vadim',
            age: 20,
            address: {
                country: 'Belarus',
                city: 'Kopyl'
            },
            work: {
                title: 'rescue',
                address: {
                    country: 'Russia',
                    city: 'Soligorsk'
                }
            }
        },
        {
            name: 'Petr',
            age: 22,
            address: {
                country: 'Russia',
                city: 'Pinsk'
            },
            work: {
                title: 'worker',
                address: {
                    country: 'Russia',
                    city: 'Minsk',
                    number: 17
                }
            }
        }
    ];
})

test('Obj should be correct', () => {

    let men = [
        {
        name: 'Vadim',
        age: 20,
        address: {
            country: 'Belarus',
            city: 'Kopyl'
        },
        work: {
            title: 'rescue',
            address: {
                country: 'Russia',
                city: 'Soligorsk'
            }
        }
    },
        {
            name: 'Petr',
            age: 22,
            address: {
                country: 'Russia',
                city: 'Pinsk'
            },
            work: {
                title: 'worker',
                address: {
                    country: 'Russia',
                    city: 'Minsk',
                    number: 17
                }
            }
        }
    ];

    expect(men.length).toBe(2);

    expect(men[0].name).toBe('Vadim');
    expect(men[0].age).toBe(20);
    expect(men[0].address.country).toBe('Belarus');
    expect(men[0].address.city).toBe('Kopyl');

    expect(men[1].age).toBe(22);
    expect(men[1].address.country).toBe('Russia');
    expect(men[1].work.address.city).toBe('Minsk');
    expect(men[1].work.address.number).toBe(17);
});