import AddNewItem from "@/components/AddNewItem";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AddNewItem
       toggleBtnText="+ Add another list"
      //  onAdd=''
      />      
    </div>
  );
}
