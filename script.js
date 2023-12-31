// Lab_03_1
// Гринчук Тарас
// Лабораторна робота № 3.1
// Розгалуження, задане формулою: функція однієї змінної.
// Варіант №4

// Ініціалізуємо змінні
let y, x, B;

// Отримуємо значення x
x = parseInt(prompt("Введіть значення x:"));
const A = 1 + x;

// Перший спосіб (використання лише команд розгалуження в скороченій формі)
if (x <= 4) {
   B = Math.exp(Math.log(2 + 2 * x) + 2 * x);
}
if (4 < x && x <= 7) {
   B = 1 / Math.tan((1 + x) / 9) + 8 * x;
}
if (x > 7) {
   B = 1 - 7 * x + x ** 2 - 2 * x ** 3;
}

// Другий спосіб (використання лише команд розгалуження в повній формі)
if (x <= 4) {
   B = Math.exp(Math.log(2 + 2 * x) + 2 * x);
} else if (4 < x && x <= 7) {
   B = 1 / Math.tan((1 + x) / 9) + 8 * x;
} else {
   B = 1 - 7 * x + x ** 2 - 2 * x ** 3;
}

y = A + B;

alert(`Значення змінної y дорівнює ${y}`); // Виводимо значення y
