import React,{useState} from'react'
import ReactDOM from 'react-dom'
import {headerTitle} from '../../data/lexica'


function Head(props){
    const currentLan=props.currentLan;

    return(
        <div className='head'>
            <button>{headerTitle[currentLan][2]}</button>
            <div className="dropdown">
                <button className="dropbtn">{currentLan}</button>
                <div className="dropdown-content">
                    {currentLan!='Ru'&&<a href='#' onClick={()=>props.setCurrentLan('Ru')}>Русский</a>}
                    {currentLan!='Kg'&&<a href='#' onClick={()=>props.setCurrentLan('Kg')}>Кыргызча</a>}
                    {currentLan!='En'&&<a href='#' onClick={()=>props.setCurrentLan('En')}>English</a>}  
                </div>
            </div>
            <h3 id='name'>{headerTitle[currentLan][0]}</h3>
            <h4 id='name1'>{headerTitle[currentLan][1]}</h4>
        </div>
    )
}

export {Head}