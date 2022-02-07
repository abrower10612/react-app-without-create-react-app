import React from "react";
import AuthMessage from "./components/AuthMessage";
import { Button, Spinner } from 'react-bootstrap';
import Logo from './images/logo.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false,
            show: false,
            loading: false
        },
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('Component did mount 🔥');
    }

    componentDidUpdate() {
        console.log('Component did update 🔥');
    }

    handleClick() {
        this.setState({ loading: true, show: false })
        setTimeout(function() {
            this.setState((previousState) => { 
                if (previousState.user === true) {
                    return { user: false, show: true, loading: false }
                }
                return { user: true, show: true, loading: false }
            })
        }.bind(this), 2000);

        setTimeout(function() {
            this.setState({ show: false });
       }.bind(this), 4000);
    }
    
    render() {
        return (
            <>
                {this.state.show && <AuthMessage user={this.state.user} />}
                {console.log('rendering 🔥')}
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
                            border: 'solid 2px #495057',
                            boxShadow: '5px 5px 5px #00000050',
                            borderRadius: '5px',
                            padding: '20px',
                            position: 'relative',
                            paddingTop: '30px'
                        }}
                    >
                        <img 
                            src={Logo} 
                            alt="" 
                            style={{ margin: '0 auto', display: 'block', width: '50%', marginBottom: "40px" }}
                        />
                        <Button 
                            variant={this.state.user === true ? `secondary` : `success`}
                            onClick={() => this.handleClick()}
                            style={{ width: '100%', height: '60px', fontSize: '1.25rem' }}
                            disabled={this.state.loading}
                        >{this.state.loading === true
                            ? <Spinner animation="border" variant="light" />
                            : this.state.user === false 
                            ? `Log In` 
                            : `Log Out`}
                        </Button>
                    </div>
                </div>
            </>
        )
    }
}

export default App;
