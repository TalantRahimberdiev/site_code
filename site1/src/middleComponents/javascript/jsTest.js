import React, { useState }  from "react";
import ReactDOM from "react-dom";


const jsTesting=[
  {
    vopros:'which of the following is function:',
    variants:['new Date()','callback','array'],
    otvet:1
  },
  {
    vopros:'which of the following is language:',
    variants:['Node JS','Javascript','React'],
    otvet:1
  },
  {
    vopros:'is not a way to create object:',
    variants:['Object.create()','Object literal','Array.isArray()'],
    otvet:2
  },
  {
    vopros:'is not a type of data in JS:',
    variants:['int','Number','bigInt'],
    otvet:0
  },
  {
    vopros:'which of them is array method:',
    variants:['Object.key()','reduceRight()','hasOwnProperty()'],
    otvet:1
  },
  {
    vopros:'output of let[a,b]=[23,45];',
    variants:['a=23,b=45','a=45,b=23','a=[ ],b=[ ]'],
    otvet:0
  },
  
  
  
]

function JsTest(){
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [score,setScore]=useState(0)

    const click=(optionId)=>{
      if(optionId==jsTesting[currentQuestion].otvet){
        setScore(score+1)
      }
      setCurrentQuestion(currentQuestion+1)  
    }
    return (
      <div>
      {
        jsTesting.length>currentQuestion?( 
          <div>
            <h1>JAVASCRIPT TEST</h1>
            <hr></hr>
            <h4>question {currentQuestion+1} from {jsTesting.length}</h4>
            <h1>{jsTesting[currentQuestion].vopros}</h1>
          
            {jsTesting[currentQuestion].variants.map((item,index)=>(
              <button onClick={()=>click(index)}><strong>{item}</strong></button>
            ))}
          </div>
        ):(<div>
            <h1>Your score:{score}</h1>
            <button onClick={()=>setCurrentQuestion(0)}>
              try again</button>
          </div>)
      } 
      </div>
    )
}
export {JsTest}
