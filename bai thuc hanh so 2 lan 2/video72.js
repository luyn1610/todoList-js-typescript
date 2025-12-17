//lay du lieu api
const getApi = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();
    console.log(data);
    return data;
};

//cho du lieu api len man hinh
const handleAddBlog = async () => {
    data = await getApi();

    const body = document.querySelector("#blogs-body");
    data.forEach((blog) => {
        body.innerHTML += `
         <td>${blog.id}</td>
         <td>${blog.title}</td>
         <td>${blog.author}</td>
         <td>${blog.content}</td>
         <td><button>xoa</button></td>
      `;
    });
};
handleAddBlog();
//them du lieu vao api va man hinh
//xoa du lieu api va man hinh
