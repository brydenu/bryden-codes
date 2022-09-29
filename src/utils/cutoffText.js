export function cutoffText(str, length, options={"ellipses": true}) {
  let returnStr;

  if (str[length] === " ") {
    returnStr = str.substring(0, length);
  } else {
    let idx = length;
    while (str[idx] !== " ") {
      idx--;
    } 
    returnStr = str.substring(0, idx);
  }
  if (options.ellipses) {
    return returnStr + "...";
  }
  return returnStr;
}