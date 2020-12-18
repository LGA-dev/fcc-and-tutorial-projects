let romanNumeralResult = document.querySelector("#roman-numeral-result");

function convertToRoman(passedNumber) {
  let numberInput = passedNumber;
  let romans             = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let romansEquivalent   = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let newArray           = [];

  for(var i = 0; i <= romansEquivalent.length; i++) {
    if(passedNumber >= romansEquivalent[i]) {
      newArray.push(romans[i]);
      var passedNumber = passedNumber - romansEquivalent[i];
      i--; // Reset
    }
  }

  let romanEquivalentResult = newArray.join("");
  romanNumeralResult.innerHTML = numberInput + " would be equal to " + romanEquivalentResult + " in roman numerals."
}