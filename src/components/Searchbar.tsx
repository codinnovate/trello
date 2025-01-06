import SearchIcon from '@mui/icons-material/Search';
import Button from './Button';

export default function Searchbar(){
    return (
        <div className='mt-5 w-full flex items-center flex-col '>
        <div className='bg-[#36373a] w-full h-[50px] rounded-md'>

        </div>
        <Button
         title='Explorer' 
         className='-mt-5'
         icon={<SearchIcon />}
         />
        </div>
    )
}