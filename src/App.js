import React from 'react';

export class App extends React.Component {
    state = {
        counter: 0
    }

    updateCounter(value) {
        this.setState({
            counter: this.state.counter + value
        })
    }


    render() {
        return (
            <div>
                <h1>Счёчик <b>{this.state.counter}</b></h1>
                <hr/>
                <div>
                    <button onClick={() => this.updateCounter(1)}>Добавить 1</button>
                    <button onClick={() => this.updateCounter(- 1)}>Вычесть 1</button>
                </div>
            </div>
        )
    }
}