// props >> 
/*
    //** props are passed as argument there in other function we acess it in funciton define bracket
pass property from one component to other --> that componet will get acess to all pass props in its props object --> props.x or by object destruction direct extract 
? can we update porps 
yes , we had passed props to other componet it modify it by setX -- as it state it will get modify in parent also

? prop drill 
- props can pass from parent to child 
- to same   props to too many component ==> this term is called prop drill 

- it is good to avoid more than 1 level prop passing 

==> we should try to repalace it by useContext or redux => varible be global  
? is it not disadvantage every varible avaliable globally
it has more advangtage over disadvantage 
- global any one access 
- make visulization of state change easy like redux  
- easy to acess & modify state from any state 
- we should try to write optiomised code ==> to storing temp data we can useState , if passing of props just 1 level then pass by props , if to less & feature on a state then contextApi , if more than two case then redux  
//** example -> theme switcher /  auth task is login / cart - wishlist data etc  ===> these need in all the page so it can not be avoid 

*/