
        // Возведение в степень (без использования встроенной функции Math.pow)
        function pow(x, n) {
            let result = 1;
            for (let i = 0; i < n; i++) {
                result *= x;
            }
            return result;
        }

        function calculatePow() {
            document.getElementById('pow- ').textContent = 'Пожалуйста, введите корректные значения для x и n.';
            const x = parseInt(document.getElementById('pow-x').value);
            const n = parseInt(document.getElementById('pow-n').value);

            // Проверка на пустые значения
            if (isNaN(x) || isNaN(n)) {
                document.getElementById('pow-result').textContent = 'Пожалуйста, введите корректные значения для x и n.';
                return;
            }

            if (n < 1) {
                document.getElementById('pow-result').textContent = 'n должно быть натуральным числом.';
                return;
            }

            const result = pow(x, n);
            document.getElementById('pow-result').textContent = result;
        }

        // Нахождение НОД (используя алгоритм Евклида)
        function gcd(a, b) {
            while (b != 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }

        function calculateGcd() {
            const a = parseInt(document.getElementById('gcd-a').value);
            const b = parseInt(document.getElementById('gcd-b').value);

            // Проверка на пустые значения
            if (isNaN(a) || isNaN(b)) {
                document.getElementById('gcd-result').textContent = 'Пожалуйста, введите корректные значения для a и b.';
                return;
            }

            const result = gcd(a, b);
            document.getElementById('gcd-result').textContent = {result};
        }

        // Нахождение наименьшей цифры в числе
        function minDigit(x) {
            let digits = x.toString().split('');
            let min = Math.min(...digits);
            return min;
        }
        function findMinDigit() {
            const x = parseInt(document.getElementById('minDigit-x').value);

            // Проверка на пустые значения
            if (isNaN(x)) {
                document.getElementById('minDigit-result').textContent = 'Пожалуйста, введите корректное значение для x.';
                return;
            }

            const result = minDigit(x);
            document.getElementById('minDigit-result').textContent = result;
        }

        // Функция множественного числа для слова "запись"
        function pluralizeRecords(n) {
            // Проверка на пустые значения
            if (isNaN(n)) {
                document.getElementById('pluralize-result').textContent = 'Пожалуйста, введите корректное значение для n.';
                return;
            }

            let form;
            if (n % 10 === 1 && n % 100 !== 11) {
                form = 'запись';
            } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
                form = 'записи';
            } else {
                form = 'записей';
            }

            document.getElementById('pluralize-result').textContent = "В результате выполнения запроса было найдено "+ String(n)+ " " +form;
        }
// обработчики событий для кнопок
function calculatePower() {
    print('fff')
    document.getElementById('pow-result').textContent = Результат;
}

// подключение обработчиков к кнопкам
document.getElementById('powb').addEventListener('click', calculatePower);
document.getElementById('gcdButton').addEventListener('click', calculateGCD);
document.getElementById('minDigitButton').addEventListener('click', findMinDigit);
document.getElementById('pluralizationButton').addEventListener('click', handlePluralizeRecords);
document.getElementById('fibonacciButton').addEventListener('click', findFibonacci);
print('a')