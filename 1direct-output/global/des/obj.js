const spookyItems = ['👻', '🎃', '🕸'];
({ a: spookyItems[3] } = { a: '💀' });

console.log(spookyItems);