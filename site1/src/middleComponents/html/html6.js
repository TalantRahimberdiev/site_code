
function Html6(){
    const semantic=
    [
        {
            tags:['document.getElementById(id)','Find an element by element id']
        },
        {
            tags:['document.getElementsByTagName(name)','Find elements by tag name']
        },
        {
            tags:['<document.getElementsByClassName(name)>','Find elements by class name']
        },

    ]
    return(
        <div>
            <h1>HTML JS</h1>
            <p>Example 1</p>
            <pre>
                {`
    <html>
    <body>
    
    <p id="p1"></p>
    
    <script>
    document.getElementById("p1")
    .innerHTML = "Hello World!";
    </script>
    
    </body>
    </html>

                `}
            </pre>
            <hr></hr>

            <h2>Finding HTML Elements</h2>
            <table>
                <tr>
                    <th>Method</th>
                    <th>Description</th>
                </tr>
                {semantic.map((t)=>{
                    return(
                        <tr>
                            {t.tags.map((x)=>{
                                return(
                                    <td>{x}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </table>

            <p>Example 2</p>
            <pre>
                {`
    <!DOCTYPE html>
    <html>
    <body>
    
    <h1 onclick="this.innerHTML='Hi!'">Click on this text!</h1>
    
    </body>
    </html>

    output: 'Hi!'
                
                
                `}
            </pre>

        </div>
    )
}

export {Html6}