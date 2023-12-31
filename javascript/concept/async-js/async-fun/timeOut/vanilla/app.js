const btn = document.getElementById('button-cancel')
const printName = name => {
  console.log(`welcome ${name}`)
}

const id = setTimeout(printName, 3000, 'gourav')
btn.addEventListener('click', () => {
  console.log('end of setTime out of id no -> ', id)

  clearTimeout(id)
})
