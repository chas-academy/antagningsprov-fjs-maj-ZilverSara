

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

    let people = [
        { name: "Anna", age: 33 },
        { name: "Simon", age: 12 },
        { name: "Samuel", age: 27 },
        { name: "Lisa", age: 49 },
        { name: "Berta", age: 67 }
    ];

    function over30(people) {
        for(person of people) {
            if(person.age > 30) {
                console.log(person.name, "är äldre än 30 år.");
            }
        }
    }

    over30(people);

}

module.exports = { uppg8 };