export async function fetchWeather(city) {
    try {
        if (!city || typeof city !== "string") {
            throw new Error("City name is required");
        }

        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (city.toLowerCase() === "atlantis") {
                    reject(new Error("City not found"));
                } else {
                    resolve({
                        city,
                        temperature: Math.floor(Math.random() * 15) + 15, // Random temp between 15-30
                        condition: ["Sunny", "Cloudy", "Rainy"][Math.floor(Math.random() * 3)]
                    });
                }
            }, 1000);
        });
    } catch (error) {
        return `Error: ${error.message}`;
    } finally {
        console.log("fetchWeather function executed"); // Always runs
    }
}
const res = fetchWeather("Delhi")
console.log(res)//! async also return promise ==> run pending promise
// ? to run async code
fetchWeather("Delhi")
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
