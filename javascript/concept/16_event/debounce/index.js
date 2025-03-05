const users = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"];

function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}

function searchUsers(query) {
    const filteredUsers = users.filter(user => user.toLowerCase().includes(query.toLowerCase()));
    displayResults(filteredUsers);
}

function displayResults(results) {
    const resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = "";
    results.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        resultsList.appendChild(li);
    });
}

function setupSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", debounce(function () {
        searchUsers(searchInput.value);
    }, 300));
}

// Call function
setupSearch();
