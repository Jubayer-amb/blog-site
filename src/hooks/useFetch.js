import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // url = 'https://jsonplaceholder.typicode.com/posts'
        const controller = new AbortController();
        const { signal } = controller;
        fetch(url, { signal })
            .then((response) => {
                if (!response.ok) {
                    throw Error('Could not fetch the resource');
                }
                return response.json();
            })
            .then((resData) => {
                setError(null);
                setLoading(false);
                setData(resData);
            })
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    setLoading(false);
                    setError(err.message);
                    setData(null);
                }
            });
        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
