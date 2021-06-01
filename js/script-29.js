// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
// Пиши код ниже этой строки
const isAnyUserActive = users => {
  return users.some(user => user.isActive === true)
};
// Пиши код выше этой строки