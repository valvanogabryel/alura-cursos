import React from 'react';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import PostModel from 'components/PostModel';
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';

import posts from 'json/posts.json';

import './post.css';

import RecommendedPosts from 'pages/Post/RecommendedPosts';

const Post = () => {
    const params = useParams();
    const paramsID = Number(params.id);

    let post = posts.find(post => post.id === paramsID);

    if (!post) return (<NotFound />);

    const recommendedPosts = posts
        .filter(post => post.id !== paramsID)
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <DefaultPage>
            <PostModel
                coverPhoto={`/assets/posts/${post.id}/capa.png`}
                title={post.title} >
                <div className='post-markdown-container'>
                    <ReactMarkdown>
                        {post.text}
                    </ReactMarkdown>
                </div>
            </PostModel>

            <RecommendedPosts posts={recommendedPosts} />
        </DefaultPage >
    );
}

export default Post;