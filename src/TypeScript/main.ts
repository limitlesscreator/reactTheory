// typeof null // 'object'
// typeof undefined // 'undefined'

const u: undefined = undefined
const n: null = null

const greetUser = (): void => {
    alert('Hello, nice to see you!')
}

let array: Array<Number> = [1,2,3,]

let x: [number,string]
x = [4,'4']

let y: [boolean,number] = [false,8]

const create = (argument: object|null):number => {
    if (argument){
        console.log(argument)
    }
    return 4
}

create({name: 'Mike'})
create(null)

export default 1