document.getElementById('searchButton').addEventListener('click', searchRecipes);

function searchRecipes() {
  const apiKey = '0a8b3b6973ca4f7486f0f35881abbad8'; // Replace 'YOUR_API_KEY' with your actual Spoonacular API key
  const ingredients = document.getElementById('ingredientInput').value;

  fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const recipesContainer = document.getElementById('recipes');
      recipesContainer.innerHTML = '';

      data.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.id = 'recipe';
        recipeElement.innerHTML = `
          <h2>${recipe.title}</h2>
          <ul>
            ${recipe.usedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
          </ul>
        `;
        recipesContainer.appendChild(recipeElement);
      });
    })
    .catch(error => console.error('Error fetching recipes:', error));
}
