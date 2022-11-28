const usersName = [
    'liza',
    'Dmitro',
    'lev',
'Vika',
    'Inna',
    'Anton',
]

// correct implementationg

//for(let i = 0; i < usersName.length; i++){
//    console.log(usersName[0]);
//}

function myFanction (){
    console.log("Please, press a butten");
}
myFanction();

function showUser(firstName, lastName, age){
    console.log(firstName, lastName, age);

}

showUser('Silvia', 'Coy', 34);

function showUser(firstName = 'not defined', lastName = 'not defined', age = 'not defined'){
    console.log(firstName, lastName, age);
}
showUser('Silvia');