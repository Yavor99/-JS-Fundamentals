function schoolGrades(data) {
    let result = new Map();
    for (let el of data) {
        let tokens = el.split(' ');
        let name = tokens[0];
        let sum = 0;
        for (let i = 1; i < tokens.length; i++) {
            sum += Number(tokens[i]);
        }
        let averageGrade = sum / (tokens.length - 1);
        if (!result.has(name)) {
            result.set(name, averageGrade)
        } else {
            let oldAverage = result.get(name);
            let newAverage = (oldAverage + averageGrade) / 2;
            result.set(name, newAverage)
        }
    }
    let sort = Array.from(result.entries()).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    })
    for (let [key, value] of sort) {
        console.log(`${key}: ${value.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)