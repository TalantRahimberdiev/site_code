
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Js8(){
    return(
        <div>
            <h2>JS Destructuring</h2>
            <p>Example 1</p>
            <pre>
                {`
    let a,b;
    [a,b]=[34,78];
    console.log(a,b);
                `}
            </pre>
            <p>console:34 78</p>
            <hr></hr>

            <p>Example 2</p>
            <pre>
                {`
    let a=57;
    let b=89;
    [b,a]=[a,b]
    console.log(a,b)
                `}
            </pre>
            <p>console:89 57</p>
            <hr></hr>

            <p>Example 3</p>
            <pre>
                {`
    let rt=[34,78,12,7,9,3];
    let [first,second,third]=rt;
    console.log(first,second,third);
                `}
            </pre>
            <p>console:34 78 12</p>
            <hr></hr>

            <p>Example 4</p>
            <pre>
                {`
    function f() {
        return [45,78,23,67];

    }

    let [a,,c,d]=f()
    console.log(a);
    console.log(c);
    console.log(d);


    output:45
           23
           67
                `}
            </pre>

            <hr></hr>

            <p>Example 5</p>
            <pre>
                {`
    const [a, ...b] = [1, 2, 3, 4, 5, 6, 7];
    console.log(a); // 1
    console.log(b); // [2, 3, 3, 4, 5, 6, 7]
                `}
            </pre>
            <hr></hr>
        </div>
    )
}
export {Js8}
