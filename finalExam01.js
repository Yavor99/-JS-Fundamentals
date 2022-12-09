function solve(input) {
    let text = input.shift();
    let line = input.shift();
    while (line !== "Complete") {
        line = line.split(" ");
        if (line[0] === "Make" && line[1] === "Upper") {
            text = text.toUpperCase();
            console.log(text);
        } else if (line[0] === "Make" && line[1] === "Lower") {
            text = text.toLowerCase();
            console.log(text);
        } else if (line[0] === "GetDomain") {
            let domain = text.slice(-3)
            console.log(domain);
        } else if (line[0] === "GetUsername") {
            let name = "";
            let isValid = true;
            for (let i = 0; i < text.length; i++) {
                if (text[i] === "@") {
                    isValid = false;
                    break;
                } else {
                    name += text[i];
                }
            }
            if (isValid) {
                console.log(`The email ${text} doesn't contain the @ symbol.`);
            } else {
                console.log(name);
            }

        } else if (line[0] === "Replace") {
            let replacChar = line[1];

            for (let i = 0; i < text.length; i++) {
                if (text[i] === replacChar) {
                    text = text.replace(text[i], "-")
                }
            }
            console.log(text);

        } else if (line[0] === "Encrypt") {
            let num = [];
            for (let i = 0; i < text.length; i++) {
                let ch = text.charCodeAt(i);
                num.push(ch);
            }
            console.log(num.join(" "));
        }


        line = input.shift();
    }

}
solve((["Another@Mail.com",
    "Make Lower",
    "GetUsername",
    "GetDomain 3",
    "Encrypt",
    "Complete"])


)