// circle.js

export const areaOfCircle = (radius) => {
    if (radius < 0) {
        throw new Error("The radius cannot be negative");
    }
    return Math.PI * radius * radius;
};



