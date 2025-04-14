const { createContext, useState, useContext } = require("react");

const ProfileDataContext = createContext({
  username: null,
  screenTime: null,
});

const ProfileDataProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [screenTime, setScreenTime] = useState(null);

  return (
    <ProfileDataContext.Provider value={{ username, screenTime, setUsername, setScreenTime }}>
      {children}
    </ProfileDataContext.Provider>
  );
};

const useProfileDataContext = () => useContext(ProfileDataContext);

module.exports = {
  ProfileDataContext,
  ProfileDataProvider,
  useProfileDataContext, 
};
