class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}

const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.calculateArea());