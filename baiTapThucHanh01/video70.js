//
const saveBtn = document.getElementById("btnSave");
const inputTodo = document.getElementById("name");
let todoListBody = document.getElementById("todoList-body");
console.log("video 70");
//save todo and move to todo list page
if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const currentTodoStr = localStorage.getItem("todo");
        //nhiem vu moi
        const myTodo = {
            id: Math.floor(Math.random() * 1000),
            name: inputTodo.value,
        };
        console.log("test");

        // da ton tai truoc day
        if (currentTodoStr) {
            //convert from string to object
            const currentTodo = JSON.parse(currentTodoStr);
            //push them todo
            currentTodo.push(myTodo);
            //luu todo vao local storage
            localStorage.setItem(
                "todo",
                JSON.stringify(currentTodo)
            );
        } else {
            localStorage.setItem(
                "todo",
                JSON.stringify([myTodo])
            );
        }

        window.location.href = "video70.html";
    });
}
const generateTodoTable = () => {
    const todoListStr = localStorage.getItem("todo");
    if (todoListStr) {
        const todoLists = JSON.parse(todoListStr);
        todoLists.forEach((todoList) => {
            todoListBody.innerHTML += `
            <tr>
              <td>${todoList.id}</td>
              <td>${todoList.name}</td>
              <td><button data-id="${todoList.id}" class="btn-delete">xoa</button></td>
           </tr>
      `;
        });
    }
};
generateTodoTable();

const deleteBtns = document.querySelectorAll(".btn-delete");

if (deleteBtns) {
    deleteBtns.forEach((deleteBtn, index) => {
        deleteBtn.addEventListener("click", () => {
            const id = deleteBtn.getAttribute("data-id");
            handleDeleteTodo(id);
        });
    });
}
//ham xoa
const handleDeleteTodo = (id) => {
    const todoListStr = localStorage.getItem("todo");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);
        const newTodo = todoList.filter((todo, index) => {
            todo.id + "" !== id;
        });
        localStorage.setItem(
            "todo",
            JSON.stringify(newTodo)
        );
    }
    window.location.reload();
};
