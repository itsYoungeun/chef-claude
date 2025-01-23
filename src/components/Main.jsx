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
            <ul>{ingredientsListItems}</ul>
        </main>
    )
}