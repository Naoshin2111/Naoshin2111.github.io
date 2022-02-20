let makeArray = () => {
    let userInput = document.querySelector("#txt-input").value;
    let numberArray = userInput.split(",");
    return numberArray;
}


let max = (array) =>{
    let maxNumber = Math.max(...array);
    return maxNumber;
}

let min = (array) =>{
    let maxNumber = Math.min(...array);
    return maxNumber;
}

let sum = (array) =>{
    let sumofArray = array.reduce(
      (num1,num2) => parseInt(num1) + parseInt(num2));
      return sumofArray;
    }

let average = (array) =>{
    let avg = sum(array)/ array.length;
    return avg;
}

let reverse = (array) => array.reverse();

let inputs = () => {
    let num = makeArray();
    let minDocument = document.querySelector("#txt-min");
    let maxDocument = document.querySelector("#txt-max");
    let sumDocument = document.querySelector("#txt-sum");
    let avgDocument = document.querySelector("#txt-avg");
    let reverseDocument = document.querySelector("#txt-reverse");


    minDocument.innerText = `${min(num)}`;
    maxDocument.innerText = `${max(num)}`;
    sumDocument.innerText = `${sum(num)}`;
    avgDocument.innerText = `${average(num)}`;
    reverseDocument.innerText =  `${reverse(num)}`;
}