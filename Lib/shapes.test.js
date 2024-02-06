//Imports the classes Circle, Triangle, and square from shapes.js
const { Circle, Triangle, Square } = require('./shapes');

//Test for circle with a pink background
describe('Cirlce test', () => {
    test('This is for a circle with pink background', () => {
        const shape = new Circle();
        shape.setColor('pink');
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="115" rad="80" fill="pink" />`
        );
    });
});

//Triangle test with grey background
describe('Triangle test', () => {
    test('This is for a triangle with grey background', () => {
        const shape = new Triangle();
        shape.setColor('grey');
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="grey" />`
        );
    });
});

//Square test with orange background
describe('Square test', () => {
    test('This is for a square with orange background', () => {
        const shape = new Square();
        shape.setColor('orange');
        expect(shape.render()).toEqual(
            `<rect x="73" y="40" width="160" height="160" fill="orange" />`
        );
    });
});