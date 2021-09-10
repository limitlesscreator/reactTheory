import React, {Component} from 'react';

export class Counter extends Component {
    state = {
        count: 0
    }

    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}