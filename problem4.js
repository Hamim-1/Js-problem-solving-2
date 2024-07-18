class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    set setName(fullName) {
        this.firstName = fullName;
        this.lastName = '';
    }
}
const person1 = new Person('hafijur', 'Rahman');
console.log(person1.fullName);

person1.setName = 'atikur Rahman';
console.log(person1.fullName);