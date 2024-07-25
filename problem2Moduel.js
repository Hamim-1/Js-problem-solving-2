export function areaOfCircle(radius) {
    if (radius < 0) {
        return "The radius cannot be negative";
    }
    return Math.PI * radius * radius;
};



