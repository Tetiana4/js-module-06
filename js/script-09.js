// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
// значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers,
// а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const newEven = [];
    numbers.forEach(number => {
      if (number % 2 === 0) {
        number = number + value;
      }
      newEven.push(number)
    });
  return newEven;
    // Пиши код выше этой строки
  }

