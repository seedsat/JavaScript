// Q.1
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven() {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 == 0) {
            num = numbers[i];
            console.log(num + 'は偶数です');
        }
    }
}
isEven();

// Q.2
class Car {
    constructor(gas, number) {
        this.gas = gas;
        this.number = number;
    }

    getNumGas() {
        console.log('ガソリンは' + this.gas + 'です。' + 'ナンバーは' + this.number + 'です。');
    }
}

let car = new Car(20, 6987);
car.getNumGas();