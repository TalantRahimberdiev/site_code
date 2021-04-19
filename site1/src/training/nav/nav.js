import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import {getAll} from '../../data/categories' 




function Nav(props){

    return(
        <div className='nav'>
            <ul>
                {getAll().map((category,index)=>{
                    return <li  key={index} onClick={()=>props.onChange(category.id)}>
                        <a className={props.currentCategoryId==category.id ? 'active' : ''} href='#'>{category.title}</a>
                        </li>
                    })}
            </ul>
        </div>
    )
}

export {Nav}