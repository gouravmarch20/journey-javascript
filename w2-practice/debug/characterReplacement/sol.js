function characterReplacement(s, k) {
    let n = s.length;
    let maxfreq = 0;
    let windLen = 0;
    let freq = new Map();
    // ^ less than k -> means -> windowL increase only if replace possible

    for (let i = 0; i < n; i++) {
      let c = s[i];
      freq.set(c, (freq.get(c) || 0) + 1);
      maxfreq = Math.max(maxfreq, freq.get(c));//? to knew max element in current
      //^ if windLen - maxFreq more than k --> means for current ==> max  repeating  Character Replacement possible done

      if (windLen - maxfreq < k) {
        windLen++;
      } else {
        // ? first char remove form window --> to adjust freq counter 
        let oldestChar = s[i - windLen];
        freq.set(oldestChar, freq.get(oldestChar) - 1);
      }
    }
  
    // console.log(windLen);
    return windLen;
  }
  
  // Test example
  let s = "ABAB";
  let k = 2;
  characterReplacement(s, k);
  