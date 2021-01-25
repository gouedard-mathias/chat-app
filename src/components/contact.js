import React from 'react';
import './contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            online: props.online
        }
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt="avatar icon" />
                <div className="name-online">
                    <h4 className="name">{this.props.name}</h4>
                    <div className="status"
                         onClick={event => {
                             const newOnline = !this.state.online;
                             this.setState({ online: newOnline });
                         }}
                    >
                        <div className={this.state.online ? 'status-online' : 'status-offline'}> </div>
                        <p className="status-text">{this.state.online ? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};
export default Contact;
