
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Js5(){
    return(
        <div>
            <h2>JS Objects</h2>
            <pre>
                {`
    const waysToCreateObjects={
        first:"new Object()",
        second:"Object literals",
        third:"function constructor",
        fourth:"Object create()",
        fifth:"class constructor",
    }
                `}
            </pre>
            <hr></hr>
            <p>new Object()</p>
            <pre>
                {`
    let desert=new Object();
        desert.name="Sahara";
        desert.location="Africa";
        desert.area="9,200,000 km^2";
        desert.provideInfo=function(){
            return this.name+' '+this.location+' '+this.area;   
        }

    console.log(desert.provideInfo());
                `}
            </pre>
            <p>console:Sahara Africa 9,200,000 km^2</p>
            <hr></hr>

            <p>Object literals</p>
            <pre>
                {`
        let team={
            a:"arsenal",
            m:"manchester",
            b:"bavaria"
        }
        console.log(team.m);
                `}
            </pre>
            <p>console:manchester</p>
            <hr></hr>

            <p>function constructor</p>
            <pre>
                {`
    function medicine(name,country,purpose){
        this.n=name;
        this.c=country;
        this.p=purpose;
    }
    let vaccine=new medicine("Sputnic V","Russia","coronavirus-vaccination");
    console.log(vaccine.n);
                `}
            </pre>
            <p>console:Sputnic V</p>
            <hr></hr>

            <p>Object create()</p>
            <pre>
                {`
    let boxing={
        training:"2 hours",
        sparring:"free fight",
    }

    let sambo=Object.create(boxing);
    console.log(sambo.training);
                `}
            </pre>
            <p>console:2 hours</p>
            <hr></hr>

            <p>class constructor</p>
            <pre>
                {`
class pet {
    constructor(name, location, hobby, ratings) {
      this.n = name;
      this.l = location;
      this.h = hobby;
      this.r = ratings;
    }
    provideInfo() {
      console.log(this.n+this.l+this.h+this.r);
    }
  }
  let animal = new pet("wolverine", "north", ["wolves", "deers"], {
    danger: "9.9 / 10",
    skills: "97%"
  });
  console.log(animal.h);
                `}
            </pre>
            <p>console:["wolves", "deers"]</p>
            <hr></hr>

        </div>
    )
}
export {Js5}
