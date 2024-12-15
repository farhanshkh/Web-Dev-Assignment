class Calculator {
    constructor(value) {
        this.result = value ;
    }

    add(num) {
        this.result += num;
        return this;
    }

    subtract(num) {
        this.result -= num;
        return this;
    }

    multiply(num) {
        this.result *= num;
        return this;
    }

    divide(num) {
        if (num === 0) {
            console.error("Error: Division by zero");
            return this;
        }
        this.result /= num;
        return this;
    }

    getResult() {
        return this.result;
    }
}

const calculator = new Calculator(10);
const result = calculator.add(3).subtract(3).multiply(2).divide(2).getResult();
console.log("Result:", result);
