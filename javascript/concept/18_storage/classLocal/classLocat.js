class SecureStorage {
    static encrypt(data) {
      return btoa(JSON.stringify(data)); // Base64 encode
    }
  
    static decrypt(data) {
      return JSON.parse(atob(data)); // Base64 decode
    }
  
    static storeEncryptedData(key, value) {
      localStorage.setItem(key, this.encrypt(value));
    }
  
    static getDecryptedData(key) {
      const storedValue = localStorage.getItem(key);
      return storedValue ? this.decrypt(storedValue) : null;
    }
  }
  
  // Run functions
  const encryptedData = SecureStorage.encrypt({
    username: "testUser",
    token: "abc123",
  });
  console.log("Encrypted Data:", encryptedData);
  
  const decryptedData = SecureStorage.decrypt(encryptedData);
  console.log("Decrypted Data:", decryptedData);
  
  // Store data in localStorage
  SecureStorage.storeEncryptedData("user", { id: 1, role: "admin" });
  
  // Retrieve and decrypt stored data
  const storedData = SecureStorage.getDecryptedData("user");
  console.log("Retrieved Stored Data:", storedData);
  