import React from 'react';

function RecipeList() {
    const recipes = [
        'Chicken gumbo',
        'Pork stir fry',
        'Roast turkey',
        'Baby back ribs'
    ];

    const recipeDisplay = recipes.map(
        recipe => <li>{ recipe }</li>
    )

    return (
        <ul>
            { recipeDisplay }
        </ul>
    )
}

export default RecipeList;