import React from 'react';
import styles from './PostModel.module.css';

const PostModel = ({ coverPhoto, title, children }) => {
    return (
        <article className={styles.postModelContainer}>
            <div
                className={styles.coverPhoto}
                style={{ backgroundImage: `url(${coverPhoto})` }}
            ></div>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.contentPostContainer}>
                {children}
            </div>
        </article>
    );
}

export default PostModel;