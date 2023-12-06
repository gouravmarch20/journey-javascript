const herData = {
  name: 'akan',
  city: 'banglore',
  displayState: function () {
    console.log(this.name, 'stays here ', this.city)
  }
}

const myData = { name: 'gourav', city: 'delhi' }
// ! write methrod borrowing syntax on yor owm
herData.displayState.call(myData)
