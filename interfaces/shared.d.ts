export interface Step {
    text: string;
    completed?: boolean;
}

export interface RecipeInfo {
    title: string;
    description: string;
    steps: Array<Step>;
}

export interface RecipeProps extends RecipeInfo {
    stepClick: (index: number) => void;
}