'use client';

import { useState } from "react"



type NewItemFormProps = {
    onAdd(text: string): void;
}


export default function NewItemForm({onAdd}: NewItemFormProps){
    const [text, setText] = useState("");

    return (
        <div>
            <input
            value={text}
            onChange={e => setText(e.target.value)}
            />
            <button onClick={() => onAdd(text)}>
            Create
            </button>
        </div>
    )
}