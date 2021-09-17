console.log("test1");

// REVIEW

// a list of stuff where the order matters
// const arr = [1, 2, 3, 4, 5];

// accessing arrays
// index
// arr[arr.length - 1];
// arr[4];
// console.log(arr[4]);
// array methods
// .map, .filter, .reduce
// foreach loops
// const mappedArr = arr.map((num, index, array) => {
//     // console.log(num);
//     // console.log(index);
//     // console.log(array);
    
//     // if (num % 2 === 0) return num;
//     // else return null;
    
//     return num * 10;
//   });
  
//   console.log(mappedArr);
  
//   const filteredArr = arr.filter((num, index, array) => {
//     return num % 2 === 0;
//   });
  
//   console.log(filteredArr);
  
//   // accumulator is your bucket that you're putting values into
//   // current is the current index value of the array that you're reducing
//   const reducedArr = arr.reduce((accumulator, current) => {
//     console.log(accumulator);
//     return accumulator + current;
//   }, 0); 
//   // const reducer = (previousValue, currentValue) => previousValue + currentValue;
//   console.log(reducedArr);
  // REVIEW

// a list of stuff where the order matters


//2
// const arr = [1, 2, 3, 4, 5];
// const objArr = [
//   {
//     id: 1,
//     name: 'Keiran',
//     type: 'teacher'
//   },
//   {
//     id: 2,
//     name: 'Brian',
//     type: 'student'
//   },
//   {
//     id: 3,
//     name: 'Deepak',
//     type: 'student'
//   },
//   {
//     id: 4,
//     name: 'Alex',
//     type: 'student'
//   }
// ];

// // accessing arrays
// // index
// arr[arr.length - 1];
// arr[4];

// // array methods
// // .map, .filter, .reduce
// // foreach loops
// const mappedArr = arr.map((num, index, array) => {
//   // console.log(num);
//   // console.log(index);
//   // console.log(array);
  
//   // if (num % 2 === 0) return num;
//   // else return null;
  
//   return num * 10;
// });

// const mappedObjArr = objArr.map((obj) => {
//   return {
//     name: obj.name
//   };
//   // return obj.name;
// });

// // console.log(mappedArr);
// console.log(mappedObjArr);

// const filteredArr = arr.filter((num, index, array) => {
//   return num % 2 === 0;
// });

// // console.log(filteredArr);

// // accumulator is your bucket that you're putting values into
// // current is the current index value of the array that you're reducing
// const reducedArr = arr.reduce((accumulator, current) => {
//   // console.log(accumulator);
//   return accumulator + current;
// }, 0);
// // const reducer = (previousValue, currentValue) => previousValue + currentValue;
// // console.log(reducedArr);

// arr.forEach((num, index, array) => {
//   // console.log(num);
//   // num * 10;
// });


//3
// Constructors
// function Pet(attr) {
//     this.name = attr.name;
//     this.owner = attr.owner;
//     this.phrase = attr.phrase;
//   }
  
//   const attributes = {
//     name: 'Lilly',
//     owner: 'Keiran',
//     phrase: 'bark bark'
//   }
//   const lilly = new Pet(attributes);
//   console.log(lilly)
// function Pet(attr) {
//     this.name = attr.name || '';
//     this.owner = attr.owner || '';
//     this.phrase = attr.phrase || '';
//   }
  
//   // Prototypes
//   // see param and arg in invocation
//   Pet.prototype.speak = function(term) {
//     return `${this.name} says ${term}.`;
//   };
  
//   const whatever = {
//     name: 'Lilly',
//     owner: 'Keiran',
//     phrase: 'bark bark'
//   }
//   const lilly = new Pet(whatever);
  
//   console.log(lilly);
//   console.log(lilly.speak('I am a dog'));
  
//   // make a new constructor for BabyPet that derives from Pet
//   // should have all the same properties as Pet as well as favToy
//   // should have all the same prototype methods as Pet as well as play

// //   BabyPet.prototype.c
// function BabyPet(babyAttr) {
//     Pet.call(this, babyAttr);
//     this.favToy = babyAttr.favToy;
// }

// BabyPet.prototype = Object.create(Pet.prototype);
// BabyPet.prototype.play = function () {
//     return `${this.name} likes to play with ${this.favToy}.`;
// }
// BabyPet.prototype = Object.create(Pet.prototype);

//4
// Classes
class Pet {
    constructor(attrs) {
      // properties go here
      this.name = attrs.name;
      this.owner = attrs.owner;
      this.phrase = attrs.phrase;
    }
    
    // methods go here
    speak() {
      return `${this.name} says ${this.phrase}.`;
    }
  }
  
  // extends keyword replaces the Object.create() part
  // gets whatever methods are on the parent class
  class BabyPet extends Pet {
    constructor(babyAttrs) {
      // super replaces Pet.call()
      // takes all the attributes from our parent class and copies them here
      super(babyAttrs);
      this.favToy = babyAttrs.favToy;
    }
    
    // methods go here
    play() {
      return `${this.name} likes to play with ${this.favToy}.`
    }
  }
  
  const whatever = {
    name: 'Lilly',
    owner: 'Keiran',
    phrase: 'bark bark',
    favToy: 'ball'
  }
  const lilly = new BabyPet(whatever);
  
  console.log(lilly);
  console.log(lilly.speak());
  console.log(lilly.play());
  
  // make a GrandBabyPet class
  // deriving from both BabyPet and Pet
  // add one new property and one new method





