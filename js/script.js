document.addEventListener('DOMContentLoaded', async () => {
    const countriesListContainer = document.getElementById('countries-list');
    const countryInfoContainer = document.getElementById('country-info');
    const closeBtn = document.getElementById('close-btn');
    const flag = document.getElementById('flag');
    const capital = document.getElementById('capital');
    const population = document.getElementById('population');
    const road = document.getElementById('road');
    const overlay = document.getElementById('overlay');

    // Obtener datos de la API
    const countries = await fetchCountries();
    // Ordenar países alfabéticamente (ignorando mayúsculas y minúsculas)
    countries.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));

    // Renderizar lista de países
    countries.forEach(country => {
        const flagImg = document.createElement('img');
        flagImg.src = country.flags[0];
        flagImg.alt = `${country.name} Flag`;
        flagImg.addEventListener('click', () => showCountryInfo(country));
        countriesListContainer.appendChild(flagImg);
    });

    // Mostrar información detallada del país
    function showCountryInfo(country) {
        flag.src = country.flags[0];
        capital.textContent = `Capital: ${country.capital[0] || 'N/A'}`;
        population.textContent = `Población: ${country.population || 'N/A'}`;
        road.textContent = `Lado de la carretera: ${country.trafficRules ? country.trafficRules.driving_side || 'N/A' : 'N/A'}`;

        countryInfoContainer.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    // Cerrar la ventana flotante
    function closeCountryInfo() {
        countryInfoContainer.classList.add('hidden');
        overlay.classList.add('hidden');
    }

    closeBtn.addEventListener('click', closeCountryInfo);
    overlay.addEventListener('click', closeCountryInfo);

    // Función para obtener datos de la API
    async function fetchCountries() {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        return data;
    }
});



