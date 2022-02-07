import React from "react";
import AuthMessage from "./components/AuthMessage";
import { Button, Toast } from 'react-bootstrap';
import Logo from './images/logo.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false,
            show: false
        }
    }

    render() {
        return (
            <>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <div
                        style={{
                            width: '300px',
                            border: 'solid 2px black',
                            borderRadius: '5px',
                            padding: '20px',
                        }}
                    >
                        {this.state.show && <AuthMessage user={this.state.user} />}
                        <img 
                            src={Logo} 
                            alt="" 
                            style={{ margin: '0 auto', display: 'block', width: '50%', marginBottom: "40px" }}
                        />
                        <Button 
                            onClick={() => {
                                this.setState({ user: !this.state.user, show: true })
                            }}
                            style={{ width: '100%' }}
                        >{this.state.user === false ? `Log In` : `Log Out`}</Button>
                    </div>
                </div>
            </>
        )
    }
}

export default App;
