
function Html8(){
    return(
        <div>
            <h1>HTML Computercode</h1>
            <p>When we are programming, sometimes it is mandatory to show the Output result, error message, or coding part to user on a webpage. Hence to solve this issue HTML uses different tags for the user inputs, codes, programs, etc. With the help of these tags, you will be able to write codes to display on your webpage.
           </p>

            <pre>
                {`
    Following is a list of some tags which are used in HTML for this task.

                <code>
                <kbd>
                <samp>
                <var>
                <pre>
                
                `}
            </pre>
            <hr></hr>

            <pre>
                {`
    <!DOCTYPE html>  
    <html>  
    <body>  
    <h2>Computer Code</h2>  
    <p>This is a programming code:</p>  
    <code>  
    x = 5;<br>  
    y = 6;<br>  
    z = x + y;  
    </code>  
    </body>  
    </html>              
                `}
            </pre>

        </div>
    )
}

export {Html8}