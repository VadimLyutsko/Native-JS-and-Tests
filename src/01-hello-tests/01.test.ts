import {remains, sum} from './01';
import {multi} from './01';

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
});

test('sum should be correct', () => {

    let result1 = sum(a, b);
    let result2 = sum(b, c);

    expect(result1).toBe(3);
    expect(result2).toBe(5);
});


test('multiply should be correct', () => {

    let result1 = multi(a, b);
    let result2 = multi(b, c);

    expect(result1).toBe(2);
    expect(result2).toBe(6);
});

test('remains should be correct', () => {
    let result1 = remains(c, b);
    b = 10;
    c = 5;
    let result2 = remains(b, c);
    a = 17;
    b = 7;
    let result3 = remains(a, b);

    expect(result1).toBe(1);
    expect(result2).toBe(0);
    expect(result3).toBe(3);
});