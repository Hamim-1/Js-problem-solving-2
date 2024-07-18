const Circle = class {
    constructor(radius) {
        this.radius = radius;
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
};

const myCircle = new Circle(5);
console.log(myCircle.calculateCircumference()); 
