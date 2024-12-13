import React from 'react'
import { IoMdHome } from "react-icons/io";
import {IoIosRadio} from 'react-icons/io'
import {MdOutlineWbIncandescent} from 'react-icons/md'
import music from '../assets/logos/music.svg'

interface SideBarProps {
  musicPro?: string
}

const Sidebar : React.FC<SideBarProps> = ({musicPro = music}) => {
  return (
    <div
      className="sidebar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '190px',
        padding: '10px',
        
      }}>
      <div className="container-fluid">
        <div >
          <div className="immagine">
            <img src={musicPro} alt='music logo' 
            style={{filter: "invert(1)",marginBottom:"1em" }}/>
          </div>

          <div>
            <div className="search-bar ">
              <input type="text" placeholder="Cerca" className="form-control" />
            </div>
          </div>

          <div >
            <a href="#" className="okok">
            <IoMdHome className=''/> Home
            </a>
            <a href="#" className="okok">
              <MdOutlineWbIncandescent className="color1" />
              Novità
            </a>
            <a href="#" className="okok ">
              <IoIosRadio className="color1" /> Radio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
