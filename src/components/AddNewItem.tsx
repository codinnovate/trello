'use client';

import { useState } from "react"
import NewItemForm from "./NewItemForm";

type AddNewItemProps = {
    onAdd(text: string): void;
    toggleBtnText:string,
    dark?: boolean,
}


export default function AddNewItem(props:AddNewItemProps, ){
    const [showForm, setShowForm] = useState<boolean>(false)
    const {onAdd, toggleBtnText, dark} = props;


     function handleAdd(text:string){
            onAdd(text)
            setShowForm(false);
     }
    if (showForm){
        return(
            <NewItemForm
             onAdd={handleAdd}
            />
        )

    }
    return (
        <button 
        // className={dark} 
        onClick={() => setShowForm(true)}>
            {toggleBtnText}
        </button>
    )
}