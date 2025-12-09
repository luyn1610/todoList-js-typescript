console.log("video 70");
//tạo bảng todo
const bodyTable = document.querySelector("tbody");
//lay thong tin tu local storage
const todo = localStorage.getItem("todo");
console.log(todo);
//lap qua tung phan tu trong to do
const todoLists = JSON.parse(todo);
console.log(todoLists);
todoLists.forEach((todo, index) => {
    bodyTable.innerHTML += `
   <td>${todo.id}</td>
   <td>${todo.name}</td>
   <td><button>xoa</button></td>
   `;
});
//them inner html vao table
