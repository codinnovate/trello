'use client';


import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AppsIcon from '@mui/icons-material/Apps';
import Logo from './Logo';
import NavItems from './NavItems';
import Button from './Button';

export default function Header(){
    return (
        <div className="flex p-5 justify-between border-b border-white">
            <div className='flex gap-2 items-center'>
            <MenuIcon
             sx={{color:'#e2e2e3'}}
            />
            <Logo />
            {/* <NavItems /> */}
            </div>
            <div className='flex items-center gap-3'>
            <WbSunnyIcon             
            sx={{color:'#e2e2e3'}}/>
            <AppsIcon             
            sx={{color:'#e2e2e3'}}/>
            <Button
             title='Sign in'
              />


                

            </div>

            

        </div>
    )
}