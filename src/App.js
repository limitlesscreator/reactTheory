import React, {} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './App.module.sass'
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    console.log(cash)

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }
    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }
    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <>
            <div className={s.cash}>Баланс: {cash}</div>
            <button onClick={() => {
                addCash(Number(prompt('Пополнить баланс', cash)))
            }}>Пополнить счёт
            </button>
            <button onClick={() => {
                getCash(Number(prompt('Снять со счёта', cash)))
            }}>Снять со счёта
            </button>
            <button onClick={() => {
                addCustomer((prompt('Клиент', cash)))
            }}>Добавить клиента
            </button>
            <button onClick={() => {dispatch(fetchCustomers())}}>Получить клиентов из базы</button>

            <div>
                {customers.length > 0 ?
                    <div className={s.customers}>
                        {customers.map(customers => (
                            <div onClick={() => {
                                removeCustomer(customers)
                            }}>{customers.name}</div>
                        ))}
                    </div> : <div className={s.clients}>Клиенты отсутствуют</div>}
            </div>
        </>
    )
}

export default App