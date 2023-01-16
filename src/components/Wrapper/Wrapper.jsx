import React from 'react';
import classes from './Wrapper.module.css';

const Wrapper = () => {
  return (
    <div className={classes.wrapper}>
        <div className={`${classes['main-story']} container_12`}>
            <div className="grid_6">
                <h3>
                    Generate Your Character to Enjoy Battlestar
                </h3>
                <input
                type='text'
                name='username'
                placeholder='Username'
                />
                <button>Generate Character Now</button>
            </div>
            <div className={`${classes.intro} grid_3 push_8`}>
                <p className={classes.date}>
                    17 Jan 2023
                </p>
                <p>
                    Hello World
                </p>
            </div>
        </div>
    </div>
  )
}

export default Wrapper