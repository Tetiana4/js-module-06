// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// Пиши код ниже этой строки
const calculateTotalBalance = users => {
   const allBalance = users.reduce((total, user) => {
   return total = total + user.balance; 
   }, 0); 
   return allBalance;
} 
// Пиши код выше этой строки