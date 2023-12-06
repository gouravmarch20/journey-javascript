// 2. Consider the following code. What is the correct way to add this text "This is a new paragraph." to the paragraph element?

const para = document.createElement('p')
const node = document.createTextNode('This is a new paragraph.')

para.appendChild(node)
