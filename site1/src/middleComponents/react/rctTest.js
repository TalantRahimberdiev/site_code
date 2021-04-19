import React, { useState }  from "react";
import ReactDOM from "react-dom";


const rctTesting=[
  {
    vopros:'which of them is framework:',
    variants:['react','node js','c++'],
    otvet:0
  },
  {
    vopros:'which of the following is language:',
    variants:['node js','JS','react'],
    otvet:1
  },
  {
    vopros:'click for correct option about virtual DOM:',
    variants:['No memory wastage',' Creates a new DOM if element updates','Directly updates HTML'],
    otvet:0
  },
  {
    vopros:'click for correct option about Real DOM:',
    variants:[' Can not directly update HTML','Nomemory wastage','Creates a new DOM if element updates'],
    otvet:2
  },
  {
    vopros:'author of react:',
    variants:['Facebook','Google','Twitter'],
    otvet:1
  },
  {
    vopros:'which of the following is true about React state:',
    variants:[' Changes inside child components','Parent component can change value','Receive initial value from parent component'],
    otvet:0
  },
  {
    vopros:'which of the following is true about React props and React state:',
    variants:[' Changes inside child components','Parent component can change value','Receive initial value from parent component'],
    otvet:2
  },
  {
    vopros:'which of the following is true about Stateful Component:',
    variants:[' Have authority to change state','Do not have the authority to change state',' Contains no knowledge of past, current and possible future state changes'],
    otvet:0
  },
  
  
  
]

function RctTest(){
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [score,setScore]=useState(0)

    const click=(optionId)=>{
      if(optionId==rctTesting[currentQuestion].otvet){
        setScore(score+1)
      }
      setCurrentQuestion(currentQuestion+1)  
    }
    return (
      <div>
      {
        rctTesting.length>currentQuestion?( 
          <div>
            <h1>REACT TEST</h1>
            <hr></hr>
            <h4>Question {currentQuestion+1} from {rctTesting.length}</h4>
            <h1>{rctTesting[currentQuestion].vopros}</h1>
          
            {rctTesting[currentQuestion].variants.map((item,index)=>(
              <button onClick={()=>click(index)}><strong>{item}</strong></button>
            ))}
          </div>
        ):(<div>
            <h1>Your score:{score}</h1>
            <button onClick={()=>setCurrentQuestion(0)}><strong>try again</strong></button>
          </div>)
      } 
      </div>
    )
}
export {RctTest}
