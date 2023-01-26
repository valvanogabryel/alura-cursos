import React from 'react';
import { useParams } from 'react-router-dom';
import posts from 'json/posts.json';

const Post = () => {
    const params = useParams();
    const paramsID = Number(params.id);

    let post = posts.find(post => post.id === paramsID);

    console.log(post);

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
        </article>
    );
}

export default Post;