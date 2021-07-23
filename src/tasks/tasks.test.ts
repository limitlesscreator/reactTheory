import {calculator, div, getDeepCopyStudent, mult, sub, sum} from "./tasks";

test('sum', () => {
    //1. Тестовые данные
    const a:number = 10
    const b:number = 5

    //2. Выполнение тестируемого кода с тестовыми данными
    const result = sum(a, b)

    //3. Проверка ожидаемого результата
    expect(result).toBe(15)
})

test('sub', () => {
    expect(sub(10,5)).toBe(5)
})

test('div', () => {
    expect(div(10,5)).toBe(2)
})

test('mult', () => {
    expect(mult(10,5)).toBe(50)
})

test('calculator', () => {
    const a:number = 10
    const b:number = 5
    expect(calculator(a,b,{type: 'sum'})).toBe(15)
    expect(calculator(a,b,{type: 'mult'})).toBe(50)
    expect(calculator(a,b,{type: 'sub'})).toBe(5)
    expect(calculator(a,b,{type: 'div'})).toBe(2)
})

//TDD - test driven development

export type CopyStudentType = {
    name: string
    age: number
    isMarried: boolean
    friends: Array<String>
}

test('deep copy of student', () => {
    const student: CopyStudentType = {
        name: 'Bob',
        age: 23,
        isMarried: true,
        friends: ['Alex', 'Mike']
    }

    const copyStudent = getDeepCopyStudent(student)
    expect(copyStudent === student).toBe(false)
    expect(copyStudent.name === student.name).toBe(true)
    expect(copyStudent.age  === student.age).toBe(true)
    expect(copyStudent.friends  === student.friends).toBe(false)
    expect(copyStudent.friends[0]  === student.friends[0]).toBe(true)
})