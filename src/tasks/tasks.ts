// 1. Функция принимает параметры целые положительные числа и возвращает их сумму

export function sum(...arr: Array<number>): number {
    return [...arr].reduce((a, b) => a + b)

}

//2. Функция getTriangleType принимает три параметра: длины сторрон треугольника
// функция должна возвращать  01 если треугольник равнобедренный
// 10 если треугольник равносторонний
// 11 если треугльник обычный
// 00 если такого треугольника не существует
export function getTriangleType(a: number, b: number, c: number): string {
    if (a === b && b === c) {
        return '10'
    } else if (a + b < c || a + c < b || c + b < a) {
        return '00'
    } else if (a === b && a !== c && b !== c || c === a && a !== b && c !== b || b === c && b !== a && a !== c) {
        return '01'
    } else return '11'
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

// export function getSum(a:number): number{
//     let str = String(a)
//     str.split('')
//     let result = 0
//     for (let i = 0; i < str.length; i++){
//         result += +str[i]
//     }
//     return result
// }

export function getSum (num:number): number{
    return String(num).split("").reduce((acc,el) => acc + +el,0)
}

// 4. Функция принимает isEvenGreater параметром массив чисел.
//     Если сумма чисел с четным индексом больше чем сумма с нечетнымм индексами,
//     то функция возвращает true. В противном случае false

export function isEvenGreater (num: Array<number>) : boolean{
    let odd = 0
    let even = 0
    for (let i = 0; i < num.length; i++){
        if (i % 2 === 0){
            even += num[i]
        }
        else {
            odd += num[i]
        }
    }
    // num.reduce((acc,el,index) => index % 2 === 0 ? even += el : odd += el)
    return even > odd
}

// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится в
// квадрате и false в противном случае

export function isSquareGreater(sCircle:number, sSquare:number){
    return sCircle <= Math.PI * sSquare/4
}

// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
//     Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
//     сумму. Доступны банкноты следующих номиналов:
//  const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

export function getBanknoteList(money: number):Array<number>{
    let result: Array<number> = []
    for (;money > 0;){
        if (money >= 1000){
            money -= 1000;
            result.push(1000)
        }
        else if (money >= 500){
            money -= 500;
            result.push(500)
        }
        else if (money >= 100){
            money -= 100;
            result.push(100)
        }
        else if (money >= 50){
            money -= 50;
            result.push(50)
        }
        else if (money >= 20){
            money -= 20;
            result.push(20)
        }
        else if (money >= 10){
            money -= 10;
            result.push(10)
        }
        else if (money >= 5){
            money -= 5;
            result.push(5)
        }
        else if (money >= 2){
            money -= 2;
            result.push(2)
        }
        else if (money >= 1){
            money -= 1;
            result.push(1)
        }
    }
    return result
}


export default 1