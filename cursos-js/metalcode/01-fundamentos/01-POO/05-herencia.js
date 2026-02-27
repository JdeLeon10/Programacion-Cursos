class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends People {
    constructor(name, age, asignature) {
        super(name, age);
        this.asignature = asignature;
    }
}

const people1 = new People("Alice", 30);
console.log(people1.greet());

const student1 = new Student("Bob", 20, "Mathematics");
console.log(student1.greet());