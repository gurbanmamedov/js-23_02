//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// let start = parseInt(prompt("Введите начало диапазона: "));
// let end = parseInt(prompt("Введите конец диапазона: "));

// if (isNaN(start) || isNaN(end)) {
//   console.log("Введите корректные числа. ");
// } else {
//   let sum = 0;
//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }
//   console.log("Сумма всех чисел от " + start + " до " + end + " : " + sum);
// }

// Запросить 2 числа и найти только наибольший общий делитель.

// let num1 = parseInt(prompt("Введите первое число: "));
// let num2 = parseInt(prompt("Введите второе число: "));

// if (isNaN(num1) || isNaN(num2)) {
//   console.log("Введите корректные числа. ");
// } else {
//   while (num2 !== 0) {
//     let result = num2;
//     num2 = num1 % num2;
//     num1 = result;
//   }

//   console.log("НОД чисел: " + num1);
// }

// Запросить у пользователя число и вывести все делители этого числа.

// let num = parseInt(prompt("Введите число: "));

// if (isNaN(num)) {
//   console.log("Введите корректное число. ");
// } else {
//   console.log("Делители числа " + num);

//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       console.log(i);
//     }
//   }
// }

// Определить количество цифр в введенном числе.

// let num = parseInt(prompt("Введите число: "));

// if (isNaN(num)) {
//   console.log("Введите корректное число");
// } else {
//   let count = 0;
//   while (num !== 0) {
//     num = Math.floor(num / 10);
//     count++;
//   }
//   console.log("Количество цифр в числе: " + count);
// }

//Запросить у пользователя 10 чисел и подсчитать, сколько
//он ввел положительных, отрицательных и нулей. При этом
//также посчитать, сколько четных и нечетных. Вывести
//статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем

// let counter = 0;
// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;
// let evenCount = 0;
// let oddsCount = 0;
// let userNum = parseFloat(prompt("Введите число"));

// while (counter < 10) {
//   if (!isNaN(userNum)) {
//     if (userNum > 0) {
//       positiveCount++;
//     } else if (userNum < 0) {
//       negativeCount++;
//     } else {
//       zeroCount++;
//     }
//     if (userNum % 2 === 0) {
//       evenCount++;
//     } else {
//       oddsCount++;
//     }

//     counter++;
//   } else {
//     console.log("Введите корректное число");
//   }
// }
// console.log("Положительных чисел " + positiveCount);
// console.log("Отрицательных чисел " + negativeCount);
// console.log("Нулей: " + zeroCount);
// console.log("Четных чисел: " + evenCount);
// console.log("Нечетных чисел: " + oddsCount);

//Зациклить калькулятор. Запросить у пользователя 2 числа
//и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
//пользователь не откажется

// do {
//   let num1 = parseFloat(prompt("Введите первое число:"));
//   let num2 = parseFloat(prompt("Введите второе число: "));
//   let operator = prompt("Введите знак (+ , - , *, /)");
//   if (isNaN(num1) || isNaN(num2) || !"+-*/".includes(operator)) {
//     alert("Некорректный ввод.");
//     continue;
//   }
//   let result;
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num2 !== 0 ? num1 / num2 : "Деление на ноль";
//       break;
//     default:
//       result = "Некорректный оператор.";
//   }
//   alert(result);
// } while (confirm("Хотите решить еще один пример?")); 
