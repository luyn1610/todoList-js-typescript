console.log("video72");
const blogBody = document.querySelector("#blogs-body");
const fetchBlog = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();
    console.log("blog data:", data);
    if (data && data.length > 0) {
        data.forEach((blog) => {
            blogBody.innerHTML += `
            <tr>
            
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.content}</td>
            <td><button>xoa</button></td>
            </tr>
            `;
        });
    }
};
const handleAddNewBlog = async () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");

    const content = document.querySelector("#content");
    const saveBlogBtn = document.querySelector("#saveBlog");
    saveBlogBtn.onclick = async () => {
        console.log(
            "title:",
            title.value,
            "author:",
            author.value,
            "content:",
            content.value
        );
    };
    //call api to create a new blog

    const res = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title.value,
            author: author.value,
            content: content.value,
        }),
    });
    const data = await res.json();
    console.log("phan hoi api:", data);
};
fetchBlog();
handleAddNewBlog();
//
