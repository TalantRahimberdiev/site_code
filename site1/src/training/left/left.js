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
                    <li id='left'
                    className={props.currentTopicId==topic.id ? 'activeTopic' : ''}
                    onClick={()=>props.onChange(topic.id)} key={topic.id}>{topic.topicTitle}</li>)  
                })}
            </ul> 
        </div>
    )
}

export {Left}