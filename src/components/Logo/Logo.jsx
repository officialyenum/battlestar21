import React from 'react'
import classes from './Logo.module.css';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
      <img src={logo} alt="logo" className={classes.image} />
    
  )
}
export default Logo