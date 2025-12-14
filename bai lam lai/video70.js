console.log("video 70");
//tạo bảng todo
const bodyTable = document.querySelector("tbody");
//lay thong tin tu local storage
const todo = localStorage.getItem("todo");
console.log(todo);
//lap qua tung phan tu trong to do
const todoLists = JSON.parse(todo);
//them inner html vao table
todoLists.forEach((todo, index) => {
    bodyTable.innerHTML += `
   <td>${todo.id}</td>
   <td>${todo.name}</td>
   <td><button data-id="${todo.id}" class = "delete-btn">xoa</button></td>
   `;
});
//thao tac khi an nut xoa
const deleteBtns = document.querySelectorAll(".delete-btn");
deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
        deleteBtn;
        //LAY ID CUA PHAN TU CAN XOA
        const id = deleteBtn.getAttribute("data-id");
        //loc ra phan tu can xoa
        const newTodoLists = todoLists.filter((todo) => {
            return todo.id + "" !== id;
        });

        //cap nhat lai local storage
        localStorage.setItem(
            "todo",
            JSON.stringify(newTodoLists)
        );
        //tai lai trang de cap nhat lai giao dien
        location.reload();
    });
});
