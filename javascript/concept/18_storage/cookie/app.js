class CookieManager {
    static setCookie(name, value, days) {
        const expires = new Date();
        expires.setDate(expires.getDate() + days);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    static getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === name) return value;
        }
        return null;
    }

    static deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
}

// **Test the CookieManager**
// Set a cookie
CookieManager.setCookie("user", "JohnDoe", 7);
console.log("Cookie Set: user=JohnDoe");

// Get the cookie value
const userCookie = CookieManager.getCookie("user");
console.log("Retrieved Cookie:", userCookie);

// Delete the cookie
CookieManager.deleteCookie("user");
console.log("Cookie Deleted:", CookieManager.getCookie("user"));
