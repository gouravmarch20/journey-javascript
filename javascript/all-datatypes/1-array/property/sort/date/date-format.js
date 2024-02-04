const posts = [
  { name: 'gourav', createAt: new Date('2022-05-20') },
  { name: 'gitman', createAt: new Date('1999-04-20') },
  { name: 'newest', createAt: new Date('2050-11-22') },
  { name: 'oldest', createAt: new Date('1964-10-22') }
]
const latestPosts = posts.sort((date1, date2) => {
  return date1.createAt - date2.createAt
})
console.log(latestPosts)
