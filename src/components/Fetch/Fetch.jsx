import React from 'react';
import UserFetch from '../userFetch/UserFetch';

const Fetch = ({
    url,
    renderSuccess,
    loadingFallback = <p>loading...</p>,
    renderError = error => (
        <pre>{JSON.stringify(error, null, 2)}</pre>
    )
}) => {

    const { loading, data, error } = UserFetch(url);
    if (loading) return loadingFallback;
    if (error) return renderError(error);
    if (data) return renderSuccess({ data });


};

export default Fetch;