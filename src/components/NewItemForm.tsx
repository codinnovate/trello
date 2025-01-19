'use client';

import { useFocus } from "@/utils/useFocus";
import { useState } from "react"



type NewItemFormProps = {
    onAdd(text: string): void;
}

export default function NewItemForm({onAdd}: NewItemFormProps){
    const [text, setText] = useState("");
    const inputRef = useFocus();

    function handleAddText(event:React.KeyboardEvent<HTMLInputElement>) {
        if(event.key === "Enter") {
            onAdd(text);
        }
    }
    
    return (
        <div>
            <input
            value={text}
            onChange={e => setText(e.target.value)}
            ref={inputRef}
            onKeyDown={handleAddText}
            />
            <button onClick={() => onAdd(text)}>
            Create
            </button>
        </div>
    )
}