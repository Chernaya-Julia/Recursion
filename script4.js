var myAnimals = {
    dogs: [
        {name: "Peppy",
         age: 2,
         weight: 5
        },
        {name: "Jersy",
         age: 1,
         weight: 3 
        }
    ],
    cats: [
        {name: "Marta",
         age: 4,
         weight: 5
        },
        {name: "Irma",
        age: 3,
        weight: 3
       }
    ]   
}

function createNewObject(inputObject) {
    var newObj = new Object();
for (var key in inputObject) {
        if (typeof (inputObject[key]) == "object" && inputObject[key] != null) {
            newObj[key] = createNewObject(inputObject[key]);
        } else {
            newObj[key] = inputObject[key];
        }
    }
    return newObj;
}

console.log(createNewObject(myAnimals));