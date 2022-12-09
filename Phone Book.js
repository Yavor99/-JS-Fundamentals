function phoneBook(data) {

    let obj = {};
    for (let el of data) {
        let [day, name] = el.split(' ');

        if (obj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            obj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    }

}
phoneBook(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)
