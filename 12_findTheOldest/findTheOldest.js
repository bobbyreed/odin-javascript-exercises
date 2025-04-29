const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    oldest = 0;
    age = 0;
        for(let i = 0; i < people.length; i++) {
            console.log(`Checking person: ${people[i].name}`);
                if (!people[i].yearOfDeath) {
                    people[i].yearOfDeath = currentYear;
                    console.log(`Person ${people[i].name} has no yearOfDeath, assuming current year: ${currentYear}`);
                }
                // Calculate the age of the person
                const age = people[i].yearOfDeath - people[i].yearOfBirth;
                if(age > oldest){
                    oldest = age;
                    oldestPerson = people[i];
                }
                console.log(`${people[i].name} is ${age}. Current oldest age: ${oldest}`);
                
                
        }
        return oldestPerson;
    };

// Do not edit below this line
module.exports = findTheOldest;
