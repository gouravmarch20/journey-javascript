async function hello() {
  try {
    //? fetch not directly contain the actual response it representation of the entire HTTP response. ,  fetch return promise so to handle await
    const data = await fetch("https://api.github.com/users/gouravmarch20")
    // console.log(data);
    //? to extract the JSON body content from the Response object, we use json()
    //^ json() too return promise so await to handle
    const res = await data.json()
    console.log(res.login)
  } catch (error) {
    console.log(error);
  }
}

hello()
