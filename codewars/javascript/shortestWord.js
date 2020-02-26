// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


const findShort = s => {
    const stringToSplit = s.split(' ');
    let shortestString = stringToSplit[0].length;
  
    stringToSplit.forEach( item => item.length <= shortestString ? shortestString = item.length : null)
    return shortestString;
  }