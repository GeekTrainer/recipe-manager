import React, { useState } from 'react';
import RecipeList from './RecipeList';
import Recipe from './Recipe';
import { RecipeInfo } from './props'

function App() {
    const mashedPotatoesRecipe: RecipeInfo = {
        title: 'Stateful mashed potatoes',
        description: 'They are potatoes that are mashed',
        steps: [
            {text: 'Cut potatoes', completed: false},
            {text: 'Boil potatoes', completed: false},
            {text: 'Mash potatoes', completed: false}
        ]
    };

    // TODO: Figure out why the generic isn't working
    const [recipe, setRecipe] = useState<RecipeInfo>(mashedPotatoesRecipe);

    function toggleStepCompletion(index: number) {
        const tempRecipe: RecipeInfo = {...recipe};
        tempRecipe.steps[index].completed = !tempRecipe.steps[index].completed;
        setRecipe(tempRecipe);
    }

    return (
        // <RecipeList />
        <section>
            <Recipe {...recipe} stepClick={toggleStepCompletion} />
        </section>
    )
}

export default App;