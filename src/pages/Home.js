import React, { Component } from 'react';
import {ItemsController} from "../components/ItemsController";


const content = {
    background: '#f9f9f9',
    minHeight: '100vh',
    padding: '34px'

};


export class Home extends Component {
    render() {
        return (
            <div style={content}>
                <ItemsController/>
            </div>
        )
    }
}