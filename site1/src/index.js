
import React,{useState} from'react'
import ReactDOM from 'react-dom'

import './training/grid.css'

import './training/head/head.css'
import './training/nav/nav.css'
import './training/left/left.css'
import './training/middle/middle.css'
import './training/footer/footer.css'

import './middleComponents/javascript/js1.css'
import './middleComponents/javascript/js2.css'
import './middleComponents/javascript/js3.css'
import './middleComponents/javascript/js4.css'
import './middleComponents/javascript/js5.css'
import './middleComponents/javascript/js6.css'
import './middleComponents/javascript/js7.css'
import './middleComponents/javascript/js8.css'
import './middleComponents/javascript/jsTest.css'

import './middleComponents/react/rct1.css'
import './middleComponents/react/rct2.css'
import './middleComponents/react/rct3.css'
import './middleComponents/react/rct4.css'
import './middleComponents/react/rct5.css'
import './middleComponents/react/rct6.css'
import './middleComponents/react/rct7.css'
import './middleComponents/react/rct8.css'
import './middleComponents/react/rctTest.css'



import './middleComponents/html/html1.css'
import './middleComponents/html/html2.css'
import './middleComponents/html/html3.css'
import './middleComponents/html/html4.css'
import './middleComponents/html/html5.css'
import './middleComponents/html/html6.css'
import './middleComponents/html/html7.css'
import './middleComponents/html/html8.css'
import './middleComponents/html/htmlTest.css'





import {Head} from './training/head/head'
import {Nav} from './training/nav/nav'
import {Left} from './training/left/left'
import {Middle} from './training/middle/middle'
import {Footer} from './training/footer/footer'




function Glavka(){
  const [currentCategoryId,setCurrentCategoryId]=useState(1)
  const [currentTopicId,setCurrentTopicId]=useState(1)
  const[currentLan,setCurrentLan]=useState('En')
  return(
    <div>

      <div className='grid-container'>
        <Head currentLan={currentLan} setCurrentLan={setCurrentLan} />
        <Nav currentCategoryId={currentCategoryId}
          onChange={(id)=>{setCurrentCategoryId(id);setCurrentTopicId(1)}}/>
        <Left currentTopicId={currentTopicId} categoryId=     {currentCategoryId}  onChange={(id)=>setCurrentTopicId(id)}/>
        <Middle categoryId={currentCategoryId} topicId=   {currentTopicId}/>
        <Footer/>
      </div>
    </div>


  )
}

ReactDOM.render(<Glavka/>,document.getElementById('root'))