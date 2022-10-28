
// This function check if the argument is an array and if the array is empty
function isEmpty(arr) {
    return (Array.isArray(arr) && arr.length)
}

// This function filters out every animal that does not match the string pattern
function findPersonsWithAnimalContainingPattern(persons, pattern){
    // We transform the string in lower case to ensure case insensitivity is applied
    pattern = pattern.toLowerCase();
    listPerson = []
    persons.forEach(person => {
        person.animals=person.animals.filter((animal) =>animal.name.toLowerCase().includes(pattern));
        if(isEmpty(person.animals)){
            listPerson.push(person);
        }
    })
    return listPerson;
}

const filter = (data, searchedStr) => {
    const newList = data.filter(q => {
        q.people = findPersonsWithAnimalContainingPattern(q.people, searchedStr)
        /*q.people.filter(p => {
            p.animals = p.animals.filter((animal) =>animal.name.includes(searchedStr))
            // We filter people without animals
            return isEmpty(p.animals)
        })*/

        // We filter countries without people
        return (isEmpty(q.people))
    });
    return newList;
}

module.exports = {
    filter
}