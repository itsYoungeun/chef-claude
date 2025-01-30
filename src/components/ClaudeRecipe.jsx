import ReactMarkdown from 'react-markdown';

export default function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container">
            <h1 className="font-bold mb-4">Chef Claude Recommends:</h1>
            <ReactMarkdown>
                {props.recipe}
            </ ReactMarkdown>
        </section>
    )
}