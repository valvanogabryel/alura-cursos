import MainButton from 'components/MainButton';
import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Post.module.css';

const PostCard = ({ postElement }) => {
    return (
        <Link to={`/posts/${postElement.id}`}>
            <li
                key={postElement.id}
                className={styles.post}>
                <img
                    src={`assets/posts/${postElement.id}/capa.png`}
                    alt={`Post: ${postElement.title}`}
                    className={styles.cover}
                />
                <h2 className={styles.title}>{postElement.title}</h2>
                <MainButton>Ler</MainButton>
            </li>
        </Link>
    );
}

export default PostCard;