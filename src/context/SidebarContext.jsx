import React,{useState, createContext} from 'react'
export const SidebarContext = createContext();

const SideBarProvider = ({children}) => {

    const [IsOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    }

  return (
    <SidebarContext.Provider value={{IsOpen, setIsOpen, handleClose}}>{children}</SidebarContext.Provider>
  )
}

export default SideBarProvider