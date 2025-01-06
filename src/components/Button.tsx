import { cn } from "@/lib/utils";

export default function Button ({title,className, icon}:{title:string, icon:any, className:string}){
    return (
        <button 
        className={cn('bg-primary flex items-center w-fit p-2 rounded-full', className)}>
            {icon && icon}
            <h1 className="">
            {title}
            </h1>
        </button>
    )
}