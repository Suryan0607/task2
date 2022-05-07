var request = new XMLHttpRequest()
request.open("GET", 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send()
request.onload = function() {
    var output = JSON.parse(request.response)

    function sum(input) {
        let q4 = input.map(a => a.population);
        let popsum = q4.reduce((a, b) => a + b); {
            console.log("Total Population is :", popsum)
        }
    }
    sum(output)

}