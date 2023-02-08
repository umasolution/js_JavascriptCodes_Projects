var user = {
    //  key : value
    firstName: "Himanshu",
    lastName: "Parmar",
    role: "student", 
    age: 20, 
    learnJs: true,
    courseDone: [],
    learnCourse: function(courseName) {
        this.courseDone.push(courseName);
    },
    countCourse: function() {
        return `${this.firstName} is enrolled in total of ${this.courseDone.length} courses.`
    },
    info: function() {
        return `FirstName: ${this.firstName}
        LastName: ${this.lastName}
        role: ${this.role}
        age: ${this.age}
        Courses Done: ${this.courseDone}
        Courses Count: ${this.countCourse()}`
    }
};

//console.log(user.countCourse());
user.learnCourse("React Js");
//console.log(user.countCourse());
console.log(user.info());
