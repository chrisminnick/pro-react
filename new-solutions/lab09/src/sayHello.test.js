var sayHello = require('./sayHello.js');

describe('Greet', function() {
    test('concats Hello and a name', function() {
            var actual = sayHello.greet('World');
            var expected = 'Hello, World';
            expect(actual).toEqual(expected);
    });
});
