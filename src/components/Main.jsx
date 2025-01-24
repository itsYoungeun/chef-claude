import React from 'react';

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);

    const ingredientsListItems = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main className="p-6">
            <form 
                onSubmit={handleSubmit}
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
            <section>
                <h2 className="font-bold text-xl mt-4">Ingredients on hand:</h2>
                <ul className="m-8">{ingredientsListItems}</ul>
                <div className="bg-gray-100">
                    <div className="p-4">
                        <h3 className="font-bold">Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="font border border-r-2 bg-orange-400">Get a recipe</button>
                </div>
            </section>
        </main>
    )
}