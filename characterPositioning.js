function countLetters (str) {
  var rep = str.replace(/ /g, '');
  var splitStrArr = rep.split('');
  var strObj = {};
  for (var i = 0; i < splitStrArr.length; i++) {
    if (strObj.hasOwnProperty(splitStrArr[i]) === false) {
      strObj[splitStrArr[i]] = [i];
      } else {
        strObj[splitStrArr[i]].push(i);
   } 
  }
  return strObj;
}

console.log(countLetters("lighthouse labs in the house"));