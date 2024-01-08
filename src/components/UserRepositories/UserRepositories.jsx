import React from 'react';
import Fetch from '../Fetch/Fetch';
import RepoMemu from '../RepoMenu/RepoMenu';

const UserRepositories = ({
    login,
    selectedRepo,
    onSelect = f => f
}) => {

    return (
        <Fetch
            url={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({ data }) => (
                <RepoMemu
                    repositories={data}
                    selectedRepo={selectedRepo}
                    onSelect={onSelect}
                    login={login}
                />
            )}
        />
    );
};

export default UserRepositories;