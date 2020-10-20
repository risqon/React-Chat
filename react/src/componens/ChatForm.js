import React from 'react';

export default class ChatForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', message: '' };

        this.handleName = this.handleName.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event) {
        this.setState({ name: event.target.value });
    }

    handleMessage(event) {
        this.setState({ message: event.target.value });
    }


    handleSubmit(event) {
        event.preventDefault();
        this.props.addChat(this.state.name, this.state.message);
        this.setState({ name: '', message: '' })

    }

    render() {
        return (
            <div className='card-footer'>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-group'>
                        <div className='container'>
                            <div className='form-group row'>
                                <div className="col form">
                                    <input type="text" className="form-control type_msg" value={this.state.name} onChange={this.handleName} placeholder='Insert Your Name Here' required />
                                    <input type="text" className="form-control type_name" value={this.state.message} onChange={this.handleMessage} placeholder='Say Something' />
                                </div>
                                <div className="input-group-append right-form">
                                    <button type="submit" value="Send" className='input-group-text send_btn'><i className="fas fa-location-arrow"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            // <form onSubmit={this.handleSubmit}>
            //     <div className="shadow-lg p-3 mb-5 bg-dark rounded">
            //         <input id="name" className="form-control" type="text" value={this.state.name} onChange={this.handleName} placeholder="Your Name" />
            //         <textarea id="message" className="form-control" cols="3" value={this.state.message} onChange={this.handleMessage} placeholder="Type your message..." />
            //         <button className="btn btn-success my-2 fas fa-paperclip" type="submit">Sent</button>
            //     </div>
            // </form>
        );
    }
}
