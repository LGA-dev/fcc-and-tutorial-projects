let palindromeResult = document.querySelector("#palindrome-result");

function checkPalindrome(str) {
  // Create a new string and remove all non-alphanumeric characters
  let newString = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  // Create a new string and apply the split, reverse and join methods
  let reversedString = newString.split('').reverse().join('');

  // Check if both strings are equal
  if (newString == reversedString) {
    console.log("It's a palindrome!");
    palindromeResult.innerHTML = newString + " it's a palindrome";
    return true;
  }
  else {
    console.log("Isn't a palindrome!");
    palindromeResult.innerHTML = newString + " isn't a palindrome";
    return false;
  }
}
