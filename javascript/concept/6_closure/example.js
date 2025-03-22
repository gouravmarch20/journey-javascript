function createSecretKeeper() {
  let secret = "Our private date spot"; // Private variable

  return {
    revealSecret: function () {
      console.log(secret);
    },
    updateSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}

let secretKeeper = createSecretKeeper();
secretKeeper.revealSecret(); // Output: Our private date spot
secretKeeper.updateSecret("Our new favorite cafe");
secretKeeper.revealSecret(); // Output: Our new favorite cafe
