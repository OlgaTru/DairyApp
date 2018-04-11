import React, { Component } from 'react';
import {Sidebar} from "../components/Sidebar";


export class App extends Component {
  render() {
    return (
        <div className="container-fluid p-0">
            <div className="row no-gutters">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">

                    {this.props.children}

                </div>
            </div>


        </div>
    )
  }
}

export default App;

