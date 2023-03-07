const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => {
            console.log(error)
        })
};


const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = "";
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');

        mealDiv.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src="${meal.strMealThumb}"/></figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-actions justify-end">
                    <button onclick="loadMealsDetails(${meal.idMeal})" class="btn btn-warning"><label for="meal-details-modal">View Details</label></button>
                </div>
            </div>
        </div>
        `;

        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
}


const loadMealsDetails = idMeal => {
    // console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showMealDetails(data.meals[0]))
}

const showMealDetails = meal => {
    document.getElementById('meal-details-label').innerText = meal.strMeal;
    document.getElementById('meal-details-image').src = meal.strMealThumb;
    document.getElementById('meal-details-category').innerText = meal.strCategory;
    document.getElementById('meal-details-area').innerText = meal.strArea;
    document.getElementById('meal-details-area').innerText = meal.strArea;
    document.getElementById('meal-details-link').innerText = meal.strYoutube;
}


loadMeals('fish')