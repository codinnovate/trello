import AddNewItem from "@/components/AddNewItem";
import Column from "@/components/Column";
import { useAppContext } from "@/contexts/app-context";

export default function Home() {
  const {lists} = useAppContext();
  return (
    <div className="flex">
        {lists.map((list) => (
          <Column
          text={list.text}
          id={list.id}
          key={list.id}
          />
        ))}
        <AddNewItem
       toggleBtnText="+ Add another list"
       onAdd={console.log}
      />  
    </div>
  );
}
