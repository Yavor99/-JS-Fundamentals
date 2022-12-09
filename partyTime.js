function partyTime(data) {

    let vip = new Set();
    let normal = new Set();

    let isParty = false;
    for (let line of data) {
        if (line === "PARTY") {
            isParty = true;
            continue;
        }
        if (!isParty) {
            let firstChar = line[0];
            if (isNaN(firstChar)) {
                normal.add(line);
            } else {
                vip.add(line);
            }
        } else {
            normal.delete(line);
            vip.delete(line);
        }
    }

    let size = normal.size + vip.size;
    console.log(size);
    for (let code of vip) {
        console.log(code);
    }
    for (let code of normal) {
        console.log(code);
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)