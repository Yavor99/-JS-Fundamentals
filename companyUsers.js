function companyUsers(data){

    let garages = {};
    for(let line of data){
        let [garage, carsInfo] = line.split(" - ");
        if(!garages.hasOwnProperty(garage)){
            garages[garage] = {};
        }
        garages[garage][line] = carsInfo;
    }

    let entries = Object.entries(garages);
 
    for (const [garage, carObj] of entries) {
        console.log(`Garage № ${garage}`);
 
        for (const key in carObj) {
            while (carObj[key].includes(': ')) {
                carObj[key] = carObj[key].replace(': ', ' - ');
            }
 
            console.log(`--- ${carObj[key]}`);
        }
    }
}
companyUsers(
    ['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', 
    '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
)