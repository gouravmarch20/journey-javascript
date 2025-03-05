let controller; // To store the AbortController instance

async function fetchTodo() {
    const todoContainer = document.getElementById("todoContainer");
    const errorMessage = document.getElementById("errorMessage");

    // If there's an ongoing request, abort it before making a new one
    if (controller) {
        controller.abort();
    }

    // Create a new AbortController
    controller = new AbortController();
    const signal = controller.signal;

    try {
        // Simulate an API delay of 1000ms
        await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                resolve({ title: "Sample Todo", completed: Math.random() > 0.5 });
            }, 2000);

            signal.addEventListener("abort", () => {
                clearTimeout(timeout);
                reject(new DOMException("Request aborted", "AbortError"));
            });
        }).then(displayTodo);
    } catch (error) {
        if (error.name === "AbortError") {
            errorMessage.textContent = "Request aborted by the user.";
        } else {
            errorMessage.textContent = error.message;
        }
        todoContainer.innerHTML = "";
    }
}

function cancelRequest() {
    if (controller) {
        controller.abort();
    }
}

function displayTodo(todo) {
    const todoContainer = document.getElementById("todoContainer");
    todoContainer.innerHTML = `
        <h3>${todo.title}</h3>
        <p>Completed: ${todo.completed ? "✅ Yes" : "❌ No"}</p>
    `;
}
