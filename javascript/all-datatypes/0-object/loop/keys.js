let lunch = {
	sandwich: 'turkey',
	chips: 'cape cod',
	drink: 'soda'
};

console.log( Object.keys(lunch));
for (const key of Object.keys(lunch)) {
    console.log(key ,"--", lunch[key]);
}