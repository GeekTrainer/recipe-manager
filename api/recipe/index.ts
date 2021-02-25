import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import * as Mongoose from 'mongoose';
import { RecipeInfo } from '../../interfaces/shared';

// schemas - Mongoose
const recipeStepSchema = new Mongoose.Schema({
    text: String,
    completed: Boolean
});
const recipeSchema = new Mongoose.Schema({
    title: String,
    description: String,
    steps: [recipeStepSchema],
});

// document - TypeScript the structure of individual items
interface RecipeDocument extends RecipeInfo, Mongoose.Document {}

// model - Intermediary
const RecipeModel =
    Mongoose.model<RecipeDocument>('recipe', recipeSchema);

Mongoose.connect(process.env.MONGO_DB);

const recipeFunction: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let recipe = await RecipeModel.findOne({});

    if(!recipe) {
        recipe = await RecipeModel.create({
            title: 'Stateful mashed potatoes',
            description: 'They are potatoes that are mashed',
            steps: [
                {text: 'Cut potatoes', completed: false},
                {text: 'Boil potatoes', completed: false},
                {text: 'Mash potatoes', completed: false}
            ]
        });    
    }

    context.log('Returning sample recipe');


    context.res = {
        // status: 200, /* Defaults to 200 */
        'Content-Type': 'application/json',
        body: recipe
    };

};

export default recipeFunction;