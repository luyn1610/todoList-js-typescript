//lay thong tin blog tu api
const getApi = async () => {
    try {
        const res = await fetch(
            "http://localhost:8000/blogs"
        );
        if (!res.ok)
            throw new Error("Failed to fetch blogs");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching API:", error);
        return [];
    }
};

//dua thong tin tu api len man hinh
const handleTableBlog = async () => {
    const data = await getApi();
    const tableData = document.querySelector("#blogs-body");
    let blogHtml = "";

    data.forEach((blog) => {
        blogHtml += `
        <tr id="${blog.id}">
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.content}</td>
            <td><button class="delete-btn" data-id="${blog.id}">Xóa</button></td>
        </tr>
        `;
    });
    tableData.innerHTML = blogHtml;

    // Thêm sự kiện xóa cho các nút mới tạo
    const deleteButtons =
        document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            const id = e.target.getAttribute("data-id");
            await handleDeleteBlog(id);
        });
    });
};

//dua thong tin tu o input len api
const handleInputBlog = () => {
    const titleInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const contentInput = document.querySelector("#content");
    const saveBtn = document.querySelector("#saveBlog");

    saveBtn.addEventListener("click", async () => {
        const newBlog = {
            title: titleInput.value,
            author: authorInput.value,
            content: contentInput.value,
        };

        if (
            !newBlog.title ||
            !newBlog.author ||
            !newBlog.content
        ) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        await fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBlog),
        });

        // Reset form và load lại bảng
        titleInput.value = "";
        authorInput.value = "";
        contentInput.value = "";
        await handleTableBlog();
    });
};

// Xóa blog
const handleDeleteBlog = async (id) => {
    await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
    });
    await handleTableBlog(); // Load lại bảng sau khi xóa
};

handleTableBlog();
handleInputBlog();
