const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {

    const root = document.getElementById("root");

    const header1 = document.createElement('h1');
    header1.innerText = "Freelancers";
    root.appendChild(header1);

    //create unordered list element 
    const listUsers = document.createElement('ul');

    //loop through the users array creating li elements
    /* while (users > 0){
        /

    } */


    //append elements to HTML document
    



}

//call the main function
main();