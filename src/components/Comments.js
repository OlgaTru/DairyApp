import React, { Component } from 'react';




export class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleKeyPress(event) {

        if (event.keyCode === 13 && event.ctrlKey) {
            if(this.state.message) {
                this.props.addComment(this.state.message);
                this.setState({
                    message: ''
                });
            } else {
                alert ('field is empty!');
            }
        }
    }

    handleChange(event){
        this.setState({
            message: event.target.value
        })
    }

    render() {
        return (

            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">Comments</h1>
                    <div>
                    <ul className="list-group list-group-flush" style={{font: '0.8em "Open Sans Regular"'}}>

                        {
                            this.props.data.map((message, index) =>
                            (index%2===0) ?
                                <li className="list-group-item px-0" key={index}>
                                    <div className="media">
                                        <img className="mr-3" src={require ('../img/asset_blue.png')} alt=" "/>
                                        <div className="media-body">
                                            {message}
                                        </div>
                                    </div>
                                </li>
                                :
                                <li className="list-group-item px-0" key={index}>
                                    <div className="media">
                                        <img className="mr-3" src={require ('../img/asset_orange.png')} alt=" " style= {{backgroundColor: 'red'}}/>
                                        <div className="media-body">
                                            {message}
                                        </div>
                                    </div>
                                </li>
                            )
                        }

                        <li className="list-group-item px-0 pt-4">
                            <div className="media">
                                <img className="mr-3" src={require ('../img/asset.png')} alt=" " />
                                <div className="media-body">
                                    <textarea onKeyDown={this.handleKeyPress}
                                              onChange={this.handleChange}
                                              value={this.state.message}
                                              style={{minWidth: "100%"}} rows={4}/>
                                </div>
                            </div>
                        </li>

                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}