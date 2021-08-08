import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';

const PostDetails = ({ url }) => {
    const { id } = useParams();

    const { data: post, loading, error } = useFetch(`${url}/${id}`);

    const history = useHistory();

    const nonDeleteableIds = [1, 2, 3, 4, 5];

    const handleDelete = () => {
        const deleteableId = nonDeleteableIds.find((postId) => postId === post.id);
        if (!deleteableId) {
            fetch(`${url}/${post.id}`, {
                method: 'DELETE',
            }).then(() => {
                history.push('/');
            });
        } else {
            // eslint-disable-next-line no-alert
            alert(`First 5 posts saved parmanently and can't be deleted.`);
            history.push('/');
        }
    };

    return (
        <Div>
            {loading && <h3>Loading...</h3>}
            {error && <p>{error}</p>}
            {post && (
                <>
                    <H1>{post.title}</H1>

                    <p>UserId: {post.userId}</p>

                    <br />

                    <h3>Written by: {post.author}</h3>

                    <br />

                    <P>{post.body}</P>

                    <br />

                    <Button type="button" onClick={handleDelete}>
                        Delete
                    </Button>
                </>
            )}
        </Div>
    );
};
export default PostDetails;

const Div = styled.div`
    margin: 8em auto 0em;
`;

const H1 = styled.h1`
    text-align: center;
    color: crimson;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const P = styled.p`
    font-size: 20px;
    font-style: italic;
`;

const Button = styled.button`
    padding: 0.8em 1.2em;
    margin: 2em auto;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: bold;
    border-radius: 10px;
    background: #f1356d;
    color: #fff;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
