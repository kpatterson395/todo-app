import React, { createContext, useState } from 'react';


export const ViewContext = createContext()

export const ViewProvider = (props) => {

    const [view, setView] = useState({ date: 'today', filter: 'none' })
    return (
        <ViewContext.Provider value={{ view, setView }}>
            {props.children}
        </ViewContext.Provider>
    )
}