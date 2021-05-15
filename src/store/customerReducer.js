const defaultState = {
    customers : []
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS"
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMERS:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})

// function checkBreckets(str) {
//     if (str.substr(0, 1) === "(" && str.substr(-1, 1) === ")") {
//         console.log(true);
//     } else {
//         console.log(false)
//     }
// }
// checkBreckets("(hello)"); проверка наличия скобок скобки с закрывающей , сейчас продолжу писать проект поэтому не стал закрывать его :)

// let leftBrackets = 0;
// let rightBrackets = 0;
// function checkBrecketsPro(str) {
//     for (let i = 0; i < str.length; i++) {
//         let newArr = str.split("");
//         if (newArr[i] === "(") {
//             leftBrackets++;
//         } else if (newArr[i] === ")") {
//             rightBrackets++;
//         }
//     }
//     if (leftBrackets === rightBrackets) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// checkBrecketsPro("adsf(((da)))");
