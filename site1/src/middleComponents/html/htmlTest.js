
import React, { useState }  from "react";
import ReactDOM from "react-dom";


const htmlTesting=[
  {
    vopros:'Choose the correct HTML tag to make a text bold:',
    variants:['<bold>','<b>','<bo>'],
    otvet:1
  },
  {
    vopros:'What does the GENERATOR meta tag tell?',
    variants:['Who designed the page','Which program was used to produce the page','What type of server your page is on'],
    otvet:1
  },
  {
    vopros:'XHTML documents must be "well-formed:',
    variants:['true','false',],
    otvet:0
  },
  {
    vopros:'What are meta tags used for?',
    variants:[' To store information about external links','To only store information about search engines','To store information usually relevant tp browsers'],
    otvet:2
  },
  {
    vopros:'Imagelinks can show a text label if you add which property?',
    variants:['alt','alternative','str'],
    otvet:0
  },
  {
    vopros:'What does vlink mean?',
    variants:['vlink','active link','visited link'],
    otvet:2
  },
  
  
  
]

function HtmlTest(){
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [score,setScore]=useState(0)

    const click=(optionId)=>{
      if(optionId==htmlTesting[currentQuestion].otvet){
        setScore(score+1)
      }
      setCurrentQuestion(currentQuestion+1)  
    }
    return (
      <div>
      {
        htmlTesting.length>currentQuestion?( 
          <div>
            <h1>HTML TEST</h1>
            <hr></hr>
            <h4>Question {currentQuestion+1} from {htmlTesting.length}</h4>
            <h1>{htmlTesting[currentQuestion].vopros}</h1>
          
            {htmlTesting[currentQuestion].variants.map((item,index)=>(
              <button onClick={()=>click(index)}><strong>{item}</strong></button>
            ))}
          </div>
        ):(<div>
            <h1>Your score:{score}</h1>
            <button onClick={()=>setCurrentQuestion(0)}>try again</button>
          </div>)
      } 
      </div>
    )
}
export {HtmlTest}
