// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const countriesContainer = document.getElementById('countries'); // Reference to the countries div

    // Fetch country data from the REST Countries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Loop through each country in the fetched data
            data.forEach(country => {
                // Create a div for the country
                const countryDiv = document.createElement('div');
                countryDiv.classList.add('country-div');

                // Populate the div with country details
                countryDiv.innerHTML = `
                    <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
                    <h3>${country.name.common}</h3>
                    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                    <p><strong>Region:</strong> ${country.region}</p>
                    <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                `;

                // Append the country div to the container
                countriesContainer.appendChild(countryDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching country data:', error);
            countriesContainer.innerHTML = `<p>Error loading countries. Please try again later.</p>`;
        });
});
