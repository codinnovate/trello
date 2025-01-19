type TaskProps = {
    id:string,
    text:string,
}

type List = {
    id: string,
    text: string,
    tasks: TaskProps[],
}


export type AppContextProps ={
    lists:List[]
    getTasksByListid(id:string):TaskProps[]
}


export type AppState = {
    lists:List[]
}

type CardProps = {
    text:string
    id:string
}
type ColumnProps ={
    text:string
    id:string
}




type Theme = 'dark' | 'light';

type ThemeContextType = {
    theme: Theme
    toggleTheme:() => void;
    
}
export {
    CardProps,
    ColumnProps,
    TaskProps,
    Theme,
    ThemeContextType
}