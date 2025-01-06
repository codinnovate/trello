import { useState } from "react"

type AddNewItemProps = {
    onAdd(text: string): void;
    toggleBtnText:string,
    dark?: boolean
}
export default function AddNewItem(props:AddNewItemProps){
    const [showForm, setShowForm] = useState<boolean>(false)
    const {onAdd, toggleBtnText, dark} = props;

    if (showForm){

    }
    return (
        <AddItemBtn 
        dark={dark} 
        onClick={() => setShowForm(true)}>
            {toggleBtnText}
        </AddItemBtn>
    )
}