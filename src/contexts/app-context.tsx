'use client';

import { AppContextProps, AppState, TaskProps, } from "@/lib/types";
import { createContext, useContext } from "react";

const appData: AppState = {
    lists: [
        {
            id: "0", 
            text: 'To do', 
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1", text: 'In Progress', tasks: [{ id: "c1", text: "Design UI" }]
        },
        {
            id: "2", text: 'Completed', tasks: [{ id: "c2", text: "Implement features" }]
        },
        {
            id: "3", text: 'Upcoming', tasks: [{ id: "c3", text: "Review and finalize" }]
        }
    ]
};

const initialState = {
    lists:[],
    getTasksByListid(id: string): TaskProps[]
}

const AppStateContext = createContext<AppContextProps>(initialState);

export default function AppStateProvider ({ children }:{children:React.ReactNode}) {
    const { lists } = appData;
    const getTasksByListid = (id: string): TaskProps[] => {
        const list = lists.find(list => list.id === id);
        return list ? list.tasks : []; 
    };

    return (
        <AppStateContext.Provider value={{lists, getTasksByListid}}>
            {children}
        </AppStateContext.Provider>
    );
};

export  function useAppContext(){
    const context = useContext(AppStateContext);
    
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
