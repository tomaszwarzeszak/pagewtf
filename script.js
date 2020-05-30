const firstName = "Tomek";
const age = 25;
const lastName = "Warzeszak";

console.log(`Cześć moje imię to ${firstName} nazwisko ${lastName} mam ${age} lat. 
Witam Cię na mojej stonie internetowej mam nadzieję, że będzie Ci tutaj dobrze. `);


/*praca domowa tydzień 4 */
const header = document.querySelector('.additives-js');
header.innerHTML = "Dodatki";
console.log(header);

/*praca domowa tydzień 5 */
function hallo (firstName, lastName, age){
    console.log(`Witaj ! Jestem ${firstName} ${lastName} i mam lat ${age}. Wywołałem Cię za pomocą funkcji.`);
    return firstName + " " + lastName + " " + 'lat' + " " + age;
}

const Hallo = hallo(firstName, lastName, age);
console.log(Hallo);



const halloTwo = (firstName,lastName,age) => {
    console.log(`Witaj ! Jestem ${firstName} ${lastName} i mam lat ${age}. Wywołałem Cię za pomocą arrow function.`);
}

halloTwo(firstName, lastName, age);


     /*obiekt*/

const myName = {
    halloThree: (firstName,lastName,age) =>{
        console.log(`Witaj ! Jestem ${firstName} ${lastName} i mam lat ${age}. Wywołałem Cię za pomocą obiektu.`);
    },
    name: 'Jan',
    age: 18,

    child: {
        name: 'Krzysztof',
        age: 10,
    }
}

myName.halloThree(firstName, lastName, age);
console.log(myName.child.name);
console.log(myName.child.age);