import React, { useState } from 'react';
import RecipeList from './RecipeList';
import Recipe from './Recipe';
import { title } from 'process';

function App() {
    const mashedPotatoesRecipe = {
        title: 'Stateful mashed potatoes',
        description: 'They are potatoes that are mashed',
        steps: [
            'Cut potatoes',
            'Boil potatoes',
            'Mash potatoes'
        ]
    };

    const [recipe, setRecipe] = useState(mashedPotatoesRecipe);

    // Setting up state
    // Loading data

    return (
        // <RecipeList />
        <section>
            <Recipe {...recipe} />
        </section>
    )
}

export default App;