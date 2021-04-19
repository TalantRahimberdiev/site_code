
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Rct7(){
    return(
        <div>
            <h2>React Conditional Rendering</h2>
            <p>Example 1</p>
            <pre>
                {
                    `
    function Mailbox(props) {
      const unreadMessages = props.unreadMessages;
        return (
          <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
              <h2>
                You have {unreadMessages.length} unread messages.
              </h2>
            }
          </div>
        );
    }
                      
    const messages = ['React', 'Re: React', 'Re:Re: React'];
      ReactDOM.render(
        <Mailbox unreadMessages={messages} />,document.getElementById('root')
      );
                    `
                }
            </pre>
            <hr></hr>

            <p>Example 2</p>
            <pre>
                {
                    `
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
          <h1>{jsTesting[currentQuestion].vopros}</h1>
           {jsTesting[currentQuestion].variants.map((item,index)=>(
            <button onClick={()=>click(index)}>
             <strong>{item}</strong></button>
          ))}
         </div>
        ):
        (
         <div>
          <h1>Your score:{score}</h1>
           <button onClick={()=>setCurrentQuestion(0)}>try again
           </button>
         </div>)
        } 
          </div>
         )
    }
    export {JsTest}
                      
                    `
                }
            </pre>
            <hr></hr>

        </div>
    )
}
export {Rct7}
