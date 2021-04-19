
import React,{useState} from'react'
import ReactDOM from 'react-dom'


function Js6(){
    return(
        <div>
            <h2>JS Prototype</h2>
            <p>Example 1</p>
            <pre>
                {`
function language(paradigm,developer,typing) {
    this.paradigm = paradigm;
    this.developer = developer;
    this.typing = typing;
  }
  
  let java = new language(
    {
        multiParadigm:
        [
            "generic", "object-oriented (class-based)", "imperative", "reflective",
        ]
    },
    "Oracle Corporation",
    ["static","strong","safe"]
    );

  let javascript = new language(
    [
        "event-driven","functional","imperative"
    ],
    "Brendan Eich",
    ["dynamic","weak","duck"]
    );

    java.paradigm.multiParadigm.map(x=>console.log(x));
    console.log('----------------');
    javascript.paradigm.map(x=>console.log(x));

    output:
        generic
        object-oriented (class-based)
        imperative
        reflective
        ----------------
        event-driven
        functional
        imperative
                `}
            </pre>
            <hr></hr>

            <p>Example 2</p>
            <h4>prototype</h4>
            <pre>
                {`
    function country(name,location,population){
        this.name=name;
        this.location=location;
        this.population=population;
    }

    let homeCountry=new country("Kyrgyzstan","Central Asia","6-7 millions");

    country.prototype.language="kyrgyz";

    console.log("mother language:"+homeCountry.language);
                `}
            </pre>
            <p>console:mother language:kyrgyz</p>
            <hr></hr>

        </div>
    )
}
export {Js6}
