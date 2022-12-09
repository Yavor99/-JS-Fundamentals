function solve(data) {

    let result = {};
    for (let el of data) {
        let [name, addres] = el.split(":");
        result[name] = addres;
    }

    let entries = Object.entries(result);
    let sortEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    })


    for (let [key, addres] of sortEntries) {
        console.log(`${key} -> ${addres}`);
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)