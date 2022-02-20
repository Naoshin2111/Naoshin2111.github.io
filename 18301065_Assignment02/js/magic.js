let textDocument = document.querySelector("#txt-input");
let textArray = textDocument.value.split('\n');

let blank = () => {
  textDocument.value = '';
}

let capitalize = () => {
    textDocument.value = textDocument.value.toUpperCase();
}

let sorting = () => {
    let textArray = textDocument.value.split('\n');
    textArray.sort();
    textDocument.value =  `${textArray.join("\n")}`;
}

let reverse = () => {
    let textArray = textDocument.value.split('\n');
    textArray.reverse();
    textDocument.value = `${textArray.join("\n")}`;
}

let strip = () => {
    let textArray = textDocument.value.split('\n');
    textArray = textArray.filter(text => text!== '').map(number => number.trim());
    textDocument.value = `${textArray.join("\n")}`;
}

let addNumbers = () => {
    let textArray = textDocument.value.split('\n');
    textArray = textArray.map((number,index) => `${index}. ${textArray[index]}`);
    textDocument.value = `${textArray.join("\n")}`;
}

let shuffleArray =(array) => {
    return array.sort( ()=>Math.random()-0.5 );
 }

let shuffle = () => {
    let textArray = textDocument.value.split('\n');
    textArray = shuffleArray(textArray);
    textDocument.value = `${textArray.join("\n")}`;
}