import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'
const Navbar = (props) => {
    let isLoggedin=props.isLoggedin;
    let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div className='flex'>
      <Link to='/'>
        <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='flex gap-3'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/'>About</Link>
            </li>
            <li>
                <Link to='/'>Contact</Link>
            </li>
        </ul>
      </nav>

      <div className='flex ml-5 mr-3 gap-3'>
        {   !isLoggedin &&
            <Link to='/login'>
                <button>Login</button>
            </Link>
        }
        {   !isLoggedin &&
            <Link to='/signup'>
                <button>SignUp</button>
            </Link>
        }
        {   isLoggedin &&
            <Link to='/logout'>
                <button onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                }}>Logout</button>
            </Link>
        }
        {   isLoggedin &&
            <Link to='/dashboard'>
                <button>Dashboard</button>
            </Link>
        }
      </div>

    </div>
  )
}

export default Navbar
