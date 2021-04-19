
import React,{useState} from'react'
import ReactDOM from 'react-dom'

import {Js1} from './javascript/js1'
import {Js2} from './javascript/js2'
import {Js3} from './javascript/js3'
import {Js4} from './javascript/js4'
import {Js5} from './javascript/js5'
import {Js6} from './javascript/js6'
import {Js7} from './javascript/js7'
import {Js8} from './javascript/js8'
import {JsTest} from './javascript/jsTest'


import {Rct1} from './react/rct1'
import {Rct2} from './react/rct2'
import {Rct3} from './react/rct3'
import {Rct4} from './react/rct4'
import {Rct5} from './react/rct5'
import {Rct6} from './react/rct6'
import {Rct7} from './react/rct7'
import {Rct8} from './react/rct8'
import {RctTest} from './react/rctTest'



import {Html1} from './html/html1'
import {Html2} from './html/html2'
import {Html3} from './html/html3'
import {Html4} from './html/html4'
import {Html5} from './html/html5'
import {Html6} from './html/html6'
import {Html7} from './html/html7'
import {Html8} from './html/html8'
import {HtmlTest} from './html/htmlTest'


const middleComponents=[
    {
        js1:<Js1/>,
        js2:<Js2/>,
        js3:<Js3/>,
        js4:<Js4/>,
        js5:<Js5/>,
        js6:<Js6/>,
        js7:<Js7/>,
        js8:<Js8/>,
        jsTest:<JsTest/>
    },
    {
        rct1:<Rct1/>,
        rct2:<Rct2/>,
        rct3:<Rct3/>,
        rct4:<Rct4/>,
        rct5:<Rct5/>,
        rct6:<Rct6/>,
        rct7:<Rct7/>,
        rct8:<Rct8/>,
        rctTest:<RctTest/>
    },
    {
        html1:<Html1/>,
        html2:<Html2/>,
        html3:<Html3/>,
        html4:<Html4/>,
        html5:<Html5/>,
        html6:<Html6/>,
        html7:<Html7/>,
        html8:<Html8/>,
        htmlTest:<HtmlTest/>,

    }
]


export {middleComponents}


