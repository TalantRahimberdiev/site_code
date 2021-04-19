
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Rct1(){

  const state=[
    {
      description:
        [
          '1. Stores info about component’s state change in memory',	'1. Calculates the internal state of the components'
        ]
    },
    {
      description:
        [
          '2. Have authority to change state',
          '2. Do not have the authority to change state'
        ]
    },
    {
      description:
        [
          '3. Contains the knowledge of past, current and possible future changes in state',
          '3. Contains no knowledge of past, current and possible future state changes'
        ]
    },
    {
      description:
        [
          '4. Stateless components notify them about the requirement of the state change, then they send down the props to them.',	
          '4. They receive the props from the Stateful components and treat them as callback functions.'
        ]
    }
  ]
    return(
        <div>
            <h2>React Hooks</h2>
            <h4> Differentiate between stateful and stateless components.</h4>
            <table>
              <tr>
                <th>Stateful Component</th>
                <th>Stateless Component</th>
              </tr>
              {state.map((states)=>{
                return (
                  <tr>
                    {states.description.map((s)=>{
                      return (
                        <td>{s}</td>
                      )
                    })}
                  </tr>
                )
              })}
            </table>

            <h4>Example of making quiz by using Hooks</h4>
            <pre>
                {`
import React, { useState }  from "react";
import ReactDOM from "react-dom";
const data=[
  {
    vopros:'which of the following is language:',
    variants:['react','js','redux'],
    otvet:1
  },
  {
    vopros:'which of the following is framework:',
    variants:['node js','css','react'],
    otvet:2
  },
  {
    vopros:'which of the following is function:',
    variants:['new Date()','callback','array'],
    otvet:1
  }
]

function F(){
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [score,setScore]=useState(0)

    const click=(optionId)=>{
      if(optionId==data[currentQuestion].otvet){
        setScore(score+1)
      }
      setCurrentQuestion(currentQuestion+1)  
    }
    return (
      <div>
      {
        data.length>currentQuestion?( 
          <div>
            <h1>{data[currentQuestion].vopros}</h1>
          
            {data[currentQuestion].variants.map((item,index)=>(
              <button onClick={()=>click(index)}>{item}</button>
            ))}
          </div>
        ):(<h1>{score}</h1>)
      } 
      </div>
    )
}

ReactDOM.render(<F/>,document.getElementById("root"))

                `}
            </pre>
            <hr></hr>
            
        </div>
    )
}
export {Rct1}
