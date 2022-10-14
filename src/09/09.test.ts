import exp from 'constants';

function icreaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
}

test('big test', () => {
    let user: UserType = {
        name: 'Verka',
        age: 22
    };

    icreaseAge(user);

    const siperMan = user;

    siperMan.name = 'Vladik';

    expect(user.age).toBe(23);
    expect(user.name).toBe('Vladik');
});

test('array bit test', () => {
    let users = [
        {name: 'Verka', age: 22},
        {name: 'Itil', age: 54}
    ];

    const admins = users;

    admins.push({
        name: 'Valal',
        age: 545
    });


    expect(users.length).toBe(3);
    expect(users[2]).toEqual({
        name: 'Valal',
        age: 545
    });

});