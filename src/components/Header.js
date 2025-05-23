import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectedLanguage } from '../features/language/LanguageSlice';

const Header = ({onLanguageChange}) => {
    const dispatch = useDispatch();
    const [language, setLanguages] = React.useState('en');

    const handleLanguageChange = (event) => {
        setLanguages(event.target.value);
        // Dispatch the selected language to the Redux store
        dispatch(selectedLanguage(event.target.value));
        onLanguageChange(event.target.value);
    };
    const navigateHome = () => {
        window.location.href = '/';
    };

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">React Learning</h1>
            <button 
                onClick={navigateHome} 
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
            >
                Home
            </button>
            <select className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200" onChange={handleLanguageChange} value={language}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="hi">Hindi</option>
            </select>
        </header>
    );
};

export default Header;