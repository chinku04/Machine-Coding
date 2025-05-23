import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, redirect } from 'react-router-dom';
import AppRoutes from './routes';
import React from 'react';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';

export const LanguageContext = React.createContext();
function App() {
  // satte variable to store selected language
  const [language, setLanguage] = React.useState('en');
  

  return (
    <Provider store={store}>
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <Header
          onLanguageChange={(language) => {
            setLanguage(language)
            console.log(language + ' selected  language')
          }}
        />

        <AppRoutes />
      </BrowserRouter>
    </LanguageContext.Provider>
    </Provider>
  );
}

export default App;
