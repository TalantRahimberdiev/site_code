
function Html5(){
    const semantic=
    [
        {
            tags:['<article>','Defines independent, self-contained content']
        },
        {
            tags:['<aside>','Defines content aside from the page content']
        },
        {
            tags:['<details>','Defines additional details that the user can view or hide']
        },
        {
            tags:['<figcaption>','	Defines a caption for a <figure> element']
        },
        {
            tags:['<figure>','Specifies self-contained content, like illustrations, diagrams, photos,']
        },
        {
            tags:['<footer>','	Defines a footer for a document or section']
        },
        {
            tags:['<header>','	Specifies a header for a document or section']
        },
        {
            tags:['<main>','Specifies the main content of a document']
        },
        {
            tags:['<mark>','	Defines marked/highlighted text']
        },
        {
            tags:['<nav>','Defines navigation links']
        },
        {
            tags:['<section>','	Defines a section in a document']
        },
        {
            tags:['<summary>','	Defines a visible heading for a <details> element']
        },
        {
            tags:['<time>','Defines a date/time']
        }
    ]
    return(
        <div>
            <h1>HTML Semantic</h1>
            <table>
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


        </div>
    )
}

export {Html5}