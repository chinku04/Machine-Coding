import React, { memo, useEffect } from 'react';
import './pageStyles.css';

const AutoComplete = () => {
    const [inputValue, setInputValue] = React.useState('');
    const [recipes, setRecipes] = React.useState([]);
    const [showAutoComplete, setShowAutoComplete] = React.useState(false);
    const [cachedResult, setCachedResult] = React.useState({});
    const fetchData = () => {
        fetch(`https://dummyjson.com/recipes/search?q=${inputValue}`)
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
                setCachedResult(prev=>({...prev, [inputValue]: data}));
            });
    }

    useEffect(() => {
        // debouincing the input value
        if (cachedResult[inputValue]) {
            console.log("cachedResult[inputValue]---->", cachedResult[inputValue]);
            setRecipes(cachedResult[inputValue]);
            return;
        }
        const timer = setTimeout(fetchData, 300);
        return () => clearTimeout(timer);
    }, [inputValue]);
    return (
        <div className="flex flex-col items-center p-4">
            <h3 className="text-lg font-semibold mb-2">AutoComplete</h3>
            <input
                className="border border-gray-300 rounded-md p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="autoComplete"
                value={inputValue}
                name="autoComplete"
                onFocus={() => setShowAutoComplete(true)}
                onBlur={() => setShowAutoComplete(false)}
                onChange={(e) => setInputValue(e.target.value)}
            />

            {recipes?.recipes?.length > 0 && showAutoComplete && (
                <div className="absolute mt-2 w-full max-w-md bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden z-10 max-h-60 overflow-y-auto mt-20" >
                    {recipes?.recipes?.map((recipe, index) => (
                        <div
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            key={index}
                        >
                            {recipe.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default AutoComplete;   