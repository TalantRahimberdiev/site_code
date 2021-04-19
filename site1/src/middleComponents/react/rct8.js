
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Rct8(){
    const components=[
        {
            description:
                [
                    '1. They do not maintain their own state',
                    '1. They maintain their own state'
                ]
        },
        {
            description:
                [
                    '2. Data is controlled by the parent component',
                    '2. Data is controlled by the DOM'
                ]
        },
        {
            description:
                [
                    '3. They take in the current values through props and then notify the changes via callbacks',	
                    '3. Refs are used to get their current values'
                ]
        }
    ]
    return(
        <div>
            <h2>React Components</h2>
            <table>
                <tr>
                    <th>Controlled Components</th>
                    <th>Uncontrolled Components</th>
                </tr>
                {components.map((comps)=>{
                    return(
                        <tr>
                            {comps.description.map((d)=>{
                                return(
                                    <td>{d}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </table>
            <p>Example 1</p>
            <pre>
                {
                    `
    function App() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to
                    reload.
                    </p>
                </header>
            </div>
        );
    }
                    `
                }
            </pre>
            <hr></hr>

            <p>Example 2</p>
            <pre>
                {
                    `
    function App() {
        const text = 'Hello World';
                        
        return (
            <div className="App">
                <p> {text} </p>
            </div>
        );
    }
                    `
                }
            </pre>
            <hr></hr>
            
        </div>
    )
}
export {Rct8}
