// Задание 5
    function addition(a, b) {
        return a + b;
    }

    function subtraction(a, b) {
        return a - b;
    }

    function multiplication(a, b) {
        return a * b;
    }

    function division (a, b) {
        return a / b;
    }

    // Проверка задания 5
    var userA = +prompt("Проверка задания 5\nВведите число a:");
    var userB = +prompt("Введите число b:");
    alert("Сумма чисел: " + addition(userA, userB) + "\nРазность чисел: " + subtraction(userA, userB) + "\nПроизведение чисел: " + multiplication(userA, userB) + "\nЧастное чисел: " + division(userA, userB));



// Задание 6
    function mathOperation(arg1, arg2, operation) {
        switch(operation) {
            case addition:
                return addition(arg1, arg2);
                break;
            case subtraction:
                return subtraction(arg1, arg2);
                break;
            case multiplication:
                return multiplication(arg1, arg2);
                break;
            case division:
                return division(arg1, arg2);
                break;
        }
    }



// Проверка задания 6
var userArg1 = +prompt("Проверка задания 6\nВведите первое число: ");
var userArg2 = +prompt("Введите второе число: ");
var userOperation = prompt("Напишите, что нужно сделать с числами?\nВарианты:\n- сложить;\n- вычесть;\n- умножить;\n- разделить");
userOperation = userOperation.toLowerCase();
var res;
switch(userOperation) {
    case "сложить":
        res = mathOperation(userArg1, userArg2, addition);
        break;
    case "вычесть":
        res = mathOperation(userArg1, userArg2, subtraction);
        break;
    case "умножить":
        res = mathOperation(userArg1, userArg2, multiplication);
        break;
    case "разделить":
        res = mathOperation(userArg1, userArg2, division);
        break;
}

alert(res);