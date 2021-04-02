const search = document.querySelector('form');
const main = document.querySelector('.container-box');
const resultDiv = document.querySelector('.recipie-result');
let searchedItem = '';
const urlbase = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=fe879933053846bea60a4b8878cddd62&number=1000&addRecipeNutrition=true&addRecipeInformation=true&instructionsRequired=true&query=';

async function getApi(item) {
    const finalurl = await fetch(urlbase + item);
    const recipies = await finalurl.json();
    getData(recipies.results);
}

function getData(recipie) {
    let allData = '';
    main.classList.remove('initial');
    recipie.map(result => {
        allData = allData +
            `<div class="all-recipies">
                <a href="${result.sourceUrl}" target="_blank" ><img src="${result.image}" alt="recipie image">
                    <div class="conatiner">
                        <h1>"${result.title}"</h1>
                    </div>
                    <h1 class="invisble-title">Click here view recipie</h1>
                    <p class="item-data">"${result.summary}"</p>
                </a>
            </div>`
    });
    resultDiv.innerHTML = allData;
}

search.addEventListener("submit", (e) => {
    e.preventDefault();
    searchedItem = e.target.querySelector('input').value;
    getApi(searchedItem);
});