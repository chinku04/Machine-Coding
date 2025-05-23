import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Lang from '../Utils/AboutUsUTils';


const About = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{Lang[language].title}</h1>
            <p className="mb-4">
                {Lang[language].intro}
            </p>
            <h2 className="text-3xl font-semibold mb-3">{Lang[language].missionTitle}</h2>
            <p className="mb-4">
                {Lang[language].mission}
            </p>
            <h2 className="text-3xl font-semibold mb-3">{Lang[language].visionTitle}</h2>
            <p className="mb-4">
                {Lang[language].vision}
            </p>
            <h2 className="text-3xl font-semibold mb-3">{Lang[language].valuesTitle}</h2>
            <p className="mb-4">
                {Lang[language].values}
            </p>
        </div>
    );
};

export default About;