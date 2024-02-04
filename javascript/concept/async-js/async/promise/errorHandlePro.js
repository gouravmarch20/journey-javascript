const p = new Promise((res, rej) => {
    console.log(s);
    //   console.log(res)
    throw new Error("error")
  })
  try {
    p.then(ftw).catch(wtf)
  } catch (error) {
    console.log(error)
  }
  function ftw(e) {
    console.log("ftw ", e)
  }
  function wtf(e) {
    if (typeof e == "object") {
      console.log(" with reject ", e.message)
    } else {
      console.log("ftw ", e)
    }
  }
  