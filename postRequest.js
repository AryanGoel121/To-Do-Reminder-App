// let options = {
//     method: "POST", 
//     headers: {
//         "Content-type": "application/json"
//     }
// }
// we can make an object which we can pass everytime we are making a post request

// const { response } = require("express");

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers:{
//         'Content-type': 'application/json; chatset=UTF-8',
//     },
// }).then((response)=>response.json())
// .then((json)=>console.log(json));

const getTodo = async(id)=>{
    let promise = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
    response = await promise.json()
    return response
}

// Lets do this using async await
const postRequest = async ()=>{
    let options = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1100,
        }),
        headers:{
            'Content-type': 'application/json; chatset=UTF-8',
        },
    }
    // await fetch('https://jsonplaceholder.typicode.com/posts', options)
    // .then((res)=>res.json())
    // .then((resJSON)=>console.log(resJSON));
    // OR-----------
    let promise = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = (await promise).json()
    return response
}

const mainFunc = async() =>{
    let todo = await postRequest();
    console.log(todo);
    console.log(await getTodo(101));
}

mainFunc();