const {filter} = require('./src/utils/filter');
const {count} = require('./src/utils/count')
const data = require('./data');

'use strict'

const args = process.argv

// USAGE: node app.js --filter=[PATTERN] OR node app.js filter=[PATTERN]
// USAGE: node app.js --count OR node app.js count
populationByCountry = data;
mustCount=false;
if(args.length<3){
    throw 'Usage: node app.js [--filter=[PATTERN]] [filter=[pattern]] [--count] [count]'
}
args.slice(2).forEach(cmd => {
    if(cmd.startsWith("--filter=") || cmd.startsWith("filter=")){
        populationByCountry= filter(populationByCountry, cmd.slice(7 + cmd.indexOf("filter")))
    } else if(cmd.startsWith("--count") || cmd.startsWith("count")){
        mustCount=true;
    } else {
        throw 'Usage: node app.js [--filter=[PATTERN]] [filter=[pattern]] [--count] [count]'
    }
});
if(mustCount){
    count(populationByCountry)
}
stringPopulation=(!(Array.isArray(populationByCountry) && populationByCountry.length)) ? 'Nothing found' : JSON.stringify(populationByCountry)
console.log(stringPopulation)


module.exports = {
    count, filter
}
