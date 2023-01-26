import React from 'react';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import PostModel from 'components/PostModel';

import posts from 'json/posts.json';

import './post.css';

const Post = () => {
    const params = useParams();
    const paramsID = Number(params.id);

    let post = posts.find(post => post.id === paramsID);

    console.log(post);

    return (
        <PostModel
            coverPhoto={`/assets/posts/${post.id}/capa.png`}
            title={post.title}
        >
            <div className='post-markdown-container'>
                <ReactMarkdown>
                    {post.text}
                </ReactMarkdown>
            </div>
        </PostModel>
    );
}

export default Post;