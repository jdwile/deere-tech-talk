import React from 'react';
import Chance from 'chance';
import './target.scss';

const chance = new Chance();

export class Target extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x: `${chance.natural({min: 0, max: 100})}vw`,
            y: `${chance.natural({min: 0, max: 100})}vh`,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            x: `${chance.natural({min: 0, max: 100})}vw`,
            y: `${chance.natural({min: 0, max: 100})}vh`,
        });
    }
    
    render() {
        const x = this.state.x;
        const y = this.state.y;

        return (
            <div className='target' onClick={this.onClick} style={{
                top: y,
                left: x,
            }}/>
        );
    }
}