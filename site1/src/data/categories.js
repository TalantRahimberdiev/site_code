const categories=[
    {
        id:1,
        title:'JAVASCRIPT'
    },
    {
        id:2,
        title:'REACT'
    },
    {
        id:3,
        title:'HTML'
    },
    {
        id:4,
        title:'CSS'
    },
    {
        id:5,
        title:'BOOTSTRAP'
    },
    {
        id:6,
        title:'SASS'
    },
    {
        id:7,
        title:'REDUX'
    },
    {
        id:8,
        title:'WEBPACK'
    },
    {
        id:9,
        title:'TEST'
    },
    {
        id:10,
        title:'NODE JS'
    },
    {
        id:11,
        title:'SQL'
    },
    {
        id:12,
        title:'GIT'
    },
]

export function getAll(){
    return categories
}

export function getById(cId) {
    return categories.find((c)=>c.id==cId)
    
}