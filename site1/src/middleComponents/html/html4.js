
function Html4(){
    return(
        <div>
            <h1>HTML Lists</h1>
            <h3>an unordered list</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
            </ul>
            <h3>oredered list</h3>
            <ol>
                <li>JS</li>
                <li>React</li>
                <li>Node JS</li>
            </ol>
            <pre>
                {`
    <ul>                      <ol>
      <li>HTML</li>             <li>JS</li>
      <li>CSS</li>              <li>React</li>
      <li>SASS</li>             <li>Node jS</li>
    </ul>                     </ol>
                `}
            </pre>
        </div>
    )
}

export {Html4}