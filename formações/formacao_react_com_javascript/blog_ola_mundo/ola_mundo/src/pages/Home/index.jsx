import React from 'react';
import Banner from 'components/Banner';
import Post from 'components/Post';

import styles from './Home.module.css';

import posts from 'json/posts.json';


const Home = () => {
    return (
        <main>
            <Banner />

            <ul className={styles.posts}>
                {
                    posts.map(post =>
                        <Post key={post.id} id={post.id} postElement={post} />
                    )
                }
            </ul>
        </main>
    )
}

export default Home;