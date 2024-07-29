import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';
import { AppConText } from '../../AppContext';

export default function Header() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = ()=> setCollapsed(!collapsed);
  const {cart} = useContext(AppConText);

  return (
    <div>
      <Navbar color='faded' light expand="md">
        <NavbarBrand href='/' className='me-auto'>
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='me-2'></NavbarToggler>
        <Collapse isOpen={!collapsed} Navbar></Collapse>
      </Navbar>
    </div>
  )
}
