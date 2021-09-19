console.log("ssss");

// function Airplane(name) {
//     this.name = name;
//     this.isFlying = false;
//   }
//   Airplane.prototype.takeOff = function () {
//     this.isFlying = true;
//   };
//   Airplane.prototype.land = function () {
//    this.isFlying = false;
//   };
//   var b = new Airplane("BB");
// //   b.prototype.takeOff();
// // console.log(b.name);  
// console.log( b.isFlying);  
// b.takeOff();
// console.log( b.isFlying);  
// //console.log( b.takeOff());  

//TASK 1
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.stomach = [];
//   }
//   Person.prototype.eat = function (someFood) {
//       if(this.stomach.length < 10){this.stomach.push(someFood);}
//   }
//   Person.prototype.poop = function (someFood) {
//       this.stomach = [];
//   }
//   Person.prototype.toString = function () {
//       return `${this.name}, ${this.age}`;
//   }
  
//   var Simon = new Person("Simon", 40);
//   console.log(Simon.name);
//   console.log(Simon.age);
//   console.log( Simon.toString());
//   console.log(Simon.stomach);
//   Simon.eat("1_egg");
//   Simon.eat("2_egg");
//   Simon.eat("3_egg");
//   Simon.eat("4_egg");
//   Simon.eat("5_fish");
//   Simon.eat("6_egg");
//   Simon.eat("7_egg");
//   Simon.eat("8_egg");
//   Simon.eat("9_egg");
//   Simon.eat("10_fish");
//   Simon.eat("11_fish");
//   Simon.eat("12_fish");
//   console.log(Simon.stomach);
//   console.log(Simon.stomach.length);
//   Simon.poop();
//   console.log(Simon.stomach);
//   console.log(Simon.stomach.length);

// TASK 3
// function Car(model, milesPerGallon) {
//   this.model = model;
//   this.milesPerGallon = milesPerGallon;
//   this.tank = 0;
//   this.odometer = 0;
// }
// Car.prototype.fill = function (gallons) {
//     if(this.tank===0){
//         this.tank = gallons;
//     }else {
//         this.tank = this.tank  + gallons;
//     }
// };
// Car.prototype.drive = function (distance) {
//     if(distance>this.tank*this.milesPerGallon){
//         this.odometer = this.tank*this.milesPerGallon;
//         this.tank = 0;
//         return `I ran out of fuel at ${this.odometer} miles!`;
//     }
//     this.odometer = distance;
//     this.tank = this.tank - (distance/this.milesPerGallon);
// };

// let Prius = new Car("Prius", 40);
// console.log(Prius.model);
// console.log(Prius.milesPerGallon);
// Prius.fill(10);
// console.log(Prius.tank);
// console.log(Prius.drive(420));
// console.log(Prius.odometer);
// console.log(Prius.tank);
// Prius.fill(10);
// console.log(Prius.tank);
// console.log(Prius.drive(320));
// console.log(Prius.odometer);
// console.log(Prius.tank);
// Prius.fill(5);
// console.log(Prius.tank);

//TASK 4
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.stomach = [];
//   }
//   Person.prototype.eat = function (someFood) {
//       if(this.stomach.length < 10){this.stomach.push(someFood);}
//   }
//   Person.prototype.poop = function (someFood) {
//       this.stomach = [];
//   }
//   Person.prototype.toString = function () {
//       return `${this.name}, ${this.age}`;
//   }


// function Baby (name, age, favoriteToy) {
//     Person.call(this, name, age); 
//     this.favoriteToy = favoriteToy;
// }

// Baby.prototype.eat = function (someFood) {
//     if(this.stomach.length < 10){this.stomach.push(someFood);}
// }

// Baby.prototype.poop = function () {
//     this.stomach = [];
// }
// Baby.prototype.toString = function () {
//     return `${this.name}, ${this.age}`;
// }
// Baby.prototype.play = function () {
//     return `Playing with ${this.favoriteToy}`;
// }

// let Everest = new Baby("Everest", 3, "LEGO");
// console.log(Everest.name, Everest.age, Everest.favoriteToy);
// console.log(Everest.play());
// console.log(Everest.stomach);
// Everest.eat("1_egg");
// console.log(Everest.stomach);
// console.log(Everest.stomach.length);
// Everest.poop();
// console.log(Everest.stomach);
// console.log(Everest.stomach.length);

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   }
  
//   function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//     return 'handle undefined!';
//   }
  
//   console.log( new Food('cheese', 5).name);
//   console.log('typeof(Food) is: ',typeof(Food));
//   console.log('Food is:', Food);
//   console.log('Food("cheese", 5) is:', Food('cheese', 5));
//   console.log('new Food("cheese", 5) is:',  new Food('cheese', 5));
//   console.log(  Food('cheese', 5).name);

//   console.log('typeof(Product) is: ',typeof(Product));
//   console.log('Product is:', Product);
//   console.log('Product("cheese", 5) is:', Product('cheese', 5));
//   console.log('new Product("cheese", 5) is:',  new Product('cheese', 5));
// //   console.log(  Food('cheese', 5).name);
  
//   // expected output: "cheese"

//   /*定义一个Person类*/ 
// function Person(name,age) { 
//     this.name=name; 
//     this.age=age;
// } 
// /*定义一个学生类*/ 
// function Student(name,age,grade) { 
//    //Person.apply(this,arguments);//特点：this指代student对象，只接收2个参数，arguments为隐式类数组对象，用来接收传入的参数；
//      Person.call(this,name,age);//特点：this指代student对象，可以接收任意多个参数
//      this.grade=grade; 
// } 
// var student =new Student("zhangsan",22,"二年级");//方法Student()也是object的一个实例
// //测试 
// alert("name:"+student.name+"\n"+"age:"+student.age+"\n"+"grade:"+student.grade);
// //学生类里面我没有给name和age属性赋值啊,为什么又存在这两个属性的值呢,这个就是apply的神奇之处.