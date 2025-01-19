import AddNewItem from "@/components/AddNewItem";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex">
      <AddNewItem
       toggleBtnText="+ Add another list"
      //  onAdd=''
      />      
      <div className="flex flex-grow bg-yellow-300 h-screen" >
        upcoming tasks
        </div>
      <div className="flex flex-grow bg-green-300 h-screen" >
        <h1>in Progress tasks</h1>
        </div>
      <div className="flex flex-grow bg-blue-400 h-screen" >
        completed tasks
        </div>
    </div>
  );
}
