
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Html3(){
    const empty=
    [
        {
            tags:['<area>','<base>','<br>']
        },
        {
            tags:['<hr>','<img>','<input>']
        },
        {
            tags:['<meta>','<param>','<source>']
        },
        {
            tags:['<keygen>','<link>','<track>']
        },
        {
            tags:['<col>','<embed>','<wbr>']
        }
    ]
    return(
        <div>
            <h1>HTML Tags</h1>
            <h3>tags and elements</h3>
            <pre>
                {`
    <title>greentree</title> //HTML element
    <title> //opening tag
    </title> //closing tag
    greenTree //HTML element's content
                `}
            </pre>
            <hr></hr>

            <h3>nested elements</h3>
            <pre>
                {`
    <div className='left'>
        <h3>{category.title}</h3>
        <ul>
            {getTopicsByCategoryId
                (props.categoryId).map(topic=>{
                return(
                <li id='left'
                className=
                {props.currentTopicId==topic.id 
                    ? 'activeTopic' : ''}
                onClick={()=>props.onChange
                    (topic.id)} key={topic.id}>
                    {topic.topicTitle}</li>)  
            })}
        </ul> 
    </div>
                `}
            </pre>
            <hr></hr>

            <h3>empty tags</h3>
            <table>
                {empty.map((t)=>{
                    return(
                        <tr>
                            {t.tags.map((x)=>{
                                return(
                                    <td>{x}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </table>
        </div>

    )
}
export {Html3}
