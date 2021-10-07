console.groupCollapsed("1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY");
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return `${this.name} is age ${this.age}`;
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`;
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`;
    }
  }
  const p1 = new Player("David Jones", 25, 175, 75);

  console.log(p1.getAge());
  console.log(p1.getHeight());
  console.log(p1.getWeight());
}
console.groupEnd();

console.groupCollapsed("2. - https://edabit.com/challenge/yxKoCKemzacK6PECM");
{
  class Calculator {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
    add = (a, b) => a + b;
    subtract = (a, b) => a - b;
    multiply = (a, b) => a * b;
    divide = (a, b) => a / b;
  }
  var calculator = new Calculator();

  console.log(calculator.add(10, 5));

  console.log(calculator.subtract(10, 5));

  console.log(calculator.multiply(10, 5));

  console.log(calculator.divide(10, 5));
}
console.groupEnd();

console.groupCollapsed("3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS");
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    get fullname() {
      return `
      ${this.firstname} ${this.lastname}`;
    }
    get email() {
      return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    }
  }
  const emp1 = new Employee("John", "Smith");
  console.log(emp1.fullname);

  const emp2 = new Employee("Mary", "Sue");
  console.log(emp2.email);

  const emp3 = new Employee("Antony", "Walker");
  console.log(emp3.firstname);
}

console.groupEnd();

console.groupCollapsed("4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu");
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age === other.age) {
        return `${other.name} is the same age as me.`;
      } else if (this.age > other.age) {
        return `${other.name} is younger than me.`;
      } else return `${other.name} is older than me.`;
    }
  }
  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  console.log(p1.compareAge(p2));

  console.log(p2.compareAge(p1));

  console.log(p1.compareAge(p3));
}
console.groupEnd();

console.groupCollapsed("5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ");
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA;
      this.sideB = sideB;
    }
    getArea() {
      return this.sideA * this.sideB;
    }
    getPerimeter() {
      return (this.sideA + this.sideB) * 2;
    }
  }

  class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
}
console.groupEnd();

console.groupCollapsed("6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b");
{
  class Name {
    constructor(fname, lname) {
      this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
    }
    get fullname() {
      return `${this.fname} ${this.lname}`;
    }
    get initials() {
      return `${this.fname.charAt(0)}.${this.lname.charAt(0)}`;
    }
  }
  const a1 = new Name("john", "SMITH");
  console.log(a1.fname);
  console.log(a1.lname);
  console.log(a1.fullname);
  console.log(a1.initials);
}

console.groupEnd();

console.groupCollapsed("7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke");
{
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
    }
  }
  function sweetestIcecream(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++)
      max = Math.max(max, flavor[`${arr[i].flavor}`] + arr[i].numSprinkles);
    return max;
  }

  let flavor = {
    Plain: 0,
    Vanilla: 5,
    ChocolateChip: 5,
    Strawberry: 10,
    Chocolate: 10,
  };

  // return Math.max(
  //   ...arr.map((ice) => flavors[ice.flavor] + ice.numSprinkles)
  // );

  const ice1 = new IceCream("Chocolate", 13);
  const ice2 = new IceCream("Vanilla", 0);
  const ice3 = new IceCream("Strawberry", 7);
  const ice4 = new IceCream("Plain", 18);
  const ice5 = new IceCream("ChocolateChip", 3);

  console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));

  console.log(sweetestIcecream([ice3, ice1]));

  console.log(sweetestIcecream([ice3, ice5]));
}
console.groupEnd();

console.groupCollapsed("8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi");
{
  class OnesThreesNines {
    constructor(number) {
      this.number = number;
    }
    get ones() {
      return Math.floor(this.number / 1);
    }
    get threes() {
      return Math.floor(this.number / 3);
    }
    get nines() {
      return Math.floor(this.number / 9);
    }
  }

  let n1 = new OnesThreesNines(5);
  console.log(n1.nines);

  console.log(n1.ones);

  console.log(n1.threes);
}
console.groupEnd();

console.groupCollapsed("9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp");
{
  class User {
    constructor(username) {
      this.username = username;
      User.userCount += 1;
    }
  }
  User.userCount = 0;

  const u1 = new User("johnsmith10");
  console.log(User.userCount);

  const u2 = new User("marysue1989");
  console.log(User.userCount);

  const u3 = new User("milan_rodrick");
  console.log(User.userCount);
}
console.groupEnd();

console.groupCollapsed("10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn");
{
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
    getTitle() {
      return `Title: ${this.title}`;
    }
    getAuthor() {
      return `Author: ${this.author}`;
    }
  }
  // function Book(title, author) {
  //   // Write your properties and methods here
  // }

  // Instantiate your Book constructor here
  const PP = new Book("Pride and Prejudice", "Jane Austen");
  const H = new Book("Hamlet", "William Shakespeare");
  const WP = new Book("War and Peace", "Leo Tolstoy");

  console.log(PP.title);
  console.log(PP.author);
  console.log(PP.getTitle());
  console.log(PP.getAuthor());
}
console.groupEnd();
