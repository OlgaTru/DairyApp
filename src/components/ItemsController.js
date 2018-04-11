import React, { Component } from 'react';
import {Comments} from "./Comments";
import {Items} from "./Items";



function generateId(prefix) {
    return prefix + Math.floor(Math.random()*1000000);
}


export class ItemsController extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: {},
            selectedItem: null
        };
        // localStorage.clear();
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    componentWillMount(){
        if (localStorage.getItem('items')) {
            this.setState({
                items: JSON.parse(localStorage.getItem('items'))
            })
        } else {
            this.setState({
                items: {}
            })
        }
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('items', JSON.stringify(nextState.items));
    }

    addItem(inputValue){
        let items = this.state.items;
        let id = generateId('item');
        while(items.hasOwnProperty(id)){
            id = generateId('item');
        }
        items[id] = {
            name: inputValue,
            comments: [],
            id: id
        };
        this.setState({
            items: items
        })
    }

    removeItem(key){
        let items = this.state.items;
        delete items[key];
        this.setState({
            items: items,
            selectedItem: (key === this.state.selectedItem ? null : this.state.selectedItem)
        });
    }

    selectItem(key){
        this.setState({
            selectedItem: key
        })
    }

    addComment(message){
        let items = this.state.items;
        items[this.state.selectedItem].comments.push(message);
        this.setState({
            items: items
        });
    }

    render() {
        let commentsData = [];
        if(this.state.selectedItem) {
            commentsData = <Comments
                data={this.state.items[this.state.selectedItem].comments}
                addComment={this.addComment}/>;
        }

        return (
            <div className="row">

                <div className="col-md-7">
                    <Items addItem={this.addItem} removeItem={this.removeItem}
                           selectItem={this.selectItem} data={this.state.items}
                           selectedItem={this.state.selectedItem}/>
                </div>
                
                <div className="col-md-5">
                    {commentsData}
                </div>

            </div>
        )
    }
}

