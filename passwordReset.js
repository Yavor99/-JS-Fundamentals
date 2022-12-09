function passwordReset(data) {

    let inputLine = data.shift();
    let line = data.shift();


    while (line !== "Done") {
        let [command, firstParam, secodParam] = line.split(" ");
        switch (command) {
            case "TakeOdd":
                let res = "";
                for (let i = 0; i < inputLine.length; i++) {
                    if (i % 2 !== 0) {
                        res += inputLine[i];
                    }
                }
                inputLine = res;
                console.log(inputLine);
                break;

            case "Cut":
                let index = Number(firstParam);
                let length = Number(secodParam);

                let cut = inputLine.substr(index, length);
                inputLine = inputLine.replace(cut, '');
                console.log(inputLine);
                break;

            case "Substitute":
                let oldValue = firstParam;
                let newValue = secodParam;
                if (inputLine.includes(oldValue)) {
                    while (inputLine.includes(oldValue)) {
                        inputLine = inputLine.replace(oldValue, newValue);
                    }
                    console.log(inputLine);

                } else {
                    console.log(`Nothing to replace!`);
                }
                break;
        }

        line = data.shift();
    }
    console.log(`Your password is: ${inputLine}`);
}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
)