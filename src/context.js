import React from 'react';

const AppContext=React.createContext();

//provider
const AppProvider=({children})=>{

  return <AppContext.Provider value="rakib">
    {children}
  </AppContext.Provider>

};
export{AppContext,AppProvider}