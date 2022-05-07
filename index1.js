var request = new XMLHttpRequest()
request.open("GET", 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send()
request.onload = function() {
    var output = JSON.parse(request.response)

    let q22 = output.filter(pop => pop.population < 200000)
    console.log(q22)
    let q2 = q22.forEach(pop => {
        console.log("Name :", pop.name + "," + "Population :", pop.population)
    });

}