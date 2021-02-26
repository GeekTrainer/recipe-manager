import { RecipeInfo } from "../interfaces/shared";

export const loadRecipe = async (): Promise<RecipeInfo> => {
    const response = await fetch('/api/recipe');
    const recipe = await response.json();
    return recipe;
}
