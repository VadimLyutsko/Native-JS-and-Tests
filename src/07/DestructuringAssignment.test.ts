import exp from 'constants';

let users = [
    {
        name: '',
        age: 22,
        address: {
            city: '',
            numberHouse: 25,
        }
    },
    {
        name: '',
        address: {
            city: 'Kopyl',
            numberHouse: 0,
        }
    }, {
        name: 'Vika',
        address: {
            city: 'Kopyl',
            numberHouse: 25,
        }
    }, {
        name: 'Piter',
        address: {
            city: 'Kopyl',
            numberHouse: 25,
        }
    }];
beforeEach(() => {
    users = [{
        name: 'Vadim',
        age: 22,
        address: {
            city: 'Kopyl',
            numberHouse: 25,
        }
    },
        {
            name: 'Piter',
            address: {
                city: 'Kopyl',
                numberHouse: 25,
            }
        }, {
            name: 'Vika',
            address: {
                city: 'Kopyl',
                numberHouse: 25,
            }
        }, {
            name: 'Piter',
            address: {
                city: 'Kopyl',
                numberHouse: 25,
            }
        }];
});

test('', () => {


    const [
        {name: name1, age: age1, address: {city: city1, numberHouse: numberHouse1}},
        {name: name2, age: age2 = 200, address: {city: city2, numberHouse: numberHouse2}}, ...tail] = users;

    expect(users.length).toBe(4);
    expect(name2).toBe('Piter');
    expect(age2).toBe(200);
    expect(tail.length).toBe(2);

});