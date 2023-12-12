const posts = [
  { name: 'gourav', createAt: new Date('May 14 2022') },
  { name: 'gitman', createAt: new Date('May 18 2022') },
  { name: 'javascript', createAt: new Date('May 11 2022') },
  { name: 'oldest', createAt: new Date('May 11 2021') },
  { name: 'newest', createAt: new Date('May 11 2023') }
]
const latestPosts = posts.sort((date1, date2) => {
  return date1.createAt - date2.createAt
})
console.log(latestPosts)
