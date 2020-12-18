let decipheredMessageResult = document.querySelector("#deciphered-message-result");

function rot13(str) {
  let latinAlphabeth1         = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
  let latinAlphabeth2         = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let nonAlphabeticCharacters = [" ","!","?","."];
  let stringArray             = [...str];
  let decipheredMessage       = [];

  for(var i = 0; i < stringArray.length; i++) {
    for (var j = 0; j < latinAlphabeth1.length; j++) {
      if(stringArray[i] == latinAlphabeth1[j]){
        console.log(stringArray[i] + " is equal to " + latinAlphabeth2[j]);
        console.log("Pushing " + latinAlphabeth2[j] + " to " + decipheredMessage);
        decipheredMessage.push(latinAlphabeth2[j]);
        console.log(decipheredMessage);
      }
      if(stringArray[i] == latinAlphabeth2[j]){
        console.log(stringArray[i] + " is equal to " + latinAlphabeth1[j]);
        console.log("Pushing " + latinAlphabeth1[j] + " to " + decipheredMessage);
        decipheredMessage.push(latinAlphabeth1[j]);
        console.log(decipheredMessage);
      }
      if(stringArray[i] == nonAlphabeticCharacters[j]){
        console.log(stringArray[i] + " is equal to " + nonAlphabeticCharacters[j]);
        decipheredMessage.push(nonAlphabeticCharacters[j]);
        console.log(decipheredMessage);
      }
    }
  }
  decipheredMessageResult.innerHTML = decipheredMessage.join("");
}

// rot13("SERR PBQR PNZC");