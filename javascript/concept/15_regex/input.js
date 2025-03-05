function validateInput(email, phone, password) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    return {
        email: emailRegex.test(email) ? "Valid" : "Invalid",
        phone: phoneRegex.test(phone) ? "Valid" : "Invalid",
        password: passwordRegex.test(password) ? "Valid" : "Invalid"
    };
}

// Function to test and log results
function runValidationTests() {
    const testCases = [
        { email: "test@example.com", phone: "9876543210", password: "Pass1234" },
        { email: "invalid-email", phone: "12345", password: "password" },
        { email: "hello@domain.co", phone: "1234567890", password: "Hello123" },
        { email: "user@site", phone: "abcdefghij", password: "TESTtest123" },
        { email: "person@web.com", phone: "0987654321", password: "weakpass" }
    ];

    testCases.forEach((test, index) => {
        console.log(`Test Case ${index + 1}:`, validateInput(test.email, test.phone, test.password));
    });
}

// Run the function to log results
runValidationTests();
