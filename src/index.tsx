import React from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
    const sum = (a: number, b: number): number => a + b;

    return (
        <>
            <h1>Hello !!</h1>
            <div>{sum(5, 13)}</div>
        </>
    );
}

const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);
