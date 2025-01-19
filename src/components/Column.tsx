import { useAppContext } from "@/contexts/app-context";
import { ColumnProps } from "@/lib/types";
import Card from "./Card";
import AddNewItem from "./AddNewItem";

export default function Column({text, id}:ColumnProps){
    const { getTasksByListId } = useAppContext();
    const tasks = getTasksByListId(id); 

    
    return (
        <div className="">
            <h1>{text}</h1>

            {tasks.map(task => (
                <Card
                 key={task.id}
                 text={task.text}
                 id={task.id}
                 
                 />
            ))}
           <AddNewItem
            toggleBtnText="+ Add another task"
            onAdd={console.log}
            dark
           />
        </div>

    )
}