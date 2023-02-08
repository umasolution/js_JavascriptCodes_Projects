class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo() {
        return { name: this.name, email: this.email };
    }

    enrollCourse(name) {        // acting as setter
        this.#courseList.push(name);
    }
    
    getCourseList() {          // acting as getter
        return this.#courseList;
    }

    login() {
        return "You are logged in."
    }
}

//Inheritance
class SubAdmin extends User {
    getAdminInfo() {
        return "I am SubAdmin";
    }
    static login() {
        return "login for admin only";
    }
}


module.exports = User;

const rock = new User("rock", "rock@rock.com");
//console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
//console.log(rock.getCourseList());
//console.log(rock.courseList);


const tom = new SubAdmin("Tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());