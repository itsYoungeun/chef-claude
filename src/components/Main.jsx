import React from 'react';

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);

    const ingredientsListItems = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

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
            {ingredients.length > 0 && <section className="px-6">
                <h2 className="font-bold text-xl mt-4">Ingredients on hand:</h2>
                <ul className="m-8">{ingredientsListItems}</ul>
                {ingredients.length > 3 && <div className="bg-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="p-6">
                            <h3 className="font font-bold pb-4">Ready for a recipe?</h3>
                            <p className="font">Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button className="font text-gray-100 rounded bg-orange-500 p-1 pr-3 pl-3 mr-6">Get a recipe</button>
                    </div>
                </div>}
            </section>}
        </main>
    )
}