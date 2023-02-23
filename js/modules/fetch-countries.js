export default function initFetchCountries() {
  async function fetchCountries() {
    const resp = await (await fetch("./data.json")).json();
    const parentCountries = document.querySelector("main .list-countries");

    resp.forEach((country) => {
      const { name, capital, population, flag, region } = country;

      const populationFormated = population.toLocaleString("pt-BR");

      const liCountry = document.createElement("li");
      liCountry.classList.add("country");

      liCountry.innerHTML = `
      <div class="image">
      <img src="${flag}" alt="Flag of ${name}" loading="lazy">
    </div>

    <div class="content">
      <h2 class="name-country">${name}</h2>
      <ul class="infos">
        <li class="population">
          <h3>Population: <span>${populationFormated}</span></h3>
        </li>

        <li class="region">
          <h3>Region: <span>${region}</span></h3>
        </li>

        <li class="capital">
          <h3>Capital: <span>${capital}</span></h3>
        </li>
      </ul>
    </div>
      `;

      parentCountries.appendChild(liCountry);
    });
  }

  fetchCountries();
}
