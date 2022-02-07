import React from "react";
import { Alert } from 'react-bootstrap';

class AuthMessage extends React.Component {

    render() {
        return (
            <div
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10
                }}
            >
                <Alert variant="success">{this.props.user === false ? `Successfully Logged Out` : `Successfully Logged In`}</Alert>
            </div>
        )
    }
}

export default AuthMessage;