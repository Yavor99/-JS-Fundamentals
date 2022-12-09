function solve(first, second){
    let startChar = Math.min(first.charCodeAt(0), second.charCodeAt());
    let endChar = Math.max(first.charCodeAt(0), second.charCodeAt(0));
    
    let charInRangeArray = [];

    for (let current = startChar + 1; current < endChar; current++){
        let currentChar = String.fromCharCode(current);
        charInRangeArray.push(currentChar);
    }
    console.log(charInRangeArray.join(' '));
}    
solve('a',
'z'
)