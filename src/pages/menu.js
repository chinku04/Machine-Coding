import React, { createContext, useContext, useState } from "react";

// Feature Flags Context
const FeatureFlagContext = createContext({});

const useFeatureFlags = () => useContext(FeatureFlagContext);

const FeatureFlagProvider = ({ children }) => {
  const [flags, setFlags] = useState({
    showProfile: true,
    enableSettings: false,
  });

  return (
    <FeatureFlagContext.Provider value={{ flags, setFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

const AppMenu = () => {
  const { flags } = useFeatureFlags();

  return (
    <nav>
      <ul>
        <li>Home</li>
        {flags.showProfile && <li>Profile</li>}
        {flags.enableSettings && <li>Settings</li>}
      </ul>
    </nav>
  );
};

const AppTest = () => {
  return (
    <FeatureFlagProvider>
      <AppMenu />
    </FeatureFlagProvider>
  );
};

export default AppTest;
