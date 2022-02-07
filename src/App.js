import React from "react";
import TestComponent from "./components/TestComponent";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <TestComponent color="red" user={this.state.user}/>
                <button onClick={() => this.setState({ user: !this.state.user })}>{this.state.user === false ? `Log In` : `Log Out`}</button>
            </div>
        )
    }
}

export default App;
