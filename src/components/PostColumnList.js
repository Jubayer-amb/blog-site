import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostRow = ({ posts }) => (
    <Div>
        {posts.map((post) => (
            <PostDiv key={post.id}>
                <p>{post.id}</p>
                <Link to={`/posts/${post.id}`}>
                    <h2>{post.title}</h2>
                </Link>
                <br />
                <p className="body">{post.body.slice(0, 200)}.....</p>
                <Link to={`/posts/${post.id}`} className="more">
                    See more...
                </Link>
            </PostDiv>
        ))}
    </Div>
);

export default PostRow;

const Div = styled.div`
    margin: 1em;
`;

const PostDiv = styled.div`
    border-radius: 5px;
    margin: 1em;
    padding: 1em 0.5em;
    transition: 0.2s;
    &:hover {
        box-shadow: 1px 1px 5px #c0c0c0;
    }
    h2 {
        color: #f1356d;
        display: inline-block;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    .body {
        color: #09003c;
        font-size: 18px;
        font-weight: 500;
    }
    .more {
        display: inline-block;
        margin-top: 1em;
        color: #008040;
        &:hover {
            opacity: 0.7;
        }
    }
`;
