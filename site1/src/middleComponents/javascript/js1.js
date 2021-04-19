
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Js1(){
    return(
        <div>
            <h2>JS let var const</h2>
            <h4>difference among let var const</h4>

            <p>Example 1</p>
            <pre>
                {`
    let alfa=79;
    let alfa=34;
                `
                }
            </pre>
            <span>Uncaught SyntaxError: Identifier 'alfa' has already been declared</span>
            <p>conclusion: let can not be re-declared.</p>
            <hr></hr>

            <p>Example 2</p>
            <pre>
                {`
    const beta=579;
    const beta=834;
                `
                }
            </pre>
            <span>Uncaught SyntaxError: Identifier 'betta' has already been declared</span>
            <p>conclusion: const can not be re-declared.</p>
            <hr></hr>

            <p>Example 3</p>
            <pre>
                {`
    var gamma=17;
    var gamma=37;
    console.log(gamma);
                `
                }
            </pre>
            <span>/*will not show error*/ 37</span>
            <p>conclusion: var can be re-declared.</p>
            <hr></hr>

            <p>Example 4</p>
            <pre>
                {`
    function f(){
        let delta=98;
    }
    console.log(delta);
                `
                }
            </pre>
            <span>Uncaught ReferenceError: 'delta' is not defined</span>
            <p>conclusion: let is block scoped.</p>
            <hr></hr>

            <p>Example 5</p>
            <pre>
                {`
    function f(){
        const epsilon=55;
    }
    console.log(epsilon);
                `
                }
            </pre>
            <span>Uncaught ReferenceError: epsilon is not defined</span>
            <p>conclusion: const is block scoped.</p>
            <hr></hr>

            <p id='p3'>Example 6</p>
            <pre>
                {`
    const zeta;
                `
                }
            </pre>
            <span>/*Uncaught SyntaxError: Missing initializer in const declaration*/</span>
            <p id='conclusion'>conclusion:const must be initialized during declaration.</p>
            <hr></hr>
            
        </div>
    )
}

export {Js1}