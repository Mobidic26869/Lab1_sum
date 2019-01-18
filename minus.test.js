const minus = require('./minus');

test('50 - 25 เท่ากับ 25', () => {
    expect(minus(50,25)).toBe(25);
});

test('25 - 60 เท่ากับ -35', () => {
    expect(minus(25,60)).toBe(-35)
});

test('0 - 0 เท่ากับ ?', () => {
    expect(minus(0,0)).toBe(0);
});

test('25-25 เท่ากับ ?', () => {
    expect(minus(25,25)).toBe(0);
});

test('25-26 เท่ากับ -1' , () => {
    expect(minus(25,26)).toBe(-1);
});