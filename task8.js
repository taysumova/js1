// Задание 8
    function power(val, pow) {
        if(pow !=1) {
            return val * power(val, pow - 1);
        } else {
            return val;
        }
    }

    // Проверка задания 8
    var userVal = +prompt("Проверка задания 8\nВведите число:");
    var userPow = +prompt("Введите степень: ");
    var res = power(userVal, userPow);
    alert(res);