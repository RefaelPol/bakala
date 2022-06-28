class Human {
    constructor(humanAge, humanName, humanHight) {
        this.age = humanAge;
        this.name = humanName;
        this.hight = humanHight;
    }
    printPerson() {
        return `your age is ${this.age}, your name is ${this.name} your hight is ${this.hight}`
    }
}

const age = new Human(1);
const name = new nameOf('raul');
const hight = new hightOf(1.75);

console.log(age.ageprintPerson());

/*  */
/*  */


class Color {
    constructor(something) {
        this.theColor = something;
    }
    printColor() {
        return `
            The color is: $ {
                this.theColor
            }
            `;
    }
}

const blue = new Color('blue');
console.log(blue.printColor());