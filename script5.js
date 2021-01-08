var countrys = {
    country1: {
        name: "Германия",
        language: "немецкий",
        capital:{
     
            name: "Берлин",
            population: 3375000,
            year: 1237
        }
    },
    country2: {
        name: "Австрия",
        language: "немецкий",
        capital:{
     
            name: "Вена",
            population: 1897000,
            year: 881
        }
    }
};


function getProperty(objName, srchArray) {
    
    if (srchArray.length != 1) {
        if (objName.hasOwnProperty(srchArray[0])) {
            let newObject = objName[srchArray[0]];           
            srchArray.shift(0);
            getProperty(newObject,srchArray);
        } else {
            console.log(undefined);
        }
    } else {
        console.log(objName[srchArray[0]]);
    }
    
}

getProperty(countrys, 'country1.capital.population'.split('.'));
getProperty(countrys, 'country3.capital.population'.split('.'));