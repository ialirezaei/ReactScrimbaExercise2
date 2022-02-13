import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />

            <h1>Hello, world!</h1>
            <p>This is a boilerplate for a React app.</p>
        </div>
        );
    }
}