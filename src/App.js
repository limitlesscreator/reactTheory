// import React from 'react';
// import {connect} from "react-redux";
//
// class App extends React.Component {
//     state = {
//         counter: 0
//     }
//
//     updateCounter(value) {
//         this.setState({
//             counter: this.state.counter + value
//         })
//     }
//
//
//     render() {
//         console.log('APP', this.props)
//         return (
//             <div>
//                 <h1>Счёчик <b>{this.state.counter}</b></h1>
//                 <hr/>
//                 <div>
//                     <button onClick={() => this.updateCounter(1)}>Добавить 1</button>
//                     <button onClick={() => this.updateCounter(- 1)}>Вычесть 1</button>
//                 </div>
//             </div>
//         )
//     }
// }
//
// function mapStateToProps(state){
//     return {
//         counter: state.counter
//     }
// }
//
// export default connect(mapStateToProps)(App)


import React, {} from "react";
import {useDispatch, useSelector} from "react-redux";

 function App(){
     const dispatch = useDispatch()
     const cash = useSelector(state => state.cash.cash)
     console.log(cash)

     const addCash = (cash) => {
        dispatch({type: "ADD_CASH" , payload: cash})
     }
     const getCash = (cash) => {
         dispatch({type: "GET_CASH", payload: cash})
     }
    return(
        <>
            <div><b>{cash}</b></div>
            <button onClick={() => {addCash(Number(prompt('Пополнить баланс',cash)))}}>Пополнить счёт</button>
            <button onClick={() => {getCash(Number(prompt('Снять со счёта',cash)))}}>Снять со счёта</button>
        </>
    )
}
export default App