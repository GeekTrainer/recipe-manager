import React from 'react';
import { RecipeProps } from '../interfaces/shared'

function Recipe({title, description, steps, stepClick}: RecipeProps) {
    if (!title) {
        return (
            <div></div>
        )
    }

    const stepDisplay = 
        steps.map(
            (step, index) =>
                <li
                    key={index}
                    onClick={() => stepClick(index)}
                    className={ step.completed ? 'line-through' : '' }
                >
                    {step.text}
                </li>
        );
    return (
        <section>
            <h2>{ title }</h2>
            <div>{ description }</div>
            <ol>
                { stepDisplay }
            </ol>
        </section>
    )
}

export default Recipe;