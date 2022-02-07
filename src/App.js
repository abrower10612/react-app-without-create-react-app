import React from "react";
import TestComponent from "./components/TestComponent";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <TestComponent />
            </div>
        )
    }
}

export default App;
