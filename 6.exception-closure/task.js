// Задача 1
function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
        throw new Error('Невалидное значение');
    }
    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err; 
    }
}

// Задача 2: Класс Triangle и функция getTriangle

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        
        if (!this.isValid()) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    isValid() {
        return (
            this.sideA + this.sideB > this.sideC &&
            this.sideA + this.sideC > this.sideB &&
            this.sideB + this.sideC > this.sideA
        );
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        const semiPerimeter = this.perimeter / 2;
        return +(Math.sqrt(
            semiPerimeter *
            (semiPerimeter - this.sideA) *
            (semiPerimeter - this.sideB) *
            (semiPerimeter - this.sideC)
        )).toFixed(3);
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch(err) {
        return {
            get area() { return 'Ошибка! Треугольник не существует'; },
            get perimeter() { return 'Ошибка! Треугольник не существует'; }
        };
    }
}