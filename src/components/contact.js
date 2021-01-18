import React from 'react';
import './contact.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="avatar icon" />
            <div className="name-online">
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <div className="status-online"> </div>
                    <p className="status-text">{props.online ? "online" : "offline"}</p>
                </div>
            </div>
        </div>
    );
}


export default Contact;
