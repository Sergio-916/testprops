import React, { useState, useEffect } from 'react';


const UserFetch = ( url) => {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!url) return;
        setLoading(true);
        fetch(url)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [url]);

    return {
       loading,
       data,
       error
    };
};

export default UserFetch;