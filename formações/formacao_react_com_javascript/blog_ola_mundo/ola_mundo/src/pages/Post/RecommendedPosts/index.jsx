import PostCard from 'components/PostCard';
import React from 'react';
import styles from './RecommendedPosts.module.css';

const RecommendedPosts = ({ posts }) => {
    return (
        <ul className={styles.recommendedPosts}>
            {
                posts.map(post =>
                (
                    <PostCard
                        postElement={post}
                        key={post.id}
                    />
                ))
            }
        </ul>
    );
}

export default RecommendedPosts;