var request = new XMLHttpRequest()
request.open("GET", 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send()
request.onload = function() {
    var output = JSON.parse(request.response)

    //Get all the countries from Asia continent / region using Filter function
    let q11 = output.filter(asi => asi.region == "Asia")
    console.log(q11)
    let q1 = q11.forEach(n => {
        console.log("Name :", n.name)
    });


    //Get all the countries with a population of less than 2 lakhs using Filter function
    let q22 = output.filter(pop => pop.population < 200000)
    console.log(q22)
    let q2 = q22.forEach(pop => {
        console.log("Name :", pop.name + "," + "Population :", pop.population)
    });

    //Print the following details name, capital, flag using forEach function
    let q33 = output.filter(asii => asii.region == "Asia" || asii.population < 200000)
    let q3 = q33.forEach(ncf => console.log("Name :", ncf.name + "," + "Capital :", ncf.capital + "," + "Flag :", ncf.flag))

    //Print the total population of countries using reduce function
    function sum(input) {
        let q4 = input.map(a => a.population);
        let popsum = q4.reduce((a, b) => a + b); {
            console.log("Total Population is :", popsum)
        }
    }
    sum(output)

    //Print the country which uses US Dollars as currency.
    let q55 = output.filter(curr => curr.currencies[0].code == "USD")
    console.log(q55)
    let q5 = q55.forEach(us => {
        console.log("Name :", us.name + "," + "currencies :", us.currencies[0].code)
    });


}