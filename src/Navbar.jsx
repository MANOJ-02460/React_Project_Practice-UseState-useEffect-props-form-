import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className="navSection">
      <a href='#' className='logo'>
          <img src='https://uc7ee4221d7e828bbc2ae941254b.previews.dropboxusercontent.com/p/thumb/ACy8QXqHG0N-5ovm7mhLuJEvGD8VbzL3vDZPdOEH8vrxpgNp8e6FY0PddT_F5vzdP76tnAtYVKFhwxpdnwb-UP0_sl2fZh_RunsAgK4RIFWvncsRaCuKxIp0A_4qNd9bgajZo8gkAyYUOCaDZPdFlQiga7pUt-GywyEMXbb_Qn3wSBo-cxTB-vhTmkijoRpGAsB_Pbzlh_RrVx0whtAG6dQRravzo92a_rT09s3BjHgjKzA7_LnVBJOFDk8PrFN8PCpPZzl0cV8p2PlBj4cET43SMDwhb5yekHEV93GS1KpfClFIjynOCuN6Y0Nn_J3MCxtmYt0-eG0IDnZO1xbhjeL7/p.png' alt='Logo '/>
      </a>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/course'>
          <li>Course</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar