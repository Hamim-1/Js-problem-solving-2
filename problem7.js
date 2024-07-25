class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}


class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog');
        this.breed = breed;
    }

    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog('Tomi', 'kottar food');
console.log(myDog.name);

myDog.makeSound(); 
