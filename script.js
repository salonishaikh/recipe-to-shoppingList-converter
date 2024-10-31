document.addEventListener('DOMContentLoaded', function() {
    const recipeInput = document.getElementById('recipe-input'); // Matches
    const pantryInput = document.getElementById('pantry-input'); // Matches
    const addRecipeButton = document.getElementById('add-recipe'); // Matches
    const addPantryButton = document.getElementById('add-pantry'); // Matches
    const generateListButton = document.getElementById('generate-list'); // Matches here
    const shoppingList = document.getElementById('shopping-list'); // Matches

    let recipeItems = [];
    let pantryItems = [];

    function addRecipe() {
        const recipeValue = recipeInput.value;
        const items = recipeValue.split(',').map(item => item.trim());
        recipeItems.push(...items);
        recipeInput.value = '';
        console.log('Recipes:', recipeItems);
    }

    function addPantry() {
        const pantryValue = pantryInput.value; // Corrected variable name
        const items = pantryValue.split(',').map(item => item.trim());
        pantryItems.push(...items);
        pantryInput.value = '';
        console.log('Pantry:', pantryItems);
    }

    function generateShoppingList() {
        const shoppingItems = recipeItems.filter(item => !pantryItems.includes(item));
        shoppingList.innerHTML = shoppingItems.length > 0 ? shoppingItems.join('<br>') : 'No items to buy!';
    }

    addRecipeButton.addEventListener('click', addRecipe);
    addPantryButton.addEventListener('click', addPantry);
    generateListButton.addEventListener('click', generateShoppingList); // Matches here
});
