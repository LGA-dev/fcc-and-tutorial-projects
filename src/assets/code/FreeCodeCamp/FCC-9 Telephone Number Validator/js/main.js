let telephoneValidationResult = document.querySelector("#telephone-validation-result");

// I made this function because I wasn't able to find the correct RegEx to check if there was only one parentheses
// So this will check how many parentheses are in the passed string and will only return true if they are only 2 (line 32)

// Total parentheses counter
let parenthesesCounter = 0

function parenthesesCheck(str){
  let rightParentheses = str.indexOf(')');
  let leftParentheses  = str.indexOf('(');

  while (rightParentheses !== -1) {
    parenthesesCounter++
    rightParentheses = str.indexOf(')', rightParentheses + 1)
  }

  while (leftParentheses !== -1) {
    parenthesesCounter++
    leftParentheses = str.indexOf('(', leftParentheses + 1)
  }

  console.log("Total parentheses " + parenthesesCounter);
  return parenthesesCheck;
}


function telephoneCheck(str) {
  // Return value from parentheses check function
  parenthesesCheck(str);
  // This will check if the string matches the regex
  let testString = (/^1? ?[\+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/).test(str);

  if(testString == true && parenthesesCounter >= 2) {
    telephoneValidationResult.innerHTML = str + " it's a valid telephone number!"
    console.log("It's true and it has 2 parentheses");
    return true;
  }

  else if(testString == true && parenthesesCounter == 1) {
    telephoneValidationResult.innerHTML = str + " isn't a valid telephone number!"
    console.log("It's true and it only has 1 parentheses");
    return false;
  }
  
  else if(testString == true) {
    telephoneValidationResult.innerHTML = str + " it's a valid telephone number!"
    console.log("It's true");
    return true;
  }
  else {
    telephoneValidationResult.innerHTML = str + " isn't a valid telephone number!"
    console.log("It's false");
    return false;
  }
}