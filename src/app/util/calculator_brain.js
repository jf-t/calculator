const brain = {
    firstValue: '',
    operator: '',
    secondValue: '',
    outputValue: '',
    fin: false,

    addOperator: function (operator) {
        if (this.fin) {
            this.fin = false;
            this.firstValue = this.outputValue;
            this.secondValue = '';
            this.operator = '';
        }

        if (this.secondValue != '') {
            return this.equals();
        }

        if (this.firstValue) {
            this.operator = operator;
        }

        this.outputValue = this.firstValue;
        return this.outputValue;
    },
    valueAddition: function (value) {
        if (this.fin) {
            this.clearValue();
            this.firstValue = value;
            this.outputValue = this.firstValue;
        } else {
            if (this.operator != '') {
                this.secondValue += value;
                this.outputValue = this.secondValue;
            } else {
                this.firstValue += value;
                this.outputValue = this.firstValue;
            }
        }

        return this.outputValue;
    },
    equals: function () {
        this.fin = true;
        if (this._isComplete()) {
            return this._compile();
        } else {
            return this.firstValue;
        }

    },
    clearValue: function () {
        this.fin = false;
        this.firstValue = '';
        this.operator = '';
        this.secondValue = '';
    },

    addDot: function () {
        if (this.fin) {
            this.fin = false;
            this.firstValue = this.outputValue;
            this.secondValue = '';
            this.operator = '';
        }

        if (this.operator != '') {
            this.secondValue += '.';
            this.outputValue = this.secondValue;
        } else {
            this.firstValue += '.';
            this.outputValue = this.firstValue;
        }

        return this.outputValue;
    },

    inverseAction: function () {
        if (this.fin) {
            this.fin = false;
            this.firstValue = this.outputValue;
            this.secondValue = '';
            this.operator = '';
        }

        if (this.operator != '') {
            this.secondValue = (-1 * parseFloat(this.secondValue)).toString();
            this.outputValue = this.secondValue;
        } else {
            this.firstValue = (-1 * parseFloat(this.firstValue)).toString();
            this.outputValue = this.firstValue;
        }

        return this.outputValue;
    },

    _isComplete: function () {
        if (this.operator != '') {
            return true;
        } else {
            return false;
        }
    },
    _compile: function () {
        let finalValue;
        switch(this.operator) {
            case '+':
                finalValue = parseFloat(this.firstValue) + parseFloat(this.secondValue);
                break;
            case '-':
                finalValue = parseFloat(this.firstValue) - parseFloat(this.secondValue);
                break;
            case '*':
                finalValue = parseFloat(this.firstValue) * parseFloat(this.secondValue);
                break;
            case '/':
                finalValue = parseFloat(this.firstValue) / parseFloat(this.secondValue);
                break;
            default:
                return 'error';
        }

        this.outputValue = finalValue.toString();
        return this.outputValue;
    }
}

module.exports = brain;
