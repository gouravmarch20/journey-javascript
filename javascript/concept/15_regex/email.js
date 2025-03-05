function runEmailExtractor(text) {
    // Sample input string
 
    // Function to validate and extract emails
    function validateAndExtractEmails(text) {
        try {
            if (typeof text !== "string") {
                throw new Error("Input must be a string");
            }

            const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/g;
            const emails = text.match(emailRegex) || [];
            return emails;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }

    // Run function and display result
    const result = validateAndExtractEmails(text);
    console.log("Extracted Emails:", result);
}

// Call the function
const text = "Contact us at support@example.com or sales@company.org for more info.";

runEmailExtractor(text);
