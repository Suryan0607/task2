var request = new XMLHttpRequest()
request.open("GET", 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send()
request.onload = function() {
    var output = JSON.parse(request.response)

    let q1 = output.filter(asi => asi.region == "Asia")
    console.log(q1)

    let q2 = output.filter(pop => pop.population < 200000)
    console.log(q2)

    let q33 = output.filter(asii => asii.region == "Asia" || asii.population < 200000)
    let q3 = q33.forEach(ncf => console.log("Name :", ncf.name + "," + "Capital :", ncf.capital + "," + "Flag :", ncf.flag))

}