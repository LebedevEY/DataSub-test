class AClass {
    constructor(n) {
        if (this.constructor === AClass) {
            throw new Error("Abstract classes can't be instantiated.")
        } else {
            this.numbers = []
            AClass.fill(this.numbers, n)
        }

    }

    static fill(array, n) {
        let i = 1
        while (i <= n) {
            array.push(Math.ceil(Math.random() * 100))
            i++
        }
        return array
    }

    factorial() {
        let factorials = []
        function getFactorial(el) {
            return (el !==1)? el * getFactorial(el-1): 1
        }
        this.numbers.forEach((el) => {factorials.push(getFactorial(el))})
        console.log(factorials)
    }


    sort() {
        throw new Error("Abstract Method has no implementation.")
    }
}

class Class1 extends AClass {
    sort() {
        this.numbers.sort((a, b) => {return a - b})
    }
}
class Class2 extends AClass {
    sort() {
        this.numbers.sort((a, b) => {return b - a})
    }
}

const test1 = new Class1(10)
const test2 = new Class2(15)
