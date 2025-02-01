import React from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromMistral } from '../ai';

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    const recipeSection = React.useRef(null);

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipe])

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main className="p-6">
            <form 
                onSubmit={addIngredient}
                className="flex items-center justify-center gap-3"
            >
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    className="md:size-full md:p-1.5 md:pl-3 max-w-[24rem] border-2 rounded-md 
                    border-gray-300 pl-3 p-1 font placeholder-gray-600 text-[0.75rem]"
                />
                <button 
                    className="rounded-md border-gray-300 p-1.5 pl-4 pr-4 font bg-black 
                    text-white text-[0.75rem]"
                >
                    + Add ingredient
                </button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList 
                    ref={recipeSection}
                    ingredients={ingredients} 
                    getRecipe={getRecipe}
                />
            }
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}