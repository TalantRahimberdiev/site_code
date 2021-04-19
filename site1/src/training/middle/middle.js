import React,{useState} from 'react'
import ReactDOM from 'react-dom'

import {getTopicById} from '../../data/data'



function Middle(props){
    const topic=getTopicById(props.categoryId,props.topicId)

    return(
        <div className='middle'>
            <div>{topic.content}</div>
        </div>
    )
}

export {Middle}