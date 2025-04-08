function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Mail has arrived");
    } else {
      reject(new Error("Failed to arrive"));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log("mail", mail);
    return 1;
  }).finally(() => {
    console.log("Experiment completed");
  }).then((mail) => {
    console.log(mail);
  }).catch((err) => {
    console.error(err);
  });
