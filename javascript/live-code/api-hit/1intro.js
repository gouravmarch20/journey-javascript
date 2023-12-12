// mainly we get promise in real world 
//?  fetch return promise we just require to handle the promise by .then .catch .finally

// fetch vs axios 
/*
-fetch 
 - part of js window oject 
 - allow to fetch data from api in async way 
 - return promise we handle by .then .catch
 
 fetch(url , {
     methord : post,
     headers:{},
     body : 
 }).then((res) => res.json()).catch()

*/ 
/*
axios 
 - js library for making http request 
 - error handling easy 
 - to track progress ==> how much download 
 - interception : buildin ---> axios.interceptor. --> due this before sending 

 axios.get(url).then.catch or async await 
? auto stringify response -> no need res.json()


*/ 