//   class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   } 
//   const newRect = new Rectangle(400, 800);
// console.log(newRect);
// //Logs out:
// // ​​​​​Rectangle { height: 400, width: 800 }

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }

  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(this.name + ' barks.');
    }
  }

  const doggy = new Dog('Grizzly');

doggy.speak();



function show() {
    console.log('show');
    console.log(this);
  }
show();// this-->window
var obj = {
    name: 'zs'
  };


  var fn = show.bind(obj); // 
  fn();// this-->obj  {name: 'zs'}



  function a(c){
    this.b = c;
    this.d =function(){
        // alert(this.b);
        console.log(this.b);
    }
}
var obj = new a('test');
console.log(typeof obj.prototype);
console.log(typeof a.prototype);
// alert(typeof obj.prototype);//undefine
// alert(typeof a.prototype);//object
console.log(this === window); // true
console.log(window.alert === this.alert); // true
console.log(this.parseInt("021", 10)); // 21


// //let fruit = "apple";  
// function foo() {   // 定义一个全局函数
//     console.log(this.fruit);
// }
// var fruit = "apple";   // 定义一个全局变量，等价于window.fruit = "apple";此时函数foo中this指向window对象，这种调用方式和window.foo();是完全等价的    
// foo(); // "apple"
// let pack = {   // 自定义一个对象，并将此对象的属性foo指向全局函数foo
//     fruit: "orange",
//     foo: foo
// };
// // var pack = {   // 自定义一个对象，并将此对象的属性foo指向全局函数foo
// //     fruit: "orange",
// //     foo: foo
// // };
// pack.foo(); // "orange"  此时函数foo中this指向window.pack对象


//.call .apply
// function foo() {   // 定义一个全局函数
//     console.log(this.fruit);
// }
// var fruit = "apple";   // 定义一个全局变量
// var pack = {   // 自定义一个对象
//     fruit: "orange"
// };
// foo.apply(window);    // "apple"   等价于window.foo();
// foo.apply(pack);  // "orange"   此时foo中的this === pack

//.apply
// function foo() {   // 定义一个全局函数
//     if (this === window) {
//         console.log("this is window.");
//     }
// }
// foo.boo = function() {   // 函数foo也是对象，所以可以定义foo的属性boo为一个函数
//     if (this === foo) {
//         console.log("this is foo.");
//     } else if (this === window) {
//         console.log("this is window.");
//     }
// };
// foo(); // this is window.   等价于window.foo();
// foo.boo(); // this is foo.   可以看到函数中this的指向调用函数的对象
// foo.boo.apply(window); // this is window.   使用apply改变函数中this的指向


// //.prototype
// function Person(name) {// 构造函数
//     this.name = name;
// }
// Person.prototype = {// 定义Person的原型，原型中的属性可以被自定义对象引用
//     getName: function() {
//         return this.name;
//     }
// }
// var h = function () {
//     this.name = "dddd";
// }
// var hao= new Person("haorooms");
// console.log(hao.getName());// "haorooms"
// console.log(hao.prototype);
// console.log(h.prototype);
// console.log(h.apply(Person("mm")));

// // 定义数组的构造函数
// function Array() {   // 定义数组的构造函数，作为JavaScript的一种预定义类型
//     // ...
// }     
// var arr1 = new Array(1, 56, 34, 12);   // 初始化数组的实例  
// // 但是，我们更倾向于如下的语法定义：  
// var arr2 = [1, 56, 34, 12];   



// //向JS固有类型Array扩展一个获取最小值的方法
// Array.prototype.min = function() {   //向JS固有类型Array扩展一个获取最小值的方法
//     var min = this[0];
//     for (var i = 1; i < this.length; i++) {
//         if (this[i] < min) {
//             min = this[i];
//         }
//     }
//     return min;
// };
// console.log([1, 56, 34, 12].min()); // 1   // 在任意Array的实例上调用min方法


// // prototype
// function Person(name){   
//     this.name=name;   
//     this.showMe=function(){ 
//         // alert(this.name); 
//         console.log(this.name); 
//     }   
// };    
// var one=new Person('js');
// // alert(one.prototype)   //undefined   
// // alert(typeof Person.prototype);   //object   
// // alert(Person.prototype.constructor);   //function Person(name) {...};  
// console.log(one.prototype)   //undefined   
// console.log(typeof Person.prototype);   //object   
// console.log(Person.prototype.constructor);   //function Person(name) {...};  


// //constructor
// function Person(name){   
//     this.name=name;   
//     this.showMe=function(){   
//         alert(this.name);   
//     }   
// }; 
// Person.prototype.from=function(){   
//     alert('I come from prototype.');   
// }
// var one=new Person('js'); 
// one.showMe();   //js,这个结果没有什么好奇怪的   
// one.from();   //I come from prototype.，这个结果有一点奇怪吧  
// alert(one.constructor);   //function Person(name) {...}   
// alert(Person.prototype.constructor);   //function Person(name) {...}  

// //constructor
// function Person(name) {
//     this.name = name;
// };
// Person.prototype.getName = function() {
//     return this.name;
// };
// var p = new Person("haorooms");
// console.log(p.constructor === Person); // true
// console.log(Person.prototype.constructor === Person); // true
// // 将上两行代码合并就得到如下结果
// console.log(p.constructor.prototype.constructor === Person); // true

