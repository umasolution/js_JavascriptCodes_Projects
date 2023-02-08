const himanshu = {
    firstName: "Himanshu",
    lastName: "Parmar",
    role: "student",
    courseCount: 3,
    getInfo: function() {
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is studying ${this.courseCount} courses
        `);
    },
};

const lco = {
    firstName: "Hitesh",
    lastName: "Choudhary",
    role: "Instructor",
    courseCount: 60,
};


// himanshu.getInfo();
// lco.getInfo();

// var lcoInfo = himanshu.getInfo.bind(lco);
// lcoInfo();

himanshu.getInfo.call(lco);