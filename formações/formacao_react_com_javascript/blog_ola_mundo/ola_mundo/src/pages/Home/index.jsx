import React from 'react';

import Post from 'components/Post';

import styles from './Home.module.css';
import 'animate.css';

import posts from 'json/posts.json';


const Home = () => {
    return (
        <ul className={styles.posts}>
            {
                posts.map(post =>
                    <Post key={post.id} id={post.id} postElement={post} />
                )
            }
        </ul>
    )
}

export default Home;