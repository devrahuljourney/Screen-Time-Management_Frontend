import { createContext, useContext, useState } from "react";

const GlobalLoaderContext = createContext({
  show: () => {},
  hide: () => {},
  showLoading: false, 
});

const GlobalLoaderProvider = ({ children }) => {
  const [showLoading, setShowLoading] = useState(false);

  const show = () => setShowLoading(true);
  const hide = () => setShowLoading(false);

  return (
    <GlobalLoaderContext.Provider value={{ show, hide, showLoading }}>
      {children}
    </GlobalLoaderContext.Provider>
  );
};

const useGlobalLoader = () => useContext(GlobalLoaderContext);

export { GlobalLoaderProvider, useGlobalLoader };
