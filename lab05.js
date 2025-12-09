let tableBody = document.querySelector("tbody");
// fetch("http://localhost:8000/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
let datas = {};
const fetchData = async (datas) => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  const print = await data.forEach((user) => {
    tableBody.innerHTML += `
     <tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
           </tr>
    `;
  });
};
console.log(datas);

fetchData();

console.log(tableBody);
