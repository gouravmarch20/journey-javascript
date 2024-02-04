function characterReplacement(s, k) {
  let n = s.length 
  let r = 0
  let l = 0
  let windowL = 0
  let myMap = new Map()
    while (r < n) {
        const currCh = s[r]
        myMap.set(currCh, (myMap.get(currCh) || 0) + 1);

        if((windowL - myMap[currCh] || 0) < k){

            windowL++;
        }else{

            let oldestChar = s[r - l];

            myMap.set(currCh , myMap.get(currCh)  - 1)
            l++;
        }
        r++;
    }
  
    console.log(windowL);
    // return windLen;
  }
  
  // Test example
  let s = "AABABBAB";
  let k = 2;
  characterReplacement(s, k);
  