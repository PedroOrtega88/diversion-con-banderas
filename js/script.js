document.addEventListener('DOMContentLoaded', async () => {
    const countriesListContainer = document.getElementById('countries-list');
    const countryInfoContainer = document.getElementById('country-info');
    const flag = document.getElementById('flag');
    const capital = document.getElementById('capital');
    const population = document.getElementById('population');
    const road = document.getElementById('road');
    const overlay = document.getElementById('overlay');
    const img = document.getElementById('img');

    //api
    const countries = await fetchCountries();
    
    // Ordenar países 
    countries.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));

//trar paises
    countries.forEach(country => {
        const flagImg = document.createElement('img');
        flagImg.src = country.flags[0];
        flagImg.alt = `${country.name} Flag`;
        flagImg.addEventListener('click', () => showCountryInfo(country));
        countriesListContainer.appendChild(flagImg);
        countriesListContainer.appendChild(flag);
      
    });

    //  información 
    function showCountryInfo(country) {
        flag.src = country.flags[0];
        capital.textContent = `Capital: ${country.capital[0] }`;
        population.textContent = `Población: ${country.population || z}`;
        countryInfoContainer.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    
    closeBtn.addEventListener('click', closeBtn);
    overlay.addEventListener('click', closeBtn);

    //obtener api
    async function fetchCountries() {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        return data;
    }
});



