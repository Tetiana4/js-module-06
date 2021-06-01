// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
   return users.every(user => user.isActive === true);
};
// Пиши код выше этой строки
