var request = new XMLHttpRequest()
request.open("GET", 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send()
request.onload = function() {

    var output = JSON.parse(request.response)

    let q11 = output.filter(asi => asi.region == "Asia")
    console.log(q11)
    let q1 = q11.forEach(n => {
        console.log("Name :", n.name)

    });

}