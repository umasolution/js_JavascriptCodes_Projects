// for all regular function calls, this points to window object.

/*run this in console of browser*/
console.log(this);  //window object

function sayHello() {
    console.log("Hello");
}
sayHello(); /* regular function call,  it will give windows object*/

const user = {
    firstName: "Himanshu",
    countCourse: 4,
    getCouseCount: function () {
        console.log("line 7",this); //user object

        function sayBye() {
            console.log(this);  //window object
        }
        sayBye();   /* It is also regular function call*/
    }
};

user.getCouseCount(); /* This is not a regular function call it through the object*/
