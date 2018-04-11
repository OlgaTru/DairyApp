import React, { Component } from 'react';


export class Item extends Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    removeItem(event){
        this.props.removeItem(this.props.id);
        event.stopPropagation();
    }

    selectItem(){
        this.props.selectItem(this.props.id);
    }

    render(){
        let style = {
            borderLeft: '3px solid rgba(0, 0, 0, 0)',
            marginLeft: '-40px'
        };

        if(this.props.selected){
            style = {
                borderLeft: '3px solid red',
                marginLeft: '-40px'
            }
        }

        return (

            <div  className="row align-items-baseline pl-2" onClick={this.selectItem} style={style}>

                <div className="col-md-9">{this.props.name}
                    <span className="badge badge-pill badge-info ml-4">{this.props.commentsCount}</span>
                </div>

                <div className="col-md-3 pr-0">
                    <button type="btn" className="btn btn-sm btn-outline-danger btn-block"
                            onClick={this.removeItem}>Delete</button>
                </div>

            </div>
        )
    }
}
