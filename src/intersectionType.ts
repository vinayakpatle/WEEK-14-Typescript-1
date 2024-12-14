type manager={
    name:string,
    age:number
}


type employe={
    name:string,
    department:string
} 

type teamLead= manager & employe;

const team: teamLead={
    name:"Vianayak",
    age:17,
    department:"softwere development"
}

function voting(user: teamLead){
    if(user.age>18){
        console.log(`${user.name} is eligible to do vote`);
    }else{
        console.log(`${user.name} is not eligible to do vote`);
    }
}

voting(team);