var user = {
//  key : value
    firstName : "Himanshu",
    lastName : "Parmar",
    role : "student", 
    age : 20, 
    learnJs : true
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.age);
user.age = 21;
console.log(user.age);

console.table(user);