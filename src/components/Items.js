import React, { Component } from 'react';
import {Item} from "./Item";


export class Items extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputValue:''
        };
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addItem(event){
        if(this.state.inputValue) {
            this.props.addItem(this.state.inputValue);
            this.setState({
                inputValue: ''
            });
        } else {
            alert ('field is empty!');
        }
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">Items</h1>

                    <form className="form-row" onSubmit={this.addItem}>
                        <input type="text" className="form-control col-md-7 m-2" placeholder="Type name here..."
                                   value={this.state.inputValue} onChange={this.handleChange}/>
                        <button className="btn btn-md btn-info col-md-4 m-2" type="submit">Add new</button>
                    </form>

                    <div className="mr-3">
                        <ul className="list-group list-group-flush" style={{font: '0.9em "Open Sans SemiBold"'}}>
                            {
                                Object.values(this.props.data).map((item, i) =>
                                    <li className="list-group-item" key={i}>
                                        <Item selected = {item.id === this.props.selectedItem}
                                              name={item.name} id={item.id}
                                              removeItem={this.props.removeItem}
                                              selectItem={this.props.selectItem}
                                              commentsCount={item.comments.length} />
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
