// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  const allFriends = users.reduce((total, user) => {
    return total = total + user.friends. length;
  }, 0);
 return allFriends;
}
// Пиши код выше этой строки