var request = new XMLHttpRequest()
request.open("GET", 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send()
request.onload = function() {
    var output = JSON.parse(request.response)
    let q55 = output.filter(curr => curr.currencies[0].code == "USD")
    console.log(q55)
    let q5 = q55.forEach(us => {
        console.log("Name :", us.name + "," + "currencies :", us.currencies[0])
    });
}