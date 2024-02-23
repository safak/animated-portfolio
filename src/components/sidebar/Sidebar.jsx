import './sidebar.scss'
import Links from './links/Links'
import ToggleButton from './ToggleButton'
import { useState } from 'react'

const Sidebar = () => {
    useState [open,setOpen] = useState(false)


    const variants ={
        open: as,
        closed:
    }
  return (
    <div className='sidebar'>
        <div className="bg">
            <Links/>
        </div>
        <ToggleButton setOpen={setOpen}/>
    </div>
  )
}

export default Sidebar