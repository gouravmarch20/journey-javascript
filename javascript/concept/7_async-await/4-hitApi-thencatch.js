async function hello() {
  const data = await fetch("https://api.github.com/users/gouravmarch20")

  const res = await data.json()
  return res
}

hello()
  .then((res) => console.log(res.login))
  .catch((err) => console.log(err))
