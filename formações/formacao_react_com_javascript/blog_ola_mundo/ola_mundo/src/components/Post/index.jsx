import React from 'react'
import styles from './Post.module.css';

const Post = ({ postElement }) => {
    return (
        <li key={postElement.id} className={styles.post}>
            <img
                src={`assets/posts/${postElement.id}/capa.png`}
                alt={`Post: ${postElement.title}`}
                className={styles.cover}
            />
            <h2 className={styles.title}>{postElement.title}</h2>
            <button className={styles.readButton}>Ler</button>
        </li>
    );
}

export default Post;