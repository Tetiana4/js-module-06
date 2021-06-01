// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
  return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
  
};
// Пиши код выше этой строки