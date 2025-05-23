const Home = () => {
    return (
        <>
            <div className="p-4">
                <ul className="menu bg-gray-100 p-4 rounded shadow-lg">
                    <li className="mb-2"><a href="/" className="text-blue-500 hover:text-blue-700">Home</a></li>
                    <li className="mb-2"><a href="/autoComplete" className="text-blue-500 hover:text-blue-700">AutoComplete</a></li>
                    <li className="mb-2"><a href="/todo" className="text-blue-500 hover:text-blue-700">TODO</a></li>
                    <li className="mb-2"><a href="/todov1" className="text-blue-500 hover:text-blue-700">GptTodos</a></li>
                    <li className="mb-2"><a href="/tabs" className="text-blue-500 hover:text-blue-700">tabs</a></li>
                    <li className="mb-2"><a href="/timer" className="text-blue-500 hover:text-blue-700">Timer</a></li>
                    <li className="mb-2"><a href="/dynamicForm" className="text-blue-500 hover:text-blue-700">dynamicForm</a></li>
                    <li className="mb-2"><a href="/shimmerUi" className="text-blue-500 hover:text-blue-700">ShimmerUi</a></li>
                    <li className="mb-2"><a href="/accordian" className="text-blue-500 hover:text-blue-700">Accordian</a></li>
                    <li className="mb-2"><a href="/about" className="text-blue-500 hover:text-blue-700">About</a></li>
                    <li className="mb-2"><a href="/comments" className="text-blue-500 hover:text-blue-700">Nested Comments</a></li>
                    <li className="mb-2"><a href="/starRating" className="text-blue-500 hover:text-blue-700">Star Rating</a></li>
                    <li className="mb-2"><a href="/otp" className="text-blue-500 hover:text-blue-700">Otp Component</a></li>
                    <li className="mb-2"><a href="/nestedCheckbox" className="text-blue-500 hover:text-blue-700">Nested Checkbox</a></li>
                    <li className="mb-2"><a href="/progressBar" className="text-blue-500 hover:text-blue-700">progress Bar</a></li>
                    <li className="mb-2"><a href="/memoryGame" className="text-blue-500 hover:text-blue-700">Memory Game</a></li>
                </ul>
            </div>
        </>
    );
}
export default Home;