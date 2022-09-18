import {menType} from '../02/02';
import {addSalary} from './03';

let men: menType;

beforeEach(() => {
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
                salary: 10000,
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
                salary: 25000,
                address: {
                    country: 'Russia',
                    city: 'Minsk',
                    number: 17
                }
            }
        }
    ];
});

test('Salary upp', () => {
    addSalary(men[0], 20000);
    addSalary(men[1], -20000);

    expect(men[0].work.salary).toBe(30000);
    expect(men[1].work.salary).toBe(5000);

});
