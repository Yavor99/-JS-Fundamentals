function solve(arr) {

    let result = [];
    for(let el of arr){
       let obj = JSON.parse(el);
        result.push(obj)
    }
    result.sort((a, b) => {
        if(Object.keys(a)[0]  > Object.keys(b)[0]){
          return 1;
        } 
        if(Object.keys(a)[0] < Object.keys(b)[0]){
          return -1;
        } 
        return 0;
      });
     
      for (let word of result){
        let key = Object.keys(word).join();
        let value = word[key];
     
        console.log(`Term: ${key} => Definition: ${value}`);
     
      }
     
    }

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])

