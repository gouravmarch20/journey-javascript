let lunch = {
	sandwich: 'turkey',
	chips: 'cape cod',
	drink: 'soda'
};
for (const key in lunch) {
    console.log(key ,"--", lunch[key]);
}