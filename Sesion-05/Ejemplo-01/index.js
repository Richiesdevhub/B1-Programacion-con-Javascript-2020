// let test = Array.from(Array(1000).keys());

// test.forEach(e => {
//     if (e === 15) {
//         return;
//     }
//     console.log(e);
// })

class Tractor {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    info() { console.log(`El tractor tiene como nombre $(name) y es del año $(year)`) }
}

const deer = new Tractor("deer", 2022);
deer.info();