// Given the following input array:

// var list1 = [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];
// write a function that adds the username property to each object in the input array:

// [
//     {
//         firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//         username: 'emilyn1990'
//     },
//     {
//         firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//         username: 'nore2000'
//     }
// ]


const addUsername = list => {
    const currentYear = new Date().getFullYear();

    list.map(element => {
        const yearOfBirth = currentYear - element.age;
        element.username = (element.firstName + element.lastName.charAt(0) + yearOfBirth).toLowerCase();
    })

    return list
}