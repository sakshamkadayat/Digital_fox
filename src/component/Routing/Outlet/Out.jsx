import React from 'react'
import { Outlet } from 'react-router';
import Footer from '../../Footer';
import  Navbar  from "../../Navbar";

export default function Out() {
  return (
    <>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>

</> 
  )
}
