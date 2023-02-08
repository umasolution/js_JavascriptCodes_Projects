// import User from "./27class.js";

const User = require("./27class.js");
const himanshu = new User("Himanshu", "parmarhimanshu@aol.com");

console.log(himanshu.getInfo());
himanshu.enrollCourse("Javascript");
himanshu.enrollCourse("Python");

console.log(himanshu.getCourseList());

let courses = himanshu.getCourseList();

courses.forEach((c) => console.log(c));