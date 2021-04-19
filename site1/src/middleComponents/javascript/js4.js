
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Js4(){
    return(
        <div>
            <h2>JS Array Methods</h2>
            <h4>Array.prototype.map()</h4>
            <p>Example 1</p>
            <pre>
                {`
    let rt=[4,7,6,5,3];
    let rtMapped=rt.map(x=>Math.pow(x,3));
    console.log(rtMapped);
                `}
            </pre>
            <p>console:[64, 343, 216, 125, 27]</p>
            <hr></hr>

            <p>Example 2</p>
            <h4>Array.prototype.reduce()</h4>
            <pre>
                {`
    let salaries = [
        {salary: 1700},
        {salary: 2500},
        {salary: 3000},
    ];

    let totalSalary=salaries.reduce((total,item)=>{
        return total+item.salary;
    },0);
    console.log(totalSalary);
                `}
            </pre>
            <p>console:7200</p>
            <hr></hr>

            <p>Example 3</p>
            <h4>Array.Prototype.forEach()</h4>
            <pre>
                {`
    let rt=[34,78,12,7,9,3];
    let result=[];

    rt.forEach(x=>{
        if(x%2===0){
            result.push(x);
        }
    });

console.log(result);
                `}
            </pre>
            <p>console:[34,78,12]</p>
            <hr></hr>

            <p>Example 4</p>
            <h4>Array.Prototype.find()</h4>
            <pre>
                {`
    const rt=[
        {a:45},
        {a:57},
        {a:78},
    ];

    const result=rt.find(x=>x.a>57);
    console.log(result.a);
                `}
            </pre>
            <p>console:78</p>
            <hr></hr>

            <p>Example 5</p>
            <h4>Array.isArray()</h4>
            <pre>
                {`
    let vb=[234,56,567,234,679];
    console.log(Array.isArray(vb));
                `}
            </pre>
            <p>console:true</p>
            <hr></hr>
        </div>
    )
}
export {Js4}
