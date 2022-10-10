// Несколько способов не потерять контекст

// 1 вариант присвоить this к переменой

// function Car(carBrand, model, color) {
//   this.carBrand = carBrand;
//   this.model = model;
//   this.color = color;

//   this.car = function () {
//     console.log(`
//     Марка машины: ${this.carBrand}
//     Модель: ${this.model}
//     Цвет: ${this.color}
//     `);
//   };

//   this.lol = function () {
//     return this.car();
//   };

//   this.wtf = function () {          <----- Функция callback
//     setTimeout(function () {
//       return _this.lol();
//     }, 1000);
//   };

//   const _this = this;               <----- Сохранили контекст в переменую
// }

// const audi = new Car("Audi", "TT", "Red");

// audi.wtf();

// ======================================================

// 2 вариант стрелочные функции.

// Стрелочные функции берут свой контекст там где они у нас написаны !!!

// function Car(carBrand, model, color) {
//   this.carBrand = carBrand;
//   this.model = model;
//   this.color = color;

//   this.car = function () {
//     console.log(`
//     Марка машины: ${this.carBrand}
//     Модель: ${this.model}
//     Цвет: ${this.color}
//     `);
//   };

//   this.lol = () => {               <----- Стрелочная функция
//     return this.car();
//   };

//   this.wtf = function () {
//     setTimeout(this.lol, 1000);      <----- Визов метода lol в setTimeout
//   };
// }

// const audi = new Car("Audi", "TT", "Red");

// audi.wtf();

// ======================================================

// 3 вариант, тупо привязать контекст. С помощью методов bind, call, apply и.т.д

// В этом варианте используется привязка контекст с помощью bind

// В современном JavaScript у функций есть встроенный метод bind, который позволяет зафиксировать this.

// Базовый синтаксис bind:

// let boundFunc = func.bind(context);

// Пример:

// function Car(carBrand, model, color) {
//   this.carBrand = carBrand;
//   this.model = model;
//   this.color = color;

//   this.car = function () {
//     console.log(`
//     Марка машины: ${this.carBrand}
//     Модель: ${this.model}
//     Цвет: ${this.color}
//     `);
//   };

//   this.lol = function () {
//     return this.car();
//   }.bind(this);                      <----- привязка контекст с помощью bind

//   this.wtf = function () {
//     setTimeout(this.lol, 1000);
//   };
// }

// const audi = new Car("Audi", "TT", "Red");

// audi.wtf();

// ======================================================

// 4 вариант, привязать контекст c помощью метода bind в самом setTimeout :)

// Пример:

// function Car(carBrand, model, color) {
//   this.carBrand = carBrand;
//   this.model = model;
//   this.color = color;

//   this.car = function () {
//     console.log(`
//     Марка машины: ${this.carBrand}
//     Модель: ${this.model}
//     Цвет: ${this.color}
//     `);
//   };

//   this.lol = function () {
//     return this.car();
//   };

//   this.wtf = function () {
//     setTimeout(this.lol.bind(this), 1000);             <----- привязка контекст с помощью bind
//   };
// }

// const audi = new Car("Audi", "TT", "Red");

// audi.wtf();
