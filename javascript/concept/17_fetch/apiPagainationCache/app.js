let currentPage = 1;
const postsPerPage = 10;

async function fetchPosts() {
    const cachedData = localStorage.getItem("posts");
    console.log("the chache" , cachedData)

    if (cachedData) {

        displayPosts(JSON.parse(cachedData), currentPage);
        return;
    }

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");

        const posts = await response.json();
        localStorage.setItem("posts", JSON.stringify(posts));
        displayPosts(posts, currentPage);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

function displayPosts(posts, page) {
    const postContainer = document.getElementById("postContainer");
    postContainer.innerHTML = "";

    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
     const paginatedPosts = posts.slice(startIndex, endIndex);
     console.log("naruto" , {startIndex , endIndex , paginatedPosts , posts})

    paginatedPosts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("post-item");
        div.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
        postContainer.appendChild(div);
    });

    document.getElementById("prevBtn").disabled = page === 1;
    document.getElementById("nextBtn").disabled = endIndex >= posts.length;
}

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        fetchPosts();
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentPage++;
    fetchPosts();
});

// Call function
fetchPosts();
