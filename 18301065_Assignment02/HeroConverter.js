//#id="txt-result"

let convertKGtoLB = value =>{
    return (value*2.2046).toPrecision(5);
}

let convertLBtoKG = value =>{
    return (value/2.2046).toPrecision(5);
}



let convert = () => {

    let pickedDocument = document.querySelector("#txt-val");
    let resultDocument = document.querySelector("#txt-result");
    let conversionTypeDocument = document.querySelector("#selectConversion");
    let value = pickedDocument.value;
    let conversionType = conversionTypeDocument.value;
    if(conversionType == 0){
        let convertedValue = `${convertKGtoLB(value)} pounds`;
        resultDocument.innerHTML = convertedValue;
    }

    else if(conversionType == 1){
        let convertedValue = `${convertLBtoKG(value)} kilograms`;
        resultDocument.innerHTML = convertedValue;

    }
}