import React from 'react'
import styles from './Banner.module.css';


const Banner = ({ banner }) => {
    return (
        <div className={styles.banner} style={{ backgroundImage: `url('${banner}')` }}>

        </div>


    );
}

export default Banner;