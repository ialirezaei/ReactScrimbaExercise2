import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Card />
        </div>
        );
    }
}