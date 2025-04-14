import React from 'react'
import { GlobalLoaderProvider } from './GloabalLoader'
import { ProfileDataProvider } from './ProfileData'

export default function AppContextProvider({ children }) {
    return (
      <GlobalLoaderProvider>
        <ProfileDataProvider>
          {children}
        </ProfileDataProvider>
      </GlobalLoaderProvider>
    );
  }