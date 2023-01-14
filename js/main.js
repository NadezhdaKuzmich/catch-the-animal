'use strict';
// 1. try.. catch.. in function :
function findAnimal(index) {
    const animals = [
        'їжак',
        'куниця',
        'ведмідь',
        'горностай',
        'козуля',
        'вовк',
        'лисиця',
        'заєць'
    ];
    const element =  animals[index];

    try {
        if (typeof element == 'undefined') {
            throw new TypeError("Ви ввели невірний індекс, який посилається на невизначене значення.");
        }
        console.log(`Назва тварини, яку ви обрали - ${element}.`);
    } catch (error) {
        console.error(`${error.name}: ${error.message} Спробуйте ще раз.`);
    }
}

findAnimal(0);
findAnimal();
findAnimal(6);

// 2. Another way :
function findAnimalAnotherWay(index) {
    const animals = [
        'їжак',
        'куниця',
        'ведмідь',
        'горностай',
        'козуля',
        'вовк',
        'лисиця',
        'заєць'
    ];

    if(typeof animals[index] !== 'undefined') {
        return animals[index];
    }

    throw new TypeError("Ви ввели невірний індекс, який посилається на невизначене значення.");
}

try {
    let element = findAnimalAnotherWay(12);
    console.log(`Назва тварини, яку ви обрали - ${element}.`);
} catch (error) {
    console.error(`${error.name}: ${error.message} Спробуйте ще раз.`);
}