module.exports = 
function check(str, bracketsConfig) {
  // your solution

  let arr = Array.from(str);
    let result = [];


    for( let i = 0; i < arr.length; i++) {
      if(arr[i] === '(') {
        result.push('(')
      } else if (arr[i] === ')'&& result.length > 0 &&  result[result.length-1] === '(') {
        result.pop();
      } else if (arr[i] === '[') {
        result.push('[')
      } else if (arr[i] === ']' && result.length > 0 &&  result[result.length-1] === '[') {
        result.pop();
      } else if (arr[i] === '{') {
        result.push('{')
      } else if (arr[i] === '}' && result.length > 0 &&  result[result.length-1] === '{') {
        result.pop();
      } else if (arr[i] === '|' && !result.includes(arr[i]) || result.length == 0) {
        result.push('|')
      } else if(arr[i] === '|' && result.length > 0 &&  result[result.length-1] === '|') {
        result.pop();}
      }
 
      
      
      if(result.length === 0 ) {
        return true
      } else {  return false
       }


    }