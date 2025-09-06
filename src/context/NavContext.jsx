import React, { createContext, useState } from 'react'

export const NavBarContext = createContext()

const NavContext = ({children}) => {
    const [navopen, setNavOpen] = useState(false)
  return (
    <div>
        <NavBarContext.Provider value={[navopen, setNavOpen]}>
            {children}
        </NavBarContext.Provider>
    </div>
  )
}

export default NavContext