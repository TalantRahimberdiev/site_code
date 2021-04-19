
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Rct4(){
    return(
        <div>
            <h2>React JSX</h2>
            <div id='rct4Div'>
                <h4>What is JSX</h4>
                <ul>
                    <li>JSX stands for JavaScript XML.</li>
                    <li>JSX allows us to write HTML in React.</li>
                    <li>JSX makes it easier to write and add HTML in React.</li>
                </ul>
                <h4>Coding with JSX</h4>
                <p>
                    JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.JSX converts HTML tags into react elements.
                </p>
                <pre>
                    {`
    const element=<h1>{37+34}</h1>
    ReactDOM.render(element, document.getElementById('root'));

    output:71
                    
                    `}
                </pre>

            </div>
            <h4>Example 1</h4>
            <pre>
                {
                    `
    var nav = (
        <ul id="nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    );
                    `
                }
            </pre>
            <hr></hr>
            <p>And Babel will transform it into this:</p>
            <pre>
                {
                    `
    var nav = React.createElement(
        "ul",
        { id: "nav" },
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "#" },
                "Home"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "#" },
                "About"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "#" },
                "Clients"
            )
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "#" },
                "Contact Us"
            )
        )
    );
                    `
                }
            </pre>
            
        </div>
    )
}
export {Rct4}
