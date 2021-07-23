export  type ManType = {
    height: number
    name: string
    surname ?: string
    age ?: number
}

// types for obj
let arr:Array<ManType | CarType > = [
    {height: 2.34, name: 'Ivan', surname: '5'},
    {height: 2.64, name: 'Kolya'},
    {model: 'Reno StepWay', year: 2016}
    ]

// types for function


function sum(a: number, b: number): number{
    return a + b
}
function sum2(a: number, b: number): void{
    let c = a + b
    console.log(c)
}

function toUpperCase(strings: Array<string>): Array<string>{
    let result = strings.map(s => s.toUpperCase())
    return result
}

let createMan = (name : string, height : number): ManType  => {
    let age = 30
    return {name, height, age}
}
// расширить интерфейс Car type

type CarType = {
    model: string
    year: number
    on?:boolean
    turnOn?: () => void
    rename?: (model: string)=> void
}


// создать тип IGarage

type IGarage = {
    addCar: (car:CarType) => void
    logAllCarsNames: () => void
    getAllCars: () => Array<CarType>
}

let car:CarType = {
    model: 'RenoStepWay',
    year: 2016,
    on: false,
    turnOn(){
        this.on = true
    },
    rename(model){
        this.model = model
    }
}

let createGarage = (): IGarage => {
    let _cars:Array<CarType> = []

    return {
        addCar(car){
            _cars.push(car)
        },
        logAllCarsNames() {
            console.log('Cars in the garage')
            _cars.forEach(c => console.log(c.model))
        },
        getAllCars(){
            return _cars
        }
    }
}