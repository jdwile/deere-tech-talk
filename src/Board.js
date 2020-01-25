import React from 'react';
import { Target} from './Target';
import './board.scss';

export function Board() {
    return (
        <section className='board'>
            <Target/>
        </section>
    )
}