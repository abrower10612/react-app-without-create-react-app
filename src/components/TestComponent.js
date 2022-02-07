import React from "react";

class TestComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.color
        }
    }

    render() {
        return (
            <div>
                <h2 style={{ color: this.state.color }}>Hello from imported TestComponent</h2>
                <div>{this.props.user === false ? `Successfully Logged Out` : `Successfully Logged In`}</div>
            </div>
        )
    }
}

export default TestComponent;