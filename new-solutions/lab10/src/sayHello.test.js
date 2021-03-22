var sayHello = require('../src/sayHello.js');

describe('Greet', function() {
    test('concats Hello and a name', function() {
        var actual = sayHello.greet('World');
        var expected = 'Hello, World';
        expect(actual).toEqual(expected);
    });

    test('says "Hello, Friend!" when no name is given', function() {
        var actual = sayHello.greet('');
        var expected = 'Hello, Friend!';
        expect(actual).toEqual(expected);
    });

    test('says good morning in the morning', function() {
        var theDate = new Date('April 01, 2021 08:00:00');

        var actual = sayHello.greet('World',theDate);
        var expected = 'Good Morning, World';
        expect(actual).toEqual(expected);

    });
    test('speaks German to Germans', function() {
        var actual = sayHello.greet('Hans');
        var expected = 'Guten Tag, Hans';
        expect(actual).toEqual(expected);
    });
});