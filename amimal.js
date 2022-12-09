function solve(input) {

    let store = {};
    let count = 0;
    let command = input.shift();
    while (command !== "EndDay") {
        let line = command.split(" ");
        let newCommand = line[0];
        let [name, food, place] = line[1].split("-");
        if (newCommand === "Add:") {
            if (!store.hasOwnProperty(name)) {
                store[name] = { food, place, hungryAnimals: 0}
            } else {
                store[name].food = Number(store[name].food) + Number(food);
            } 
            if(store.hasOwnProperty(name)){
                store[name].hungryAnimals = Number(store[name].hungryAnimals) + 1;
            }
        } else if (newCommand === "Feed:") {
            if (store.hasOwnProperty(name)) {
                store[name].food = Number(store[name].food) - Number(food);
                if (store[name].food <= 0) {
                    console.log(`${name} was successfully fed`);
                    delete store[name]
                }
            }
        }
        if (line[0] === "EndDay") {
            break;
        }
        command = input.shift();
    }

    let sorted = Object.keys(store).sort(
        (a, b) =>
            store[a].food - store[b].food ||
            (store[b].place) - (store[a].place));

    console.log("Animals:");

    for (let animals of sorted) {
        console.log(` ${animals} -> ${store[animals].food}g`);
    }

    console.log(`Areas with hungry animals:`);

    for (let hungry of sorted) {
        console.log(`${store[hungry].place}: ${store[hungry].hungryAnimals}`);
    }

}
solve(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"])