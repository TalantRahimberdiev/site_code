
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Html1(){

    const table=[
        {
            tag:
                [
                    '<table>',
                    'It defines a table.'
                ]
        },
        {
            tag:
                [
                    '<tr>',	
                    'It defines a row in a table.'
                ]
        },
        {
            tag:
                [
                    '<td>',
                    'It defines a cell in a table.'
                ]
        },
        {
            tag:
                [
                    '<caption>',
                    'It defines the table caption.'
                ]
        },
        {
            tag:
                [
                    '<colgroup>',
                    'It specifies a group of one or more columns in a table for formatting.'
                ]
        },
        {
            tag:
                [
                    '<col>',
                    'It is used with <colgroup> element to specify column properties for each column.'
                ]
        },
        {
            tag:
                [
                    '<tbody>',
                    'It is used to group the body content in a table.'
                ]
        },
        {
            tag:
                [
                    '<thead>',
                    'It is used to group the header content in a table.'
                ]
        },
        {
            tag:
                [
                    '<tfooter>',
                    'It is used to group the footer content in a table.'
                ]
        }
    ]
    return(
        <div>
            <h1>HTML Table</h1>
            <h3>
                List of tags used while displaying the data in the tabular form:
            </h3>
            <table>
                <tr>
                    <th>Tag</th>
                    <th>description</th>
                </tr>
                {table.map((t)=>{
                    return(
                        <tr>
                            {t.tag.map((x)=>{
                                return(
                                    <td>{x}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </table>
            <hr></hr>

            <h3>Code for table on top</h3>
            <pre>
                {`
function Html1(){

 const table=[
  {
   tag:
    [
     '<table>',
     'It defines a table.'
    ]
   },
   {
    tag:
     [
      '<tr>',	
      'It defines a row in a table.'
     ]
    },
    {
     tag:
      [
       '<td>',
       'It defines a cell in a table.'
      ]
    },
    {
     tag:
      [
       '<caption>',
       'It defines the table caption.'
      ]
    },
    {
     tag:
      [
       '<colgroup>',
       'It specifies a group of one or more
        columns in a table for formatting.'
      ]
    },
    {
     tag:
      [
       '<col>',
       'It is used with <colgroup> 
       element to specify column 
       properties for each column.'
      ]
    },
    {
     tag:
      [
       '<tbody>',
       'It is used to group the body
        content in a table.'
      ]
    },
    {
     tag:
      [
       '<thead>',
       'It is used to group the header
        content in a table.'
      ]
    },
    {
     tag:
      [
       '<tfooter>',
       'It is used to group the footer
        content in a table.'
      ]
    }
  ]

    return(
        <div>
            <h1>HTML Table</h1>
            <h3>
                Here is the list of tags
                used while displaying the
                data in the tabular form:
            </h3>
            <table>
                <tr>
                    <th>Tag</th>
                    <th>description</th>
                </tr>
                {table.map((t)=>{
                    return(
                        <tr>
                            {t.tag.map((x)=>{
                                return(
                                    <td>{x}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </table>

            <hr></hr>

            <h3>This is code for table on top</h3>
}

export {Html1}
                `}
            </pre>



            
        </div>
    )
}
export {Html1}
