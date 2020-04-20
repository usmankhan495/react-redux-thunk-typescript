import * as React from 'react'
import PostList from './PostList';

interface Props {
    name?: string
}
export const App: React.FC<Props> = ({ name }) => {
    return (
        <div className={'ui container'}>
            <PostList />
        </div>
    )
}