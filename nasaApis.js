window.onload = function () {
    document.getElementById('apilist').innerHTML =
        `<ul>${
        catalog.map(api => {
            return `<li><a href="${api.link}" target="_blank">${api.name}</a></li>`
        }).join('')}
        </ul>`
}

catalog = [
    {
        "name": "API NASA",
        "link": "https://api.nasa.gov/"
    },
    {
        "name": "TechPort",
        "link": "http://techport.nasa.gov/home"
    },
    {
        "name": "ProgrammableWeb NASA collection",
        "link": "https://www.programmableweb.com/category/all/apis?keyword=nasa"
    },
    {
        "name": "RapidApi NASA collection",
        "link": "https://rapidapi.com/dimas/api/NasaAPI"
    }
]
//http://api.us.socrata.com/api/catalog/v1?domains=data.nasa.gov&offset=0&limit=5