import React, { useState, useEffect, useContext, createContext } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  
    return (
        <AppContext.Provider value={{}}>
           {children}
        </AppContext.Provider>
    )
}

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
  }

  export { AppContext, AppProvider }
