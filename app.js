let car = {
    make: "Toyota",
    model: "Supra",
    color: "Red",
    mileage: 237,
    previousOwner: ["Mark","Tim","John"],
    modifications: {
        mod1: "wheels",
        mod2: "Lowering",
        mod3: "speakers"
    },
    driveToWork: () => {
        alert(`Old Mileage is ${car.mileage}`);
        car.mileage = car.mileage + 30;
        console.log(`You drove to work, your new mileage is ${car.mileage}`);
    },
    driveAroundWorld: () => {
        alert(`Old Mileage ${car.mileage}`);
        car.mileage = + 27000;
        console.log(`You dorve around the world, your new mileage is ${car.mileage}`);

    }
}

document.onkeyup = function(event){
    userInput = event.key.toLocaleLowerCase();
    if(userInput === 'w'){
        car.driveToWork();
    }
    
    else if(userInput === 'e'){
        car.driveAroundWorld()
    }
}

// console.log(car.previousOwner[1]);

// different kind of object //

// let person1 = {
//     firstName: 'daniel',
//     lastName: 'escamilla',
//     age: '23',
//     eyeColor: 'brown'
// };

// let persone2 = new Object();

// persone2.firstName = 'Dylan';
// persone2.lastName = 'Trimble';
// persone2.age = '21';
// persone2.eyeColor = 'black'

// console.log(persone2.firstName)

// person1.job = 'Instructor';

// console.log(person1.job);

// let r2HGrad = {
//     name: "Daniel Escamilla",
//     highSchool: "Thomasville High",
//     skills: ["Math","Reading","Social Studies","Science"]
// }

// console.log(r2HGrad)
// console.log(r2HGrad.skills)


// console.log(Object.keys(car.modifications))