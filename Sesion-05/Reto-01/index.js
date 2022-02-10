// class vec {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     plus(other) { return new vec(this.x + other.x, this.y + other.y) }
//     minus(other) { return new vec(this.x - other.x, this.y - other.y) }
//     length() { return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)) }
// }

// var vec1 = new vec(1, 2);
// var vec2 = new vec(2, 3);

// console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
// console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
// console.log(vec1.length()); // 2.23606797749979

class Human {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;

    }
}

class Worker extends Human {
    constructor(name, lastname, age, job) {
        super(name, lastname, age)
        this.job = job;
    }
}

let Rick = new Worker("Rick", "Solano", "41", "engineer");