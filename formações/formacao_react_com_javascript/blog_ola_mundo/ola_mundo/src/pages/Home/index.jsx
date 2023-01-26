import React from 'react';

import PostCard from 'components/PostCard';

import styles from './Home.module.css';
import 'animate.css';

import posts from 'json/posts.json';


const Home = () => {
    return (
        <ul className={styles.posts}>
            {
                posts.map(post =>
                    <PostCard
                        key={post.id}
                        id={post.id}
                        postElement={post}
                    />
                )
            }
        </ul>
    )
}

export default Home;