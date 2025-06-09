class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

    repeat() {
        console.log(`${this.name} is repeating its action`);
    }
}


let dog = new Animal("Charlie");
dog.eat();
dog.sleep();
dog.repeat();

class Lion extends Animal {
    constructor(name) {
        super(name); 
    }

    roar() {
        console.log(`${this.name} can roar`);
    }
}


let simba = new Lion("Simba");
simba.roar();
simba.eat();
simba.sleep();
simba.repeat();
