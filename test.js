function timeSpanToString(startDate, endDate) {
  // Преобразуем строки в объекты Date
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Вычисляем разницу во времени в миллисекундах
  const diff = end - start;

  // Преобразуем разницу в миллисекундах в часы, минуты, секунды и миллисекунды
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const milliseconds = diff % 1000;

  // Форматируем строку вывода
  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

console.log(timeSpanToString('2000-01-01T10:00:00', '2000-01-01T15:20:10.453'));
