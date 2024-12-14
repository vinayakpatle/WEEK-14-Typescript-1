interface userTypepo{
    title:string,
    description:string,
    done:boolean
}

interface userInput{
    todo:userTypepo,
    todo2:userTypepo
}

function Todo(props: userInput){

}


/*<Todo todo={{
    title:"Go to gym",
    description:"here the description about go to gym",
    done:false
},{
    title:"start coding",

}
}.
{{
    title:"coding",

}}

/>*/


