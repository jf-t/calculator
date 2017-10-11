var _ = require('lodash');

describe('CalculatorBrain', function () {
    var brain = require('../src/app/util/calculator_brain.js');

    beforeEach(function() {
        brain = _.merge({}, brain);
    });

    it ("Loads with three core variables", function() {
        expect(brain.firstValue).toEqual('');
        expect(brain.operator).toEqual('');
        expect(brain.secondValue).toEqual('');
    });

    it ('Store a simple first value', function () {
        brain.valueAddition('9');
        expect(brain.firstValue).toEqual('9');
    });

    it ('Clears', function () {
        brain.valueAddition('9');
        brain.clearValue();

        expect(brain.firstValue).toEqual('');
    });


    describe('Storing Value Properly', function () {
        beforeEach(function() {
            brain = _.merge({}, brain);
        });

        it ('Store multiple values as a string', function () {
            brain.valueAddition('5');
            brain.valueAddition('4');

            expect(brain.firstValue).toEqual('54');
            brain.clearValue();
        });


        it ('Take a decimal', function () {
            brain.valueAddition('8');
            brain.addDot();
            brain.valueAddition('5');

            expect(brain.firstValue).toEqual('8.5');
            brain.clearValue();
        });

        it ('Can be inverted', function () {
            brain.valueAddition('9');
            brain.addDot();
            brain.valueAddition('2');
            brain.inverseAction();

            expect(brain.firstValue).toEqual('-9.2');
            brain.clearValue();
        });
    });

    describe('Operators work as expected', function () {
        beforeEach(function() {
            brain = _.merge({}, brain);
        });

        it ('Stores operator correctly', function () {
            brain.valueAddition('3');
            brain.addOperator('-');

            expect(brain.operator).toEqual('-');
            brain.clearValue();
        });
        it ('Addition', function () {
            brain.valueAddition('3');
            brain.addOperator('+');
            brain.valueAddition('5');

            expect(brain.equals()).toEqual('8');
        });
        it ('Subtract', function () {
            brain.valueAddition('8');
            brain.addOperator('-');
            brain.valueAddition('2');

            expect(brain.equals()).toEqual('6');
        });
        it ('Multiply', function () {
            brain.valueAddition('2');
            brain.addOperator('*');
            brain.valueAddition('4');

            expect(brain.equals()).toEqual('8');
        });
        it ('Divide', function () {
            brain.valueAddition('9');
            brain.addOperator('/');
            brain.valueAddition('3');

            expect(brain.equals()).toEqual('3');
        });
        it ('Returns first value if not complete', function () {
            brain.valueAddition('3');

            expect(brain.equals()).toEqual('3');
        });
    });
});
