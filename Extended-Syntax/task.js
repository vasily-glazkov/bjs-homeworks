"use strict";

function calculateQuadraticEquation() {
	let a = +window.a.value;
	let b = +window.b.value;
	let c = +window.c.value;
	let result = getResult(a, b, c);
	window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
	let span = window.result;
	span.textContent = "х = " + result;
}

function getResult(a, b, c) {
	// код для задачи №1 писать здесь
	let x = [];
	let d = (b ** 2) - (4 * a * c);

	if (d < 0) {
		console.log("Корней нет");
	} else if (d === 0) {
		x = (-b + Math.sqrt(d)) / (2 * a);
		console.log(x);
	} else {
		x[0] = (-b + Math.sqrt(d)) / (2 * a);
		x[1] = (-b - Math.sqrt(d)) / (2 * a);
	}
	return x;
}



function calculateAverageRating() {
	let marks = window.marks.value.split("").map(Number).filter((n) => !isNaN(n) && n > 0);
	let averageMark = getAverageMark(marks);
	window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
	// код для задачи №2 писать здесь
	let sum = 0;

	// Определяем длину массива и сокращаем до 5 при необходимости
	if (marks.length > 5) {
		console.log("Слишком много цифр");
		marks = marks.slice(0, 5);
	}

	// Суммируем оценки
	for (let i = 0; i < marks.length; i++) {
		sum = sum + marks[i];
	}

	// Вычисляем среднее значение и возвращем его
	let averageMark = sum / marks.length;
	return averageMark;
}

function calculateDrinkTask() {
	let name = window.personName.value;
	let dateOfBirthday = new Date(window.dateOfBirthday.value);
	let drink = askDrink(name, dateOfBirthday);
	window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
	// Создаем объект текущей даты
	let current = new Date();
	// Вычисляем возраст округленный в годах
	let age = current.getFullYear() - dateOfBirthday.getFullYear();

	// Определяем подходит ли возраст
	if (age >= 18) {
		return `Не желаете ли олд-фэшн, ${name}?`;
	} else {
		return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	}
}
