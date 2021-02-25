import React, { useState, useEffect, useRef } from 'react';
import RecipeList from './RecipeList';
import Recipe from './Recipe';
import { RecipeInfo } from '../interfaces/shared';
import * as Store from './Store';

function App() {
    const [recipe, setRecipe] = useState<RecipeInfo>({});

    useEffect(
        async () => { // function
            const recipe = await Store.loadRecipe();
            setRecipe({ ...recipe });
        },
        [] // dependency - no dependency - run on load only
    )


    function toggleStepCompletion(index: number) {
        const tempRecipe: RecipeInfo = { ...recipe };
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