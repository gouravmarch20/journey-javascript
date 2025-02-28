const mockApi = [
  { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
  { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
  { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
];

async function fetchUserData(userId, api = mockApi) {
  try {
    const user = api.find((user) => user.id == userId);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!user) {
      throw new Error("User not found. Please check the userId.");
    }
    if (!user.name || !user.email) {
      throw new Error("Invalid user data");
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserDetails(userId, api = mockApi) {
  try {
    const user = await fetchUserData(userId, api);
    console.log(`User fetched sucessfully: ${user.name}, ${user.email}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}


getUserDetails(4 ,mockApi )