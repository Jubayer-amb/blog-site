import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const NewBlog = ({ url }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('type here...');
    const [author, setAuthor] = useState('Jubayer');
    const [guestName, setGuestName] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleChange = ({ target }) => {
        const { name, value } = target;

        if (name === 'title') {
            setTitle(value);
        } else if (name === 'body') {
            setBody(value);
        } else if (name === 'author') {
            setAuthor(value);
        } else if (name === 'guest') {
            setGuestName(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            title,
            body,
            author: author === 'Guest' ? guestName : author,
            userId: Math.floor(Math.random() * 10),
        };

        setIsPending(true);

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post),
        }).then(() => {
            setIsPending(false);
            history.push('/');
        });
    };

    return (
        <Div>
            <form onSubmit={handleSubmit}>
                <h2>Add a New Blog</h2>
                <Label htmlFor="title">
                    Title:
                    <input
                        required
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                </Label>
                <Label htmlFor="body">
                    Body:
                    <textarea
                        required
                        name="body"
                        value={body}
                        onChange={handleChange}
                        cols="50"
                        rows="5"
                    />
                </Label>
                <Label htmlFor="author">
                    Author:
                    {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                    <select name="author" value={author} onChange={handleChange}>
                        <option value="Jubayer">Jubayer</option>
                        <option value="Fahim">Fahim</option>
                        <option value="Sakib">Sakib</option>
                        <option value="Guest">Guest</option>
                    </select>
                </Label>
                {author === 'Guest' ? (
                    <Label htmlFor="guest">
                        Author name:
                        <input type="text" name="guest" value={guestName} onChange={handleChange} />
                    </Label>
                ) : null}
                {!isPending && <Button type="submit">Add Blog</Button>}
                {isPending && (
                    <Button disabled type="button">
                        Add Blog
                    </Button>
                )}
            </form>
        </Div>
    );
};

export default NewBlog;

const Div = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 1em auto;
    padding: 1em 0;
    text-align: center;

    h2 {
        color: #f1356d;
    }
`;

const Label = styled.label`
    display: block;
    text-align: left;
    font-weight: bold;
    letter-spacing: 1px;

    input,
    textarea,
    select {
        display: block;
        width: 100%;
        margin: 0.5em 0;
        padding: 6px 12px;
        font-size: 16px;
        border: 1px solid black;
        border-radius: 5px;
    }
`;

const Button = styled.button`
    padding: 1em 2em;
    margin: 2em auto;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    background: #f1356d;
    color: #fff;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
