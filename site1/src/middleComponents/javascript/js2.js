
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Js2(){
    const dataTypes=[
        {
            type:'Number',
            description:'an integer or a floating-point number',
            example:'17,77,1993,34.89'
        },
        {
            type:'BigInt',
            description:'an integer with arbitrary precision',
            example:'900719925124740999n'
        },
        {
            type:'String',
            description:' shows textual data',
            example:'Talant Rahimberdiev'
        },
        {
            type:'Boolean',
            description:'true/false',
            example:'5===5 returns true'
        },
        {
            type:'Undefined',
            description:`data type is'nt initialized yet`,
            example:`let alfa;`
        },
        {
            type:'Null',
            description:`something that doesn't exist/nothing`,
            example:'let beta=null;'
        },
        {
            type:'Symbol',
            description:`data type which instances are unique and immutable`,
            example:`const zeta='Symbol'`
        },
        {
            type:'Object',
            description:`key-values`,
            example:`let bb={a:7,b:89};`
        },

    ]
    return (
        <div>
            <h2>Type of Data in JS</h2>
            <h4>There are 8 data types in JS:</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Example</th>
                </tr>
                {dataTypes.map((dataType)=>{
                    return(
                        <tr>
                            <td>{dataType.type}</td>
                            <td>{dataType.description}</td>
                            <td>{dataType.example}</td>
                        </tr> 
                    )
                })}
            </table>
        </div>
    )
}

export {Js2}