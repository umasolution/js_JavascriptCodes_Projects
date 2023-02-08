// creating a new object in functional way
var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function () {
    console.log(`Your firstName is: ${this.firstName}`);
};


//new keyword is used to make a new instance of the above object everytime
var himanshu = new User("Himanshu", 2);
himanshu.getFirstName();
himanshu.getCourseCount();
//console.log(himanshu);

var sam = new User("Sam", 1);
sam.getFirstName();
sam.getCourseCount();
//console.log(sam);