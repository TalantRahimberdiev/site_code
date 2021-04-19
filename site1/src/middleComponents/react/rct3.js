
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Rct3(){
    const dom=[
        {
            description:
                [
                    '1. It updates slow.',
                    '1. It updates faster.',
                ],
        },
        {
            description:
                [
                    '2. Can directly update HTML.',
                    '2. Can not directly update HTML.',
                ],
        },
        {
            description:
                [
                    '3. Creates a new DOM if element updates.',
                    '3. Creates a new DOM if element updates.',
                ]

        },
        {
            description:
                [
                    '4. DOM manipulation is very expensive.',
                    '4. DOM manipulation is very easy.',

                ]
        },
        {
            description:
                [
                    '5. Too much of memory wastage.',
                    '5. No memory wastage.'
                ]
        }	

    ]              	
                    	
                    
  
    return(
        <div>


            <h2>Real DOM/Virtual DOM</h2>
            <h4>Difference between Real DOM and Virtual DOM</h4>
            <table>
                <tr>
                    <th>Real DOM</th>
                    <th>Virtual DOM</th>
                </tr>
                {dom.map((descriptions)=>{
                    return(
                        <tr>
                            {descriptions.description.map((element)=>{
                                return (
                                    <td>{element}</td>
                                )
                            })}
                        </tr>
                    )
                })}

            </table>
            <pre>
                {`
    import React,{useState} from 'react'
    import ReactDOM from 'react-dom'
    import {getAll} from '../../data/categories' 

    function Nav(props){
     return(
      <div className='nav'>
       <ul>
        {getAll().map((category,index)=>{
         return <li  key={index} 
          onClick={()=>
           props.onChange(category.id)}>
           <a className=
            {props.currentCategoryId==category.id ? 
             'active' : ''} href='#'>
             {category.title}
           </a>
         </li>
        })}
       </ul>
      </div>
     )
    }

    export {Nav}

                `}
            </pre>
            <hr></hr>
            
        </div>
    )
}
export {Rct3}
