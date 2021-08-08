import { useState } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import PostColumnList from './PostColumnList';

const Home = ({ url }) => {
    const [searchValue, setSearchValue] = useState('');
    const [uri, setUri] = useState(url);

    const handleChange = ({ target }) => {
        const { value } = target;
        setSearchValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchValue) {
            setUri(url);
        } else if (searchValue) {
            const updatedUri = `${url}?q=${searchValue}`;
            setUri(updatedUri);
        }
    };

    const { data, loading, error } = useFetch(uri);

    return (
        <div className="blog-list">
            {loading && <h2>Loading...</h2>}
            {error && <h4 style={{ color: 'red' }}>{error}</h4>}
            {data && (
                <>
                    <SearchHeaderDiv>
                        <h2>All Blogs!</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="search"
                                value={searchValue}
                                onChange={handleChange}
                                placeholder="Search...."
                            />
                            <button type="submit">
                                <i className="fas fa-search search-iconnnn" />
                            </button>
                        </form>
                    </SearchHeaderDiv>
                    <PostColumnList posts={data} />
                </>
            )}
        </div>
    );
};

export default Home;

const SearchHeaderDiv = styled.div`
    margin: 1em auto 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
        outline: none;
        border: 2px solid #f1356d;
        border-radius: 8px 0 0 8px;
        padding: 4px 10px;
        font-size: 1em;
        font-weight: bold;
        color: #696969;
        &:focus {
            color: #f1356d;
        }
    }
    button {
        margin: 0;
        border: none;
        border-radius: 0 8px 8px 0;
        outline: none;
        padding: 6px 12px;
        font-size: 1em;
        background: #f1356d;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        &:hover {
            opacity: 0.9;
        }
    }
`;
