import React from 'react';
import { render } from 'react-dom';
import { Board } from './Board';

const appMount = document.getElementById('app-mount')

render(<Board/>, appMount);