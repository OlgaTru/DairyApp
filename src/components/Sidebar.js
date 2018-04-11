import React, { Component } from 'react';

const sidebar = {
    backgroundColor: '#2B2F3E',
    color: '#fff',
    padding: '1.2em',
    height: '100%'
};



export class Sidebar extends Component{
    render(){
        return (
            <div style={sidebar} className="align-self-stretch">
                <h1 className="text-uppercase">Dairy app</h1>
                <sup style={{fontSize: '0.8em', color: '#808080'}}>Comment with no sense</sup>
            </div>
        )
    }
}