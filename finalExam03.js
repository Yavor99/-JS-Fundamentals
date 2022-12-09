function solve(input) {
    let store = {};
    let line = input.shift();
    while (line !== "Results") {
        line = line.split(":");
        if (line[0] === "Add") {
            let name = line[1];
            let health = Number(line[2]);
            let energy = Number(line[3]);
            if (!store.hasOwnProperty(name)) {
                store[name] = { health, energy };
            } else {
                store[name].health += health;
            }

        } else if (line[0] === "Attack") {
            let attackerName = line[1];
            let defenderName = line[2];
            let damage = Number(line[3]);
            if (store.hasOwnProperty(attackerName && defenderName)) {
                store[attackerName].energy--;
                store[defenderName].health -= damage;
                if (store[defenderName].health <= 0) {
                    console.log(`${defenderName} was disqualified!`);
                    delete store[defenderName];
                }
                if (store[attackerName].energy <= 0) {
                    console.log(`${attackerName} was disqualified!`);
                    delete store[attackerName];
                }
            }
        } else if (line[0] === "Delete") {
            let deleteName = line[1];
            if (deleteName !== "All") {
                if (store.hasOwnProperty(deleteName)) {
                    delete store[deleteName];
                }
            } else {
                for (let key in store) {
                    delete store[key]
                }

            }
        }
        line = input.shift();
    }

    let workArr = Object.entries(store);
    let sorted = workArr.sort((a, b) => {
        if (a[1].health === b[1].health) {
            return a[0].localeCompare(b[0]);
        } else {
            return a[0].energy - b[0].energy;
        }
    }
    )
    console.log(`People count: ${sorted.length}`);
    for (let kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1].health} - ${kvp[1].energy}`);
    }

}
solve(
    (["Add:Bonnie:3000:5",
        "Add:Johny:4000:10",
        "Delete:All",
        "Add:Bonnie:3333:3",
        "Add:Aleks:1000:70",
        "Add:Tom:4000:1",
        "Results"])


)