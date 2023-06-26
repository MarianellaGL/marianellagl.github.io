import { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';

const useOctokitFetch = (path, options = {}) => {
    console.log(path)
    console.log(options)
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const octokit = new Octokit(options);

            setIsLoading(true);

            try {
                const response = await octokit.rest.repos.listForUser({
                    username: options.username
                });
                console.log('resssponse', response)
                setData(response.data);
            } catch (error) {
                console.log(error);
                setError(error);
            }

            setIsLoading(false);
        };

        fetchData();
    }, []);

    return { data, isLoading, error };
};

export default useOctokitFetch;
