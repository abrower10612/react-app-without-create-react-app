import React from "react";
import { Alert } from 'react-bootstrap';

class AuthMessage extends React.Component {

    render() {
        return (
            <div>
                <Alert variant="success">{this.props.user === false ? `Successfully Logged Out` : `Successfully Logged In`}</Alert>
            </div>
        )
    }
}

export default AuthMessage;