function worldTour(data) {
    let inputLine = data.shift();
    let line = data.shift();

    while (line !== "Travel") {
        let [command, firstParam, lastParam] = line.split(":");
        let startIndex;
        let endIndex;

        switch (command) {
            case "Add Stop":
                startIndex = Number(firstParam);
                if (startIndex < 0 || startIndex >= inputLine.length) {
                    console.log(inputLine);
                    break;
                }
                let value = lastParam;
                let firstPart = inputLine.slice(0, startIndex);
                let secondPart = inputLine.slice(startIndex);
                inputLine = firstPart + value + secondPart;
                console.log(inputLine);
                break;

            case "Remove Stop":
                startIndex = Number(firstParam);
                endIndex = Number(lastParam);
                if (!inputLine[startIndex] || !inputLine[endIndex]) {
                    console.log(inputLine);
                    break;
                }
                let substr = inputLine.substring(startIndex, endIndex + 1);
                inputLine = inputLine.replace(substr, "");
                console.log(inputLine);
                break;
            case "Switch":
                let oldValue = firstParam;
                let newValue = lastParam;
                let pattern = new RegExp(oldValue, 'g');
                inputLine = inputLine.replace(pattern, newValue);
                console.log(inputLine);
        }
        line = data.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${inputLine}`);
}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)