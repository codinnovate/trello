import { CardProps } from "@/lib/types";



export default function Card({text, id}:CardProps){
    return (
        <div className="">
            <h1>{text}</h1>
            
        </div>
    )
}