const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = counties => {
    // console.log(country);
    // for(const count of country){
    //     console.log(count);
    // }  
    // or //
    const countryDiv = document.getElementById('countries');
    counties.forEach(country => {  // forEach use object coll korbo
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')
        const h3 = document.createElement('h3');
        h3.innerText = country.capital;
        div.appendChild(h3)
        // new object add
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countryDiv.appendChild(div);
    });
}