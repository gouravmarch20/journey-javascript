function processContacts(contacts, tags) {
    for( let [name , phoneNumber ] of contacts){
      console.log(`${name}: ${phoneNumber}` )
    }
    const sortedTags = [...tags].sort();
    for (const val of sortedTags) {
      console.log(`${val}`);
    }
  }
  
  module.exports = processContacts;