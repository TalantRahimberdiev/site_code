
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Rct2(){
    const stateProps=[
        {
            description:['1. Receive initial value from parent component','Yes','Yes']
        },
        {
            description:['2. Parent component can change value','No','Yes']
        },
        {
            description:['3. Set default values inside component','Yes','Yes']
        },
        {
            description:['4. Changes inside component','Yes','No']
        },
        {
            description:['5. Set initial value for child components','Yes','Yes']
        },
        {
            description:['6. Changes inside child components','No','Yes']
        },
    ]
    return(
        <div>
            <h2>React props</h2>
            <h4>Differentiate between states and props</h4>
            <table>
                <tr>
                    <th>Conditions</th>
                    <th>State</th>
                    <th>Props</th>
                </tr>
                    {stateProps.map((descriptions)=>{
                        return (
                                <tr>{descriptions.description.map((d)=>{
                                    return (
                                        <td>{d}</td>    
                                    )
                                })}</tr>            
                        )
                    })}
                
            </table>


            <h4>Example of using Props</h4>
            <pre>
                {`
    class Car extends React.Component {
        render() {
            return <h2>I am a {this.props.brand}!</h2>;
        }
    }
  
    class Garage extends React.Component {
        render() {
            return (
                <div>
                    <h1>Who lives in my garage?</h1>
                    <Car brand="Ford" />
                </div>
            );
        }
    }
  
    ReactDOM.render(<Garage />, document.getElementById('root'));

                `}
            </pre>
            <hr></hr>

            <h4>Example to create left bar</h4>
            <pre>
                {`
    import React,{useState} from 'react'

    import {getById} from '../../data/categories'
    import {getTopicsByCategoryId} from '../../data/data'
                
        function Left(props){
            const category=getById(props.categoryId)    
                return(
                    <div className='left'>
                        <h3>{category.title}</h3>
                        <ul>
                            {getTopicsByCategoryId(props.categoryId).map(topic=>{
                                return(
                                <li 
                                    className={props.currentTopicId==topic.id ? 'activeTopic' : ''}
                                    onClick={()=>props.onChange(topic.id)} key={topic.id}>{topic.topicTitle}</li>)  
                                })}
                        </ul> 
                    </div>
                )
        }
        export {Left}
                
                `
                }
            </pre>
            
        </div>
    )
}
export {Rct2}
