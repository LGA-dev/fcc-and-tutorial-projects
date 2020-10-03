const boxNumber = document.querySelectorAll('.number-box');

function getMultiple(e) {
    const buttonNumber = e.getAttribute('value');

    for (i = 0; i < boxNumber.length; ++i) {
        
        if (boxNumber[i].value % buttonNumber == 0) {
            boxNumber[i].classList.remove("bg-dark");
            boxNumber[i].classList.add("bg-success");
        } else {
            // This prevents current matching numbers from overlapping with previous ones.
            boxNumber[i].classList.add("bg-dark");
        }
    }
}
