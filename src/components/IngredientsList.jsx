export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section className="px-6 mb-8">
            <h2 className="font-bold text-xl mt-4">Ingredients on hand:</h2>
            <ul className="m-8">{ingredientsListItems}</ul>
            {props.ingredients.length > 3 && <div className="bg-gray-100">
                <div className="flex items-center justify-between">
                    <div ref={props.ref} className="p-6">
                        <h3 className="font font-bold pb-4">Ready for a recipe?</h3>
                        <p className="font">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button 
                        className="font text-gray-100 rounded bg-orange-500 p-1 pr-3 pl-3 mr-6"
                        onClick={props.getRecipe}
                    >
                        Get a recipe
                    </button>
                </div>
            </div>}
        </section>
    )
}