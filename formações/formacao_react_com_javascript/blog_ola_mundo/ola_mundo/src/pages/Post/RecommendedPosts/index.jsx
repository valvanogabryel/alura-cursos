import PostCard from 'components/PostCard';
import React from 'react';
import styles from './RecommendedPosts.module.css';

const RecommendedPosts = ({ posts }) => {
    return (
        <>
            <h2 className={styles.otherPostsTitle}>Outros posts que você pode gostar:</h2>
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
        </>
    );
}

export default RecommendedPosts;