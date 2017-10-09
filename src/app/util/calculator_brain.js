const brain = {
    firstValue: 0,
    operator: '',
    secondValue: 0,
    outputValue: '',

    addOperator: function (operator) {
        if (this.firstValue) {
            this.operator = operator;
        } else {
            // error handling
        }

        this.outputValue = this.firstValue;
    },
    valueAddition: function (value) {
        let existingValue;
        if (this.operator) {
            if (this.secondValue === 0) {
                existingValue = '';
            } else {
                existingValue = this.secondValue.toString();
            }

            existingValue += value.toString();
            this.secondValue = parseInt(existingValue);
        } else {
            if (this.firstValue === 0) {
                existingValue = '';
            } else {
                existingValue = this.firstValue.toString();
            }

            existingValue += value.toString();
            this.firstValue = parseInt(existingValue);
        }

        this.outputValue = existingValue;
        return existingValue;
    },
    equals: function () {
        if (this._isComplete()) {
            return this._compile();ha
        } else {
            return this.firstValue;
        }
    },
    clear: function () {
        this.firstValue = 0;
        this.operator = '';
        this.secondValue = 0;
    },

    _isComplete: function () {
        if (this.operator) {
            return true;
        } else {
            return false;
        }
    },
    _compile: function () {
        switch(this.operator) {
            case '+':
                return this.firstValue + this.secondValue;
            case '-':
                return this.firstValue - this.secondValue;
            case '*':
                return this.firstValue * this.secondValue;
            case '/':
                return this.firstValue / this.secondValue;
        }
    }
}

export default brain;
