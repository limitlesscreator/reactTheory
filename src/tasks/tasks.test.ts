import {getBanknoteList, getSum, getTriangleType, isEvenGreater, isSquareGreater, sum} from "./tasks";

test('sum function',() => {
    expect(sum(2,2,2)).toBe(6)
})

test('triangle type',() => {
    expect(getTriangleType(5,5,5)).toBe('10')
    expect(getTriangleType(1,1,4)).toBe('00')
    expect(getTriangleType(7,3,5)).toBe('11')
    expect(getTriangleType(3,3,5)).toBe('01')
})

test('get sum', () => {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})

test('even is greater than odd?',() => {
    expect(isEvenGreater([1,2,3,4])).toBe(false)
    expect(isEvenGreater([5,5,2,8])).toBe(false)
    expect(isEvenGreater([5,5,2,8,100])).toBe(true)
    expect(isEvenGreater([80,5,2])).toBe(true)
    expect(isEvenGreater([1,100,2,200])).toBe(false)
    expect(isEvenGreater([100,1,200,2])).toBe(true)
})

test('isSquareGreater', () => {
    const sCr = 3.14
    const sSq = 4
    const result = isSquareGreater(sCr,sSq)
    expect(result).toBe(true)
})

test('get banknote lise', () => {
    const result1500 = getBanknoteList(1500)
    const result23 = getBanknoteList(23)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)

})