
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Rct5(){
  const difference=[
    {
      description:
        [
          '1. ARCHITECTURE',
          'Only the View of MVC',	
          'Complete MVC'
        ]
    },
    {
      description:
        [
          '2. RENDERING',	
          'Server-side rendering',	
          'Client-side rendering'
        ]
    },
    {
      description:
        [
          '3. DOM',
          'Uses virtual DOM',
          'Uses real DOM'
        ]
    },
    {
      description:
        [
          '4. DATA BINDING',
          'One-way data binding',
          'Two-way data binding'
        ]
    },
    {
      description:
        [
          '5. DEBUGGING',	
          'Compile time debugging',	
          'Runtime debugging'
        ]
    },
    {
      description:
        [
          '6. AUTHOR',	
          'Facebook',	
          'Google'
        ]
    }
  ]
    return(
        <div>
            <h2>React Rendering</h2>
            <h4>React vs Angular</h4>
            <table>
              <tr>
                <th>TOPIC</th>
                <th>REACT</th>
                <th>ANGULAR</th>
              </tr>
              {difference.map((descr)=>{
                return(
                  <tr>
                    {descr.description.map((d)=>{
                      return (
                        <td>{d}</td>
                      )
                    })}
                  </tr>
                )
              })}
            </table>
            <h4>how to render component</h4>
            <p>Example 1</p>
            <pre>
                {
                    `
    function Greeting(){
     return (
       <div>
        <h1>Hello World!</h1>    
       </div>
     )
    }

    ReactDOM.render(<Greeting/>,document.getElementById('root))
                    `
                }
            </pre>
            <hr></hr>

            <p>Example 2</p>
            <pre>
                {
                    `
    function Glavka(){
      const [currentCategoryId,setCurrentCategoryId]=useState(1)
      const [currentTopicId,setCurrentTopicId]=useState(1)
      return(
        <div className='grid-container'>
         <Head/>
         <Nav currentCategoryId={currentCategoryId}
           onChange={(id)=>{setCurrentCategoryId(id);
             setCurrentTopicId(1)}}/>
         <Left currentTopicId={currentTopicId}
           categoryId={currentCategoryId}
             onChange={(id)=>setCurrentTopicId(id)}/>
         <Middle categoryId={currentCategoryId}
           topicId={currentTopicId}/>
         <Footer/>
        </div>
      )
    }
                      
    ReactDOM.render(<Glavka/>,document.getElementById('root'))
                    `
                }
            </pre>
            <hr></hr>

            
        </div>
    )
}
export {Rct5}
