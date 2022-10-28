const count = (data) => {
    return data.map((country) => {
        country.people.map((person) => {
            person.name = `${person.name} [${person.animals.length}]`
            return person
        })
        country.name = `${country.name} [${country.people.length}]`
        return country
    })
}

module.exports = {
    count
}