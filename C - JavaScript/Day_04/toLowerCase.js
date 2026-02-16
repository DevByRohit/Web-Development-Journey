let str = "A B";

function toLowerCase(string) {
  console.log(string.length);
  let lowerCaseResult = "";

  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) {
      lowerCaseResult += String.fromCharCode(element.charCodeAt(0) + 32);
    } else {
      lowerCaseResult += String.fromCharCode(element.charCodeAt(0));
    }
  }
  return lowerCaseResult;
}

let finalResult = toLowerCase(str);
console.log("To Lower Case String:", finalResult);

// A: 65 to Z: 90
// a: 97 to z: 122
