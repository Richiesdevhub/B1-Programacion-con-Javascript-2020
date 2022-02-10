// class Human {
//     constructor(name, lastname, age) {
//         this.name = name;
//         this.lastname = lastname;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(`Hola, soy ${this.name} y espero tengas un buen día.`);
//     }
// }

// class Worker extends Human {
//     constructor (name, lastname, age, job) {
//         super(name, lastname, age);
//         this.job = job;
//     }

//     sayJob() {
//         this.sayHi();
//         console.log(`Y me dedico a ser ${this.job}`);
//     }
// }

// const polo = new Worker("Leopoldo", "Caballero", 38, "coder");

// polo.sayHi();
// polo.sayJob();






class Group {
    constructor() {
        this.elements = [];
    }

    has(number) {
        return this.elements.includes(number);
    }

    add(number) {
        if (!this.has(number)) { // true cuando no tenga el número y false cuando sí.
            this.elements.push(number);
        }
    }

    static from(numbers) {
        const group = new Group();
        numbers.forEach(number => group.add(number));

        return group;
    }

    static to(group) {
        if (!(group instanceof Group)) {
            throw new Error(`${group} no es del tipo correcto.`)
        }
    }
}

const group = Group.from([1, 2, 3, 6543, 65, 66]);

group.add(7);
group.add(5);

console.log(group.has(5));

console.log(group);

Group.to(group);