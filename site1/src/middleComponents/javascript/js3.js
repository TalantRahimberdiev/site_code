
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Js3(){
    return(
        <div>
            <h2>JS Function</h2>
            <h4>function with parameters</h4>
            <p>Example 1</p>
            <pre>
                {`
    function f(a,b){
        function cube(n){
            return n*n*n;
        }
        return cube(a)+cube(b);
    }
    console.log(f(3,4));
                `}
            </pre>
            <p>console:91</p>
            <hr></hr>

            <p>Example 2</p>
            <h4>object/function/loop</h4>
            <pre>
                {`
    const math={
        pow:function(a,b){
            let result=1;
            for(let i=0;i<b;i++){
                result*=a;
            }
            return result;
        }
    }
    console.log(math.pow(3,4));
                `}
            </pre>
            <p>console:81</p>
            <hr></hr>

            <p>Example 3</p>
            <h4>immediately invoked function expression</h4>
            <pre>
                {`
    (function(a,b){
        console.log(a+b);
    })(1000,993);
                `}
            </pre>
            <p>console:1993</p>
            <hr></hr>

            <p>Example 4</p>
            <h4>generating Fibonacci sequence with function</h4>
            <pre>
                {`
    function fibonachi(n) {
        let fib=[0,1];
        for(let i=2;i<=n;i++){
            fib[i]=fib[i-1]+fib[i-2];
        }
        return fib;  
    }
    console.log(fibonachi(7))
                `}
            </pre>
            <p>console:[0, 1, 1, 2, 3, 5, 8, 13]</p>
            <hr></hr>

            <p>Example 5</p>
            <h4>resursion(getting sum of numbers up to given)</h4>
            <pre>
                {`
    function rec(n) {
        if(n>0){
            return n+rec(n-1);
        }
        else{
            return 0;
        }
    }
    console.log(rec(8))
                `}
            </pre>
            <p>console:36</p>
            <hr></hr>
        </div>
    )
}
export {Js3}
