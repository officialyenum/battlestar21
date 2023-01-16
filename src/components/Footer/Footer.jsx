import React from 'react'
import classes from './Footer.module.css';

const Footer = () => {
  return (
      <div className="container_12">
        <div className={`${classes.footer} clearfix`}>
          <p className="grid_12">
            <a href='/'>Privacy Policy</a> | <a href='/'>Copyright &copy; Battle Star 21  2023</a>
          </p>
        </div>
    </div>
  )
}

export default Footer