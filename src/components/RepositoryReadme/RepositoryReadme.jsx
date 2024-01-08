import React, { useCallback, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';


const RepositoryReadme = ({ repo, login }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [markdown, setMarkDown] = useState('');

    const loadReadme = useCallback(async (login, repo) => {
        setLoading(true);
        const url = `https://api.github.com/repos/${login}/${repo}/readme`;
        const { download_url } = await fetch(url).then(res =>
            res.json());
            
        const markdown = await fetch(download_url).then(res =>
            res.text()
        );
        setMarkDown(markdown);
        setLoading(false);
    
    }, [login, repo]);

    useEffect(() => {
        if (!repo || !login) return;
        loadReadme(login, repo).catch(setError);
    }, [repo]);
    
    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (loading) return <p>Loading...</p>;

    return <ReactMarkdown>{markdown}</ReactMarkdown>   
};

export default RepositoryReadme;