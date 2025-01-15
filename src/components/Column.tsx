
type ColumnProps = {
    text:string,
    children:React.ReactNode
}

export default function Column({text, children}:ColumnProps){
    return (
        <div className="">
            <h1>{text}</h1>
            {children}
            <p>added something herer</p>
        </div>

    )
}