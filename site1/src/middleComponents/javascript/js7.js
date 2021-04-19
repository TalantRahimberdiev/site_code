
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Js7(){
    return(
        <div>
            <h2>JS Hoisting</h2>
            <p>Example 1</p>
            <pre>
                {`
    console.log(y);
    y = 1;
    console.log(y);
    console.log(greet("Talant"));

    function greet(name){
        return 'Hello ' + name + '!';
    }

    var y;
                `}
            </pre>
            <p>console:undefined,1, Hello Talant!</p>
            <hr></hr>

            <p>Example 2</p>
            <pre>
                {`
    function testBlock(){
        if(true){
            let z = 5;
        }
        return z; 
    }
 
    testBlock();
                `}
            </pre>
            <p>console:Uncaught ReferenceError: z is not defined</p>
            <hr></hr>

            <p>Example 3</p>
            <pre>
                {`
    var variable1 = "Comrades";   
    var variable2 = "Sayonara";

    function outer(){
    //outer's scope
    var variable1 = "World";
        function inner(){
            //inner's scope
            var variable2 = "Hello";
            console.log(variable2 + " " + variable1);
        }
        inner();
    }  
    outer(); 
                `}
            </pre>
            <p>console:Hello World</p>
            <hr></hr>

            <p>Example 4</p>
            <pre>
                {`
    carName = "Volvo";
    let carName;
    console.log(carName);
                `}
            </pre>
            <p>console:Uncaught ReferenceError: Cannot access 'carName' before initialization</p>
            <hr></hr>

        </div>
    )
}
export {Js7}
