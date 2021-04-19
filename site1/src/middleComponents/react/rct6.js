
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Rct6(){
    return(
        <div>
            <h2>React export/import</h2>
            <p>Example 1</p>
            <pre>
                {
                    `
    import React,{useState} from'react'
    import ReactDOM from 'react-dom'
                    
    import {Js1} from './javascript/js1'
    import {Js2} from './javascript/js2'
    import {Js3} from './javascript/js3'
    import {Js4} from './javascript/js4'
    import {Js5} from './javascript/js5'
    import {Js6} from './javascript/js6'
    import {Js7} from './javascript/js7'
    import {Js8} from './javascript/js8'
    import {JsTest} from './javascript/jsTest'
                    
                    
    import {Rct1} from './react/rct1'
    import {Rct2} from './react/rct2'
    import {Rct3} from './react/rct3'
    import {Rct4} from './react/rct4'
    import {Rct5} from './react/rct5'
                    
                    
    const middleComponents=[
        {
            js1:<Js1/>,
            js2:<Js2/>,
            js3:<Js3/>,
            js4:<Js4/>,
            js5:<Js5/>,
            js6:<Js6/>,
            js7:<Js7/>,
            js8:<Js8/>,
            jsTest:<JsTest/>
        },
        {
            rct1:<Rct1/>,
            rct2:<Rct2/>,
            rct3:<Rct3/>,
            rct4:<Rct4/>,
            rct5:<Rct5/>,
        }
    ]
                    
                    
    export {middleComponents}
                    `
                }
            </pre>
            <hr></hr>

            <p>first step</p>
            <pre>
                {
                    `
    function FIO(){
        return(
            <div>
                <p>Talant Rahimberdiev</p>
            </div>
        )
    }

    export {FIO}
                      
    
                    `
                }
            </pre>
            <hr></hr>

            <p>second step</p>
            <pre>
                {
                    `

    import {FIO} from './address'

    function Main(){
        return(
            <div>
                <FIO/>
            </div>
        )
    }
    ReactDOM.render(<Main/>,document.getElementById('root'))  
    
    output: Talant Rahimberdiev
    
                    `
                }
            </pre>
            <hr></hr>

            
        </div>
    )
}
export {Rct6}
