const btn = document.getElementById('button-cancel')
const printName = name => {
  console.log(`welcome ${name} `)
}

const id = setInterval(printName, 1000, 'gourav')
btn.addEventListener('click', () => {
  console.log('end of setTime interval who having  id no -> ', id)

  clearInterval(id)
})